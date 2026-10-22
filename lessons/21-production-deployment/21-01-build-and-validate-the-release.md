# Build and validate the release

> Chapter 21 · Production-Ready Applications · advanced · 28 minutes

## Learning objectives
- Explain and apply environment configuration.
- Explain and apply production builds and build validation.
- Explain and apply asset optimization and lazy loading.
- Explain and apply error handling and logging concepts.

## Prerequisites
[Separate core APIs from infrastructure](../20-advanced-react/20-03-separate-core-apis-from-infrastructure.md)

## Why this concept exists
The release process needs repeatable evidence that the delivered files match the source and documentation.

## A useful analogy
A release is a reproducible package plus instructions for where requests and failures should go.

## Concepts, syntax, and terminology
### Environment configuration
Separate public deployment configuration from private runtime secrets. Rebuild when public Vite configuration changes. Use a documented BASE_URL for subpath assets.

### Production builds and build validation
Build from a clean lockfile install, serve dist, and exercise direct navigation and core workflows. Development success alone does not prove production asset resolution.

### Asset optimization and lazy loading
Keep assets local where feasible, use appropriate formats/sizes, and split infrequent routes. Verify the emitted files rather than assuming a tool removed all unused code.

### Error handling and logging concepts
Use boundaries and recoverable error states. Real telemetry requires a destination and a privacy policy; this local course logs no remote user analytics.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```bash
npm ci
npm run content:check
npm run lint
npm test
npm run build
npm run preview
```

## Expected output
Each command must exit successfully before treating the candidate as verified. Build writes dist.

## Line-by-line walkthrough
- Line 1: `npm ci` runs the named command or sets the documented public configuration.
- Line 2: `npm run content:check` runs the named command or sets the documented public configuration.
- Line 3: `npm run lint` runs the named command or sets the documented public configuration.
- Line 4: `npm test` runs the named command or sets the documented public configuration.
- Line 5: `npm run build` runs the named command or sets the documented public configuration.
- Line 6: `npm run preview` runs the named command or sets the documented public configuration.

## Internal behavior and data flow
Build resolves imports and emits chunks. Preview serves the result; missing lazy assets may only be noticed when a specific route is opened.



## Common mistakes: incorrect versus correct
Do not claim success from a build log while ignoring failing tests or broken deep links. Record the exact checks executed.

## Practical use case
Use this concept when building admin analytics dashboard. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Open a lesson and a project in preview. Independently reload a nested route under your selected router mode.

<details>
<summary>Hint</summary>

Use boundaries and recoverable error states. Real telemetry requires a destination and a privacy policy; this local course logs no remote user analytics.

</details>

## Exercise solution
```bash
# Hash mode requires no route rewrite for the fragment.
# Browser mode needs the host to serve index.html for application paths.
# Keep real asset/file paths exempt from an overly broad fallback.
```

Build resolves imports and emits chunks. Preview serves the result; missing lazy assets may only be noticed when a specific route is opened.

## Quiz
**What should be served by a static production host?**

1. The built dist directory
2. The raw node_modules folder
3. The dev server source graph

**Answer: 1.** The built dist directory. Build resolves imports and emits chunks. Preview serves the result; missing lazy assets may only be noticed when a specific route is opened.

## Interview questions
- **Basic: What should be served by a static production host?**
  The built dist directory
- **Intermediate: Explain the execution of the build and validate the release example.**
  Build resolves imports and emits chunks. Preview serves the result; missing lazy assets may only be noticed when a specific route is opened.
- **Advanced: What mistake or trade-off would you watch for when applying build and validate the release in a larger application?**
  Do not claim success from a build log while ignoring failing tests or broken deep links. Record the exact checks executed.

## Summary
The release process needs repeatable evidence that the delivered files match the source and documentation. Build resolves imports and emits chunks. Preview serves the result; missing lazy assets may only be noticed when a specific route is opened.

## Revision checklist
- [ ] Explain and apply environment configuration.
- [ ] Explain and apply production builds and build validation.
- [ ] Explain and apply asset optimization and lazy loading.
- [ ] Explain and apply error handling and logging concepts.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Separate core APIs from infrastructure](../20-advanced-react/20-03-separate-core-apis-from-infrastructure.md)

Next: [Deploy to static hosts](../21-production-deployment/21-02-deploy-to-static-hosts.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `vite` `deployment` `security` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [vite.dev/guide/](https://vite.dev/guide/)
- [vite.dev/guide/static-deploy.html](https://vite.dev/guide/static-deploy.html)
- [react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
