# StudyFlow — strict TypeScript edition

Same feature contract as [the JavaScript edition](../studyflow/README.md). Run from the repository root and open `/projects/advanced/studyflow-typescript/index.html`.

- App.tsx: nested routes, forms, course fetch and request states.
- model.ts: Task, Action, reducer, runtime validation.
- store.tsx: typed Context and persistence.
- api.ts: Course shape and cancelable fetch.
- main.tsx: checked root mounting.

`npm run typecheck` uses strict checking. `npm run capstone:sync` compiles this edition to the JavaScript source using the installed TypeScript compiler with JSX preserved. It does not copy dependencies. Both editions share the browser-local task key by design.
