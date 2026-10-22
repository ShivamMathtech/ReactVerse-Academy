import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
const write = (path, text) => {
  mkdirSync(path.slice(0, path.lastIndexOf('/')), { recursive: true });
  writeFileSync(path, text);
};
const core = JSON.parse(readFileSync('curriculum/source.json', 'utf8'));
const projects = JSON.parse(readFileSync('curriculum/projects.json', 'utf8'));
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
const refs = {
  react: 'https://react.dev/learn',
  vite: 'https://vite.dev/guide/',
  javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
  html: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  css: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  typescript: 'https://www.typescriptlang.org/docs/',
  'react-router': 'https://reactrouter.com/start/declarative/installation',
  vitest: 'https://vitest.dev/guide/',
  'react-testing-library': 'https://testing-library.com/docs/react-testing-library/intro/',
  accessibility: 'https://www.w3.org/WAI/tutorials/',
  security:
    'https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html',
  'api-integration': 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
  hooks: 'https://react.dev/reference/react/hooks',
  performance: 'https://react.dev/reference/react/Profiler',
  deployment: 'https://vite.dev/guide/static-deploy.html',
};
const extraRefs = {
  13: ['https://tanstack.com/query/latest/docs/framework/react/quick-start'],
  20: [
    'https://react.dev/blog/2026/09/09/react-19-3',
    'https://react.dev/reference/rsc/server-components',
    'https://react.dev/learn/react-compiler',
  ],
  18: ['https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html'],
  12: ['https://redux-toolkit.js.org/introduction/getting-started'],
};
const phases = [
  'Orientation',
  'JavaScript prerequisites',
  'React fundamentals',
  'React mastery',
  'Professional engineering',
  'Production and deployment',
  'Hands-on projects',
];
const categories = {
  difficulty: ['beginner', 'beginner-plus', 'intermediate', 'advanced', 'expert-concepts'],
  technology: [
    'react',
    'vite',
    'javascript',
    'typescript',
    'html',
    'css',
    'react-router',
    'vitest',
    'react-testing-library',
  ],
  concept: [
    'jsx',
    'components',
    'props',
    'state',
    'events',
    'hooks',
    'useeffect',
    'usecontext',
    'usereducer',
    'forms',
    'rendering',
    'reconciliation',
    'performance',
    'accessibility',
    'security',
    'api-integration',
    'routing',
    'testing',
    'deployment',
  ],
  activity: [
    'theory',
    'code-example',
    'hands-on',
    'exercise',
    'quiz',
    'interview',
    'debugging',
    'mini-project',
    'capstone',
  ],
  career: [
    'frontend-fundamentals',
    'production-ready',
    'frontend-interview',
    'industry-practices',
    'portfolio-project',
  ],
};
for (const [id, title, level] of [
  ['23', 'Beginner Projects', 'beginner'],
  ['24', 'Intermediate Projects', 'intermediate'],
  ['25', 'Advanced Projects', 'advanced'],
  ['26', 'Capstone Project', 'advanced'],
]) {
  const selected = projects.filter((p) => p.chapterId === id);
  core.push({
    id,
    title,
    slug: `${id}-${slugify(title)}`,
    phase: 6,
    difficulty: level,
    tags: [
      'react',
      'vite',
      'hands-on',
      'portfolio-project',
      ...(id === '26' ? ['capstone', 'typescript'] : ['mini-project']),
    ],
    analogy:
      'A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.',
    lessons: selected.map((p) => ({
      title: p.title,
      project: p.id,
      tags: p.tags,
      notes: [
        { title: 'Problem statement', text: p.summary },
        { title: 'Feature contract', text: p.features.join('. ') + '.' },
        {
          title: 'Architecture and folder structure',
          text: `${p.path}/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.`,
        },
        {
          title: 'Implementation steps',
          text: 'Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.',
        },
        {
          title: 'Testing strategy',
          text: `Render ${p.title} and drive its labeled controls using userEvent. Assert visible outcomes for ${p.features[0].toLowerCase()}. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.`,
        },
      ],
      code: readFileSync(`${p.path}/App.jsx`, 'utf8').split('\n').slice(0, 24).join('\n'),
      language: 'jsx',
      output: `Open ${p.entry} using the root Vite server. The complete executable implementation is included at ${p.path}; its documented controls implement: ${p.features.join(', ')}.`,
      why: `This project connects ${p.tags.join(', ')} in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.`,
      internals:
        'Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.',
      mistake: `Do not treat the ${p.title.toLowerCase()} as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.`,
      exercise: `Run the project and demonstrate ${p.features[0].toLowerCase()}. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.`,
      solution: `// Full solution is included in ${p.path}/App.jsx.\n// Follow the module imports for its shared helpers.\n// Run from the root: npm run dev\n// Open: /${p.entry}`,
      question: p.quiz.question,
      options: p.quiz.options,
      correct: p.quiz.correct,
    })),
  });
}
const lessons = [];
const chapters = [];
for (const c of core) {
  const chapter = {
    id: c.id,
    title: c.title,
    slug: c.slug,
    phase: c.phase,
    phaseTitle: phases[c.phase],
    difficulty: c.difficulty,
    tags: [...new Set([c.difficulty, ...c.tags])],
    lessonIds: [],
  };
  c.lessons.forEach((l, index) => {
    const rotation = (Number(c.id) + index) % l.options.length;
    l.options = [
      ...l.options.slice(-rotation || l.options.length),
      ...l.options.slice(0, -rotation || l.options.length),
    ];
    l.correct = (l.correct + rotation) % l.options.length;
    const id = `${c.id}-${String(index + 1).padStart(2, '0')}`;
    const slug = `${id}-${slugify(l.title)}`;
    const topicTags = [...new Set([...c.tags, ...(l.tags || [])])];
    const technologyTags = topicTags.filter((t) => categories.technology.includes(t));
    const tags = [
      ...new Set([
        c.difficulty,
        ...topicTags,
        'theory',
        'code-example',
        'exercise',
        'quiz',
        'interview',
        ...(l.project ? ['hands-on'] : []),
      ]),
    ];
    const references = [
      ...new Set([...c.tags.map((t) => refs[t]).filter(Boolean), ...(extraRefs[c.id] || [])]),
    ];
    const metadata = {
      id,
      chapterId: c.id,
      title: l.title,
      slug,
      description: l.why,
      difficulty: c.difficulty,
      technologyTags,
      conceptTags: tags.filter((t) => categories.concept.includes(t)),
      learningFormatTags: tags.filter((t) => categories.activity.includes(t)),
      tags,
      prerequisites: lessons.length ? [lessons.at(-1).id] : [],
      learningObjectives: l.notes
        .slice(0, 4)
        .map((n) => `Explain and apply ${n.title.toLowerCase()}.`),
      estimatedDuration: l.project ? (c.id === '26' ? 240 : 90) : Math.max(20, l.notes.length * 7),
      previous: lessons.at(-1)?.id || null,
      next: null,
      exerciseAvailable: true,
      quizAvailable: true,
      projectAssociations: l.project
        ? [l.project]
        : projects
            .filter((p) => p.tags.some((t) => c.tags.includes(t)))
            .slice(0, 3)
            .map((p) => p.id),
      officialReferences: references,
      sourcePath: `lessons/${c.slug}/${slug}.md`,
      chapterSlug: c.slug,
      phase: c.phase,
      code: l.code,
      language: l.language,
      expectedOutput: l.output,
      exercise: {
        id: `ex-${id}`,
        problem: l.exercise,
        hint: l.notes.at(-1).text,
        solution: l.solution,
        explanation: l.internals,
      },
      quiz: {
        id: `quiz-${id}`,
        question: l.question,
        options: l.options,
        correct: l.correct,
        explanation: `${l.options[l.correct]}. ${l.internals}`,
      },
      interview: [
        { level: 'Basic', question: l.question, answer: l.options[l.correct] },
        {
          level: 'Intermediate',
          question: `Explain the execution of the ${l.title.toLowerCase()} example.`,
          answer: l.internals,
        },
        {
          level: 'Advanced',
          question: `What mistake or trade-off would you watch for when applying ${l.title.toLowerCase()} in a larger application?`,
          answer: l.mistake,
        },
      ],
    };
    if (lessons.length) lessons.at(-1).next = id;
    lessons.push({ ...metadata, _content: l, _chapter: c });
    chapter.lessonIds.push(id);
  });
  chapters.push(chapter);
}
const lessonById = Object.fromEntries(lessons.map((l) => [l.id, l]));
function lessonLink(id, _current) {
  if (!id) return 'Start of course';
  const l = lessonById[id];
  return `[${l.title}](../${l.chapterSlug}/${l.slug}.md)`;
}
function annotate(code, language) {
  if (['css', 'html', 'bash', 'powershell'].includes(language))
    return code
      .split('\n')
      .map(
        (line, i) =>
          `- Line ${i + 1}: \`${line.replaceAll('`', "'")}\` ${line.trim().startsWith('#') || line.trim().startsWith('//') ? 'is a comment or instruction, not an executable operation.' : language === 'css' ? 'defines the selector, declaration, or responsive boundary shown.' : language === 'html' ? 'adds the named semantic element or its content.' : 'runs the named command or sets the documented public configuration.'}`,
      )
      .join('\n');
  return code
    .split('\n')
    .map((line, i) => {
      const text = line.trim();
      if (!text || /^[{}();]+$/.test(text)) return null;
      let explanation = text.startsWith('//')
        ? 'Documents a usage boundary or related use case; it is not executed.'
        : text.startsWith('import ')
          ? 'Imports the named API or type from its module.'
          : text.includes('useState(')
            ? 'Creates render state and its setter; the initial value is used on mount.'
            : text.includes('useEffect(')
              ? 'Registers external synchronization after commit.'
              : text.includes('return () =>')
                ? 'Returns cleanup to release the external resource.'
                : text.includes('console.')
                  ? 'Prints the observable value so you can compare it with the expected output.'
                  : text.includes('await ')
                    ? 'Waits for the Promise without blocking the browser event loop.'
                    : text.includes('throw ')
                      ? 'Rejects this invalid or failed path instead of silently continuing.'
                      : text.includes('.map(')
                        ? 'Transforms each matching item into a new value or element.'
                        : text.includes('.filter(')
                          ? 'Keeps only records that satisfy the predicate.'
                          : text.includes('return ')
                            ? 'Returns the value or UI for this branch.'
                            : text.includes('onChange=') || text.includes('onClick=')
                              ? 'Connects a user interaction to the handler shown.'
                              : text.startsWith('const ')
                                ? 'Defines the named binding from the expression on the right.'
                                : text.startsWith('type ') || text.startsWith('| ')
                                  ? 'Describes a static TypeScript contract or union alternative.'
                                  : text.includes('function ')
                                    ? 'Defines a named operation; it runs when called or rendered.'
                                    : text.startsWith('if ')
                                      ? 'Chooses whether the guarded branch should run.'
                                      : 'Continues the surrounding expression or element; follow its opening statement for the data flow.';
      return `- Line ${i + 1}: ${explanation}`;
    })
    .filter(Boolean)
    .join('\n');
}
for (const l of lessons) {
  const a = l._content,
    c = l._chapter;
  const project = projects.find((p) => p.id === a.project);
  const md = `# ${l.title}\n\n> Chapter ${c.id} · ${c.title} · ${l.difficulty} · ${l.estimatedDuration} minutes\n\n## Learning objectives\n${l.learningObjectives.map((x) => '- ' + x).join('\n')}\n\n## Prerequisites\n${l.prerequisites.length ? lessonLink(l.prerequisites[0], l) : 'No prior React experience. A browser, text editor, and curiosity are enough to begin.'}\n\n## Why this concept exists\n${a.why}\n\n## A useful analogy\n${c.analogy}\n\n## Concepts, syntax, and terminology\n${a.notes.map((n) => `### ${n.title}\n${n.text}`).join('\n\n')}\n\n## Small example\n${project ? `This is a source excerpt. The **complete runnable code** is in [the project directory](../../${project.path}/README.md).` : 'Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.'}\n\n\`\`\`${a.language}\n${a.code}\n\`\`\`\n\n## Expected output\n${a.output}\n\n## Line-by-line walkthrough\n${annotate(a.code, a.language)}\n\n## Internal behavior and data flow\n${a.internals}\n\n${Number(c.id) >= 4 && Number(c.id) <= 20 ? 'The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.' : ''}\n\n## Common mistakes: incorrect versus correct\n${a.mistake}\n\n## Practical use case\n${project ? project.summary : `Use this concept when building ${projects.find((p) => l.projectAssociations.includes(p.id))?.title.toLowerCase() || 'a maintainable learning interface'}. Keep the ownership and failure behavior described above explicit.`}\n\n## Guided exercise and independent challenge\n${a.exercise}\n\n<details>\n<summary>Hint</summary>\n\n${l.exercise.hint}\n\n</details>\n\n## Exercise solution\n\`\`\`${a.language}\n${a.solution}\n\`\`\`\n\n${a.internals}\n\n## Quiz\n**${a.question}**\n\n${a.options.map((x, i) => `${i + 1}. ${x}`).join('\n')}\n\n**Answer: ${a.correct + 1}.** ${l.quiz.explanation}\n\n## Interview questions\n${l.interview.map((x) => `- **${x.level}: ${x.question}**\n  ${x.answer}`).join('\n')}\n\n## Summary\n${a.why} ${a.internals}\n\n## Revision checklist\n${l.learningObjectives.map((x) => `- [ ] ${x}`).join('\n')}\n- [ ] Predict the example output before running it.\n- [ ] Explain and correct the documented mistake.\n- [ ] Complete the challenge without copying the solution.\n\n## Navigation\nPrevious: ${lessonLink(l.previous, l)}\n\nNext: ${l.next ? lessonLink(l.next, l) : 'Course complete — revisit a capstone decision and explain its trade-offs.'}\n\n[Chapter index](README.md) · [Course index](../../README.md)\n\n## Tags and study time\n${l.tags.map((t) => '`' + t + '`').join(' ')}\n\nEstimated time: ${l.estimatedDuration} minutes including guided practice; independent projects can take longer.\n\n## Official references\n${l.officialReferences.map((url) => `- [${new URL(url).hostname}${new URL(url).pathname}](${url})`).join('\n')}\n`;
  write(l.sourcePath, md);
  write(
    `exercises/${['beginner', 'beginner-plus'].includes(l.difficulty) ? 'beginner' : l.difficulty === 'intermediate' ? 'intermediate' : 'advanced'}/${l.id}.md`,
    `# Exercise ${l.id}: ${l.title}\n\n[Read the lesson](../../${l.sourcePath})\n\n${l.exercise.problem}\n\n## Hint\n${l.exercise.hint}\n\n## Solution\n\`\`\`${l.language}\n${l.exercise.solution}\n\`\`\`\n\n${l.exercise.explanation}\n`,
  );
}
for (const c of chapters) {
  const group = lessons.filter((l) => l.chapterId === c.id);
  write(
    `lessons/${c.slug}/README.md`,
    `# Chapter ${c.id}: ${c.title}\n\n${c.phaseTitle} · ${c.difficulty} · ${group.reduce((s, l) => s + l.estimatedDuration, 0)} minutes\n\nEach lesson below follows the complete teaching template: objectives, prerequisites, why, analogy, terminology, example, output, annotated walkthrough, internals, mistakes, use case, guided task, independent challenge, solution, quiz, interviews, summary, revision checklist, links, tags, time, and official references.\n\n${group.map((l) => `- [${l.title}](${l.slug}.md) — ${l.estimatedDuration} minutes`).join('\n')}\n\n## Chapter objectives\n${group
      .flatMap((l) => l.learningObjectives)
      .map((x) => '- ' + x)
      .join('\n')}\n\n## Topic coverage\n${group
      .flatMap((l) => l._content.notes)
      .map((n) => '- ' + n.title)
      .join('\n')}\n\n## Tags\n${c.tags.join(', ')}\n\n[Full course](../../README.md)\n`,
  );
  write(
    `quizzes/chapter-${c.id}.json`,
    JSON.stringify(
      group.map((l) => l.quiz),
      null,
      2,
    ) + '\n',
  );
}
for (const p of projects) {
  const isCap = p.id === 'studyflow';
  const main = isCap
    ? `import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App.jsx';\ncreateRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);`
    : `import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport { DemoLayout } from '../../shared/ui.jsx';\nimport App from './App.jsx';\ncreateRoot(document.getElementById('root')).render(<StrictMode><DemoLayout title=${JSON.stringify(p.title)} description=${JSON.stringify(p.summary)}><App /></DemoLayout></StrictMode>);`;
  write(`${p.path}/main.jsx`, main + '\n');
  write(
    `${p.path}/index.html`,
    `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${p.title} | ReactVerse</title></head><body><div id="root"></div><script type="module" src="./main.jsx"></script></body></html>\n`,
  );
  write(
    `${p.path}/README.md`,
    `# ${p.title}\n\n## Problem statement\n${p.summary}\n\n## Feature contract\n${p.features.map((x) => '- ' + x).join('\n')}\n\n## Prerequisites\nComplete chapter ${p.chapterId === '23' ? '08' : p.chapterId === '24' ? '13' : '22'} and use the root Node/npm installation. Review ${p.tags.join(', ')}.\n\n## Run\nFrom the repository root: \`npm ci\`, then \`npm run dev\`. Open \`/${p.entry}\` at the printed development origin. For production run \`npm run build\` and \`npm run preview\`; the same entry is emitted in dist. No nested package installation is needed.\n\n## Architecture and actual folder structure\n- [App.jsx](App.jsx): complete feature implementation${isCap ? ' with nested routes' : ''}.\n- [main.jsx](main.jsx): React mounting${isCap ? '' : ' and shared project shell'}.\n- [index.html](index.html): independently runnable Vite entry.\n${isCap ? '- [model.js](model.js): reducer and validation.\n- [api.js](api.js): Fetch API and runtime shape checking.\n- [store.jsx](store.jsx): reducer provider and persistence.\n- [TypeScript variant](../studyflow-typescript/README.md): same behavior with strict types.' : '- [Shared helpers](../../shared): UI, storage, mock request, and sample records used by explicit imports.'}\n\n## Implementation walkthrough\n1. Read the imports to identify shared contracts.\n2. Locate state initialization and list the authoritative values.\n3. Trace each labeled control to its event handler.\n4. Follow the immutable update into derived output.\n5. Exercise empty and invalid input before adding functionality.\n6. Inspect cleanup for any timer/request and the storage-failure branch if present.\n\n## Complete runnable code\nThe linked files above are the solution, not pseudocode. All supporting imports are included in this archive. Study the smallest relevant state transition before reading the whole component.\n\n## Testing strategy\nRoot \`npm test\` includes project render smoke tests and targeted interaction tests for counter, todo, registration, cart, component patterns, async states, and the capstone. Not every extension has a dedicated test. Manually verify keyboard flow, narrow layout, and reload behavior in a real browser.\n\n## Extensions\nAdd undo to one reversible action; preserve a clear ownership model and test the restored result. For a real backend, replace the data boundary and add server-side validation/authorization rather than treating browser storage as trusted.\n\n## Interview discussion\n- Which values are source state and which are derived?\n- How do identity and immutable updates affect this workflow?\n- Which failure or cancellation path matters most?\n- What would change if multiple users edited the same record?\n\n## Scope\nThis is a complete educational frontend for the feature contract above. External authentication, payments, email, and multi-user synchronization are not implemented or implied.\n`,
  );
}
write(
  'projects/advanced/studyflow-typescript/main.tsx',
  `import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\nconst container = document.getElementById('root');\nif (!container) throw new Error('Root element missing');\ncreateRoot(container).render(<StrictMode><App /></StrictMode>);\n`,
);
write(
  'projects/advanced/studyflow-typescript/index.html',
  `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>StudyFlow TypeScript</title></head><body><div id="root"></div><script type="module" src="./main.tsx"></script></body></html>`,
);
write(
  'projects/advanced/studyflow-typescript/README.md',
  `# StudyFlow — strict TypeScript edition\n\nSame feature contract as [the JavaScript edition](../studyflow/README.md). Run from the repository root and open \`/projects/advanced/studyflow-typescript/index.html\`.\n\n- App.tsx: nested routes, forms, course fetch and request states.\n- model.ts: Task, Action, reducer, runtime validation.\n- store.tsx: typed Context and persistence.\n- api.ts: Course shape and cancelable fetch.\n- main.tsx: checked root mounting.\n\n\`npm run typecheck\` uses strict checking. \`npm run capstone:sync\` compiles this edition to the JavaScript source using the installed TypeScript compiler with JSX preserved. It does not copy dependencies. Both editions share the browser-local task key by design.\n`,
);
const examples = [
  ['hello-react', 'React creates a view from a function', null],
  ['props-demo', 'Pass data and compose children', null],
  ['state-counter', 'Functional state updates', 'beginner/counter'],
  ['todo-app', 'Immutable task operations', 'beginner/todo-app'],
  ['weather-dashboard', 'Cancelable mock asynchronous UI', 'intermediate/weather-dashboard'],
  ['ecommerce-ui', 'A validated simulated checkout', 'advanced/ecommerce-ui'],
];
for (const [name, description, path] of examples) {
  let source = path
    ? `export { default } from '../../projects/${path}/App.jsx';`
    : name === 'hello-react'
      ? `export default function App(){return <section className="panel"><h2>Hello, React!</h2><p>Edit examples/hello-react/App.jsx and watch Vite update this view.</p></section>;}`
      : `function Profile({name,skills=[],children}){return <article className="panel"><h2>{name}</h2><p>{skills.join(' · ')}</p>{children}</article>;}\nexport default function App(){return <div className="grid"><Profile name="Maya" skills={['HTML','React']}><p>Learning composition.</p></Profile><Profile name="Arun" skills={['JavaScript']}><p>The same component, different props.</p></Profile></div>;}`;
  write(`examples/${name}/App.jsx`, source + '\n');
  write(
    `examples/${name}/main.jsx`,
    `import {createRoot} from 'react-dom/client';\nimport App from './App.jsx';\nimport {DemoLayout} from '../../projects/shared/ui.jsx';\ncreateRoot(document.getElementById('root')).render(<DemoLayout title=${JSON.stringify(name)} description=${JSON.stringify(description)}><App /></DemoLayout>);\n`,
  );
  write(
    `examples/${name}/index.html`,
    `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${name}</title></head><body><div id="root"></div><script type="module" src="./main.jsx"></script></body></html>`,
  );
  write(
    `examples/${name}/README.md`,
    `# ${name}\n\n${description}.\n\nRun \`npm run dev\` from the repository root, then open \`/examples/${name}/index.html\`. ${path ? `The App module imports the complete [${name} implementation](../../projects/${path}/README.md) to avoid duplicate logic.` : 'Edit App.jsx to experiment.'}\n`,
  );
}
const cleanLessons = lessons.map(({ _content, _chapter, code: _code, ...l }) => l);
write(
  'src/data/curriculum.json',
  JSON.stringify({ chapters, lessons: cleanLessons, phases, categories }, null, 2),
);
write('src/data/projects.json', JSON.stringify(projects, null, 2));
write(
  'src/data/examples.json',
  JSON.stringify(
    examples.map(([id, description]) => ({
      id,
      title: id.replaceAll('-', ' '),
      description,
      entry: `examples/${id}/index.html`,
    })),
    null,
    2,
  ),
);
const extraExamples = [
  {
    id: 'query-cache',
    title: 'TanStack Query cache',
    description: 'Fetch, cache, and refetch the local course fixture.',
    entry: 'examples/query-cache/index.html',
  },
  {
    id: 'typescript-patterns',
    title: 'TypeScript patterns',
    description: 'Strict typed unions and a generic list.',
    entry: 'examples/typescript-patterns/index.html',
  },
];
write(
  'src/data/examples.json',
  JSON.stringify(
    [
      ...examples.map(([id, description]) => ({
        id,
        title: id.replaceAll('-', ' '),
        description,
        entry: `examples/${id}/index.html`,
      })),
      ...extraExamples,
    ],
    null,
    2,
  ),
);
write(
  'docs/TAGS.md',
  `# Master tag reference\n\n${Object.entries(categories)
    .map(
      ([category, tags]) =>
        `## ${category}\n${tags.map((t) => `- \`${t}\`: ${lessons.filter((l) => l.tags.includes(t)).length} lessons`).join('\n')}`,
    )
    .join(
      '\n\n',
    )}\n\n## Chapter mapping\n${chapters.map((c) => `- ${c.id} ${c.title}: ${c.tags.join(', ')}`).join('\n')}\n`,
);
write(
  'docs/CURRICULUM-COVERAGE.md',
  `# Curriculum coverage\n\n${chapters.length} chapters, ${lessons.length} individual lessons, ${projects.length} executable projects (including the capstone), ${lessons.length} exercises, ${lessons.length} quiz questions, and ${lessons.length * 3} interview prompts.\n\nAll syllabus chapter numbers 00–26 are present. Lesson titles group closely related topics; the mapping below lists the teaching topics inside each lesson. Advanced systems concepts are explicitly conceptual when they need infrastructure.\n\n${chapters
    .map(
      (c) =>
        `## ${c.id} ${c.title}\n${lessons
          .filter((l) => l.chapterId === c.id)
          .map((l) => `### ${l.title}\n${l._content.notes.map((n) => '- ' + n.title).join('\n')}`)
          .join('\n')}`,
    )
    .join('\n\n')}\n`,
);
write(
  'docs/content-stats.json',
  JSON.stringify(
    {
      chapters: chapters.length,
      lessons: lessons.length,
      projects: projects.length,
      quizzes: lessons.length,
      exercises: lessons.length,
      interviewPrompts: lessons.length * 3,
    },
    null,
    2,
  ),
);
if (!existsSync('README.md'))
  writeFileSync(
    'README.md',
    '# ReactVerse Academy\n\nDocumentation is being assembled; see docs/CURRICULUM-COVERAGE.md.\n',
  );
console.log(
  `Generated ${chapters.length} chapters, ${lessons.length} lessons, ${projects.length} projects.`,
);
