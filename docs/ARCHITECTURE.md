# Architecture decisions

- React + Vite, client-only, no account, database, API key, or server required.
- All 27 numbered chapters follow the detailed syllabus (rather than the shorter illustrative directory tree).
- `curriculum/source.json` is the authored content source. `scripts/generate-content.mjs` produces lesson Markdown, application metadata, exercises, quizzes, and chapter indexes. The application reads generated Markdown lazily.
- A single root dependency tree and lockfile serve the Academy, 22 mini-projects, eight example entry points, and a JavaScript/TypeScript capstone pair. Projects are independently addressable Vite HTML entry points; run them from the root with the shared dev server.
- Hash routing is the portable default for GitHub Pages and file-server subpaths. Browser history routing is selectable with VITE_ROUTER_MODE=browser; rewrites are documented.
- LocalStorage contains only educational progress/preferences and mock project data; it is not a secure identity or synchronization mechanism.
- Markdown is rendered with raw HTML disabled. The JavaScript playground executes in a disposable Web Worker with a time limit and network disabled, not in the application window.
- React Server Components, authentication, payment, real-time transport, and framework rendering are taught as concepts; they are not claimed as services implemented by this static repository.
