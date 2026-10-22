import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import assert from 'node:assert/strict';
const { chapters, lessons, categories } = JSON.parse(
  readFileSync('src/data/curriculum.json', 'utf8'),
);
const projects = JSON.parse(readFileSync('src/data/projects.json', 'utf8'));
const ids = new Set(lessons.map((l) => l.id)),
  slugs = new Set(lessons.map((l) => l.slug));
assert.equal(chapters.length, 27);
assert.equal(ids.size, lessons.length);
assert.equal(slugs.size, lessons.length);
const knownTags = new Set(Object.values(categories).flat());
for (let i = 0; i < chapters.length; i++) {
  const c = chapters[i];
  assert.equal(c.id, String(i).padStart(2, '0'));
  assert.ok(c.lessonIds.length);
  assert.ok(existsSync(`lessons/${c.slug}/README.md`));
  assert.ok(c.lessonIds.every((id) => ids.has(id)));
}
for (let i = 0; i < lessons.length; i++) {
  const l = lessons[i];
  for (const field of [
    'id',
    'chapterId',
    'title',
    'slug',
    'description',
    'difficulty',
    'technologyTags',
    'conceptTags',
    'learningFormatTags',
    'prerequisites',
    'learningObjectives',
    'estimatedDuration',
    'previous',
    'next',
    'exerciseAvailable',
    'quizAvailable',
    'projectAssociations',
    'officialReferences',
  ])
    assert.ok(field in l, `${l.id} missing ${field}`);
  assert.ok(l.description.length > 30);
  assert.ok(l.learningObjectives.length);
  assert.ok(l.officialReferences.length);
  assert.ok(l.estimatedDuration > 0);
  assert.ok(
    l.tags.every((t) => knownTags.has(t)),
    `${l.id}: invalid tag`,
  );
  assert.equal(l.previous, lessons[i - 1]?.id || null);
  assert.equal(l.next, lessons[i + 1]?.id || null);
  assert.ok(l.prerequisites.every((id) => ids.has(id)));
  assert.ok(l.projectAssociations.every((id) => projects.some((p) => p.id === id)));
  const q = l.quiz;
  assert.ok(
    q.options.length >= 2 && q.correct >= 0 && q.correct < q.options.length && q.explanation,
  );
  assert.ok(l.exercise.problem && l.exercise.solution && l.exercise.explanation);
  const markdown = readFileSync(l.sourcePath, 'utf8');
  for (const heading of [
    'Learning objectives',
    'Prerequisites',
    'Why this concept exists',
    'A useful analogy',
    'Concepts, syntax, and terminology',
    'Small example',
    'Expected output',
    'Line-by-line walkthrough',
    'Internal behavior and data flow',
    'Common mistakes',
    'Practical use case',
    'Guided exercise',
    'Exercise solution',
    'Quiz',
    'Interview questions',
    'Summary',
    'Revision checklist',
    'Navigation',
    'Tags and study time',
    'Official references',
  ])
    assert.ok(markdown.includes(`## ${heading}`), `${l.id} missing ${heading}`);
  for (const url of l.officialReferences) assert.equal(new URL(url).protocol, 'https:');
}
for (const p of projects)
  for (const file of ['README.md', 'App.jsx', 'main.jsx', 'index.html'])
    assert.ok(existsSync(`${p.path}/${file}`), `${p.id} missing ${file}`);
function files(dir) {
  return readdirSync(dir).flatMap((n) => {
    if (['node_modules', 'dist', '.git'].includes(n)) return [];
    const p = `${dir}/${n}`;
    return statSync(p).isDirectory() ? files(p) : [p];
  });
}
let checked = 0;
for (const file of files('.').filter((f) => f.endsWith('.md'))) {
  const text = readFileSync(file, 'utf8').replace(/```[\s\S]*?```/g, '');
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split('#')[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    assert.ok(
      existsSync(resolve(dirname(file), target)),
      `Broken local link in ${file}: ${target}`,
    );
    checked++;
  }
}
console.log(
  `Content audit passed: ${chapters.length} chapters, ${lessons.length} lessons, ${projects.length} projects, ${checked} local Markdown links.`,
);
