# ReactVerse Academy

## Learn React from Zero to Production.

A chapter-wise React + Vite learning repository for students, self-learners, interview candidates, and educators. It combines an interactive Academy, original Markdown lessons, complete runnable project source, quizzes, exercises, and reference material. No backend, account, paid API, or API key is required.

**27 chapters · 92 lessons · 23 projects · 8 example entry points · 92 exercises · 92 quiz questions · 276 interview prompts · 71 glossary terms.** Counts come from committed curriculum data, not marketing statistics.

## Quick start on Windows

Install Node.js 24 LTS (or a compatible Node >=22.12), extract the ZIP, and open PowerShell in its parent folder.

```powershell
cd react-vite-complete-course
node --version
npm.cmd ci
npm.cmd run dev
```

Open the local URL printed by Vite. `npm.cmd` avoids a blocked PowerShell npm.ps1 without changing execution policy. You can also double-click `START-WINDOWS.bat` after installing Node; it installs missing dependencies and starts the dev server. The first install needs internet. Subsequent local learning uses the bundled content.

## macOS and Linux

```bash
cd react-vite-complete-course
npm ci
npm run dev
```

Stop a foreground server with Ctrl+C. Do not copy node_modules across operating systems. The lockfile includes the dependency graph; npm selects native optional packages for the machine running npm ci.

## Learning outcomes

- Explain browser, JavaScript, rendering, and component fundamentals in your own words.
- Build forms, navigable views, async UI, and immutable state transitions.
- Choose state ownership, component boundaries, and caching approaches deliberately.
- Test user behavior, inspect failure states, and implement accessible interactions.
- Use TypeScript, profile actual work, and deploy reproducible static builds.
- Discuss trade-offs and distinguish client capabilities from server/framework infrastructure.

## Beginner-to-expert roadmap

1. Orientation and web foundations (00–01).
2. JavaScript prerequisites (02).
3. Setup, JSX, props, state, lists, and forms (03–08).
4. Hooks, architecture, routing, state management, and async UI (09–13).
5. Styling, testing, types, performance, accessibility, security, and advanced React (14–20).
6. Production and engineering practices (21–22).
7. Beginner, intermediate, advanced projects and StudyFlow capstone (23–26).

## Curriculum navigation

| Chapter | Topic                                                                             | Lessons | Level           |
| ------- | --------------------------------------------------------------------------------- | ------: | --------------- |
| 00      | [Course Introduction](lessons/00-getting-started/README.md)                       |       3 | beginner        |
| 01      | [Web Development Foundations](lessons/01-web-foundations/README.md)               |       3 | beginner        |
| 02      | [Modern JavaScript for React](lessons/02-javascript-for-react/README.md)          |       3 | beginner-plus   |
| 03      | [React and Vite Setup](lessons/03-react-vite-setup/README.md)                     |       3 | beginner        |
| 04      | [JSX and Components](lessons/04-jsx-components/README.md)                         |       3 | beginner        |
| 05      | [Props and Data Flow](lessons/05-props-data-flow/README.md)                       |       3 | beginner        |
| 06      | [State and Events](lessons/06-state-events/README.md)                             |       3 | beginner-plus   |
| 07      | [Lists and Conditional UI](lessons/07-lists-conditional-ui/README.md)             |       3 | beginner-plus   |
| 08      | [Forms and Validation](lessons/08-forms-validation/README.md)                     |       3 | beginner-plus   |
| 09      | [React Hooks](lessons/09-hooks/README.md)                                         |       3 | intermediate    |
| 10      | [Component Architecture](lessons/10-component-architecture/README.md)             |       3 | intermediate    |
| 11      | [Routing with React Router](lessons/11-routing/README.md)                         |       3 | intermediate    |
| 12      | [Context and State Management](lessons/12-context-state-management/README.md)     |       3 | intermediate    |
| 13      | [API Integration and Asynchronous UI](lessons/13-api-async/README.md)             |       3 | intermediate    |
| 14      | [Styling and UI Systems](lessons/14-styling-ui/README.md)                         |       3 | intermediate    |
| 15      | [Testing and Debugging](lessons/15-testing/README.md)                             |       3 | intermediate    |
| 16      | [TypeScript with React](lessons/16-typescript/README.md)                          |       3 | advanced        |
| 17      | [Performance Optimization](lessons/17-performance/README.md)                      |       3 | advanced        |
| 18      | [Accessibility and Inclusive Design](lessons/18-accessibility/README.md)          |       3 | intermediate    |
| 19      | [Security and Reliability](lessons/19-security/README.md)                         |       3 | advanced        |
| 20      | [Advanced React Concepts](lessons/20-advanced-react/README.md)                    |       3 | expert-concepts |
| 21      | [Production-Ready Applications](lessons/21-production-deployment/README.md)       |       3 | advanced        |
| 22      | [Architecture and Industry Practices](lessons/22-industry-architecture/README.md) |       3 | advanced        |
| 23      | [Beginner Projects](lessons/23-beginner-projects/README.md)                       |       7 | beginner        |
| 24      | [Intermediate Projects](lessons/24-intermediate-projects/README.md)               |       8 | intermediate    |
| 25      | [Advanced Projects](lessons/25-advanced-projects/README.md)                       |       7 | advanced        |
| 26      | [Capstone Project](lessons/26-capstone-project/README.md)                         |       1 | advanced        |

[Detailed topic coverage](docs/CURRICULUM-COVERAGE.md) · [Master tags and chapter mapping](docs/TAGS.md)

## Teaching format

Each lesson includes objectives, prerequisite links, motivation, analogy, concept notes, syntax and example, expected output, annotated walkthrough, internal behavior, mistakes, practical use, guided exercise, independent challenge, solution, explained quiz, interview discussion, summary, checklist, navigation, tags, time estimate, and official references. Closely related syllabus topics are grouped into individual lessons. The Markdown text and website metadata are generated from the same authored source. Static snippets and partial illustrations are explicitly labeled; the separate project and example entries provide complete runnable applications.

## Academy features

- Landing page, learning dashboard, seven-phase curriculum, chapters, and deep-linked lessons.
- Search across lesson titles/descriptions/tags; chapter, difficulty, technology, and tag filters; title/duration sorting; URL-preserved filter state.
- Expandable chapter navigation, active lessons, breadcrumbs, previous/next links, and related topics.
- Highlighted code, clipboard controls with failure feedback, and an isolated synchronous JavaScript lab with a one-second execution limit.
- Exercise hints and solution reveal; chapter quizzes with immediate feedback, scoring, and retry.
- Completion tracking and confirmation before reset. Progress is browser-local and is not a certification or synced account.
- Light/dark themes, responsive layouts, skip navigation, meaningful labels, native dialogs, and reduced-motion styles.
- Runnable examples, project guides, interview search, and glossary search.

## Runnable projects

All projects share the root package and lockfile. Run `npm run dev`, then use the Academy Projects page or open the entry URL shown below.

| Level        | Project and source                                                            | Entry path                                            |
| ------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------- |
| beginner     | [Counter application](projects/beginner/counter/README.md)                    | `/projects/beginner/counter/index.html`               |
| beginner     | [Interactive profile card](projects/beginner/profile-card/README.md)          | `/projects/beginner/profile-card/index.html`          |
| beginner     | [Digital clock](projects/beginner/digital-clock/README.md)                    | `/projects/beginner/digital-clock/index.html`         |
| beginner     | [Todo application](projects/beginner/todo-app/README.md)                      | `/projects/beginner/todo-app/index.html`              |
| beginner     | [Quiz application](projects/beginner/quiz-app/README.md)                      | `/projects/beginner/quiz-app/index.html`              |
| beginner     | [Expense tracker](projects/beginner/expense-tracker/README.md)                | `/projects/beginner/expense-tracker/index.html`       |
| beginner     | [Searchable student directory](projects/beginner/student-directory/README.md) | `/projects/beginner/student-directory/index.html`     |
| intermediate | [Weather dashboard](projects/intermediate/weather-dashboard/README.md)        | `/projects/intermediate/weather-dashboard/index.html` |
| intermediate | [Movie discovery interface](projects/intermediate/movie-discovery/README.md)  | `/projects/intermediate/movie-discovery/index.html`   |
| intermediate | [Notes application](projects/intermediate/notes-app/README.md)                | `/projects/intermediate/notes-app/index.html`         |
| intermediate | [Shopping cart](projects/intermediate/shopping-cart/README.md)                | `/projects/intermediate/shopping-cart/index.html`     |
| intermediate | [React Router dashboard](projects/intermediate/router-dashboard/README.md)    | `/projects/intermediate/router-dashboard/index.html`  |
| intermediate | [CRUD management interface](projects/intermediate/crud-manager/README.md)     | `/projects/intermediate/crud-manager/index.html`      |
| intermediate | [Paginated data explorer](projects/intermediate/data-explorer/README.md)      | `/projects/intermediate/data-explorer/index.html`     |
| intermediate | [Registration system](projects/intermediate/registration-form/README.md)      | `/projects/intermediate/registration-form/index.html` |
| advanced     | [Admin analytics dashboard](projects/advanced/analytics-dashboard/README.md)  | `/projects/advanced/analytics-dashboard/index.html`   |
| advanced     | [E-commerce frontend](projects/advanced/ecommerce-ui/README.md)               | `/projects/advanced/ecommerce-ui/index.html`          |
| advanced     | [Learning management interface](projects/advanced/lms-interface/README.md)    | `/projects/advanced/lms-interface/index.html`         |
| advanced     | [Project management board](projects/advanced/project-board/README.md)         | `/projects/advanced/project-board/index.html`         |
| advanced     | [Real-time UI simulation](projects/advanced/realtime-simulation/README.md)    | `/projects/advanced/realtime-simulation/index.html`   |
| advanced     | [Accessible component library](projects/advanced/component-library/README.md) | `/projects/advanced/component-library/index.html`     |
| advanced     | [Production-style SaaS dashboard](projects/advanced/saas-dashboard/README.md) | `/projects/advanced/saas-dashboard/index.html`        |
| advanced     | [StudyFlow capstone](projects/advanced/studyflow/README.md)                   | `/projects/advanced/studyflow/index.html`             |

The [StudyFlow TypeScript edition](projects/advanced/studyflow-typescript/README.md) is a second implementation of the capstone. Its strict model, reducer, API validation, forms, and provider compile to the JavaScript edition through `npm run capstone:sync`. Both share the same browser-local task storage key deliberately.

## Examples

- [Hello React](examples/hello-react/README.md)
- [Props and composition](examples/props-demo/README.md)
- [State counter](examples/state-counter/README.md)
- [Todo app](examples/todo-app/README.md)
- [Mock weather dashboard](examples/weather-dashboard/README.md)
- [E-commerce UI](examples/ecommerce-ui/README.md)
- [TanStack Query cache](examples/query-cache/README.md)
- [TypeScript patterns](examples/typescript-patterns/README.md)

## Architecture

| Path                     | Responsibility                                                    |
| ------------------------ | ----------------------------------------------------------------- |
| src/app                  | Application entry, navigation, lazy routes                        |
| src/components           | Layout, learning widgets, and UI boundaries                       |
| src/pages                | Academy page implementations                                      |
| src/data                 | Generated curriculum/project/example metadata and glossary        |
| src/hooks                | Validated browser-local progress provider                         |
| src/styles               | Responsive design tokens, themes, syntax and project styles       |
| curriculum/source.json   | Authored core chapter and lesson content                          |
| curriculum/projects.json | Project contracts and associations                                |
| lessons                  | 27 chapter indexes and 92 individual Markdown lessons             |
| exercises                | Beginner, intermediate, advanced problem/solution files           |
| quizzes                  | Chapter question banks with answers/explanations                  |
| examples                 | Eight independently addressable example entries                   |
| projects                 | 22 mini-projects, capstone editions, and shared helpers           |
| scripts                  | Content generation/audit, capstone synchronization, documentation |
| tests                    | Behavioral, routing, persistence, async, and project checks       |
| docs                     | Architecture, deployment, coverage, versions, verification report |
| .github                  | CI, optional Pages deployment, issue and PR templates             |

[Architecture decisions](docs/ARCHITECTURE.md)

## Technology stack and versions

| Dependency             | Pinned version |
| ---------------------- | -------------- |
| react                  | 19.3.1         |
| react-dom              | 19.3.1         |
| vite                   | 8.3.4          |
| @vitejs/plugin-react   | 6.1.2          |
| react-router           | 8.5.0          |
| vitest                 | 5.0.5          |
| @testing-library/react | 16.3.3         |
| typescript             | 7.0.2          |
| lucide-react           | 1.60.0         |
| @tanstack/react-query  | 5.104.5        |

React/React DOM are matched. Vite and its stable React plugin were verified through npm metadata before installation. The root lockfile is included. ESLint 9 is retained for the declared peer compatibility of eslint-plugin-jsx-a11y; its unsupported-version warning is documented as a maintenance limitation. See [the complete version record](docs/VERSIONS.md).

## Commands

| Command                  | Behavior                                                                       |
| ------------------------ | ------------------------------------------------------------------------------ |
| npm run dev              | Start the local Vite server                                                    |
| npm run build            | Strict TypeScript check, then production build of Academy and all HTML entries |
| npm run preview          | Serve dist for local production review                                         |
| npm run lint             | ESLint over JavaScript/JSX and tooling; TypeScript is checked by tsc           |
| npm test                 | Run Vitest once                                                                |
| npm run test:watch       | Interactive test watcher                                                       |
| npm run typecheck        | Strict TypeScript checks                                                       |
| npm run format           | Apply Prettier to authored files                                               |
| npm run format:check     | Verify formatting                                                              |
| npm run content:generate | Rebuild lesson files, chapter indexes, metadata, exercises, quizzes, guides    |
| npm run content:check    | Validate metadata, sequence, tags, files, and local Markdown links             |
| npm run capstone:sync    | Compile the typed capstone into its JavaScript edition                         |
| npm run verify           | Content audit, lint, tests, typecheck, and production build                    |

Generated lesson/data banks are intentionally excluded from formatting; the generator owns them. Do not run generation and formatting concurrently. `npm audit` is also available as an npm built-in.

## Tests and production build

```powershell
npm.cmd test
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

Tests exercise quiz feedback/score/retry, reveal/copy controls, search combinations, navigation, completion persistence, invalid persisted data, counter, todo, form errors and focus, cart transitions, async states/cancellation, keyboard tabs/dialogs, project rendering, and capstone task/API workflows. Test passing does not substitute for a full browser/device or screen-reader audit. Actual results and limits are recorded in [IMPLEMENTATION-REPORT.md](docs/IMPLEMENTATION-REPORT.md).

## Deployment

Deploy `dist` as static output. Hash routing is the default, which works without SPA rewrites. Browser history mode is supported with the documented fallback setup. Netlify/Vercel config and an opt-in Pages workflow are included; no deployment has been performed on your behalf. See [DEPLOYMENT.md](docs/DEPLOYMENT.md). Do not put secrets in VITE_ variables.

## Contributing and license

Read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), [CHANGELOG.md](CHANGELOG.md), and the [MIT License](LICENSE). The ZIP is GitHub-ready; set VITE_REPOSITORY_URL after creating your own repository. No GitHub stars, CI badges, coverage percentages, or learner counts are fabricated.

## Official references

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [W3C WAI](https://www.w3.org/WAI/)

## Status and known limitations

All 27 requested chapter themes and all 23 named projects are represented, with a coverage map. Advanced topics such as RSC, SSR, authentication, Redux Toolkit, external stores, and large-list virtualization include conceptual treatment where an extra framework/service or a full implementation is outside this client-only course. Redux and an RSC framework are not installed. Projects implement documented educational feature contracts, not commercial backends.

Progress is per browser/origin; local project storage is not synchronized. Quiz scores are session-only. The JavaScript lab supports synchronous console-oriented JavaScript, not JSX, imports, async waiting, DOM, or network access. Lesson fragments are not all independently executed tests. Automated checks cover important behaviors, not every possible branch. Windows instructions are provided, but commands were executed in Linux with Node 24; native Windows behavior has not been directly tested here.

Recommended next milestone: educator review and pilot teaching, expand topic-specific assessments and challenge rubrics, then real-device/screen-reader QA and additional end-to-end project workflows.
