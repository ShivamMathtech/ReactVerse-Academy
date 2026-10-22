# Deploy to static hosts

> Chapter 21 · Production-Ready Applications · advanced · 28 minutes

## Learning objectives
- Explain and apply deployment to static hosting.
- Explain and apply spa route fallback configuration.
- Explain and apply github pages deployment considerations.
- Explain and apply netlify and vercel deployment.

## Prerequisites
[Build and validate the release](../21-production-deployment/21-01-build-and-validate-the-release.md)

## Why this concept exists
A route working after clicking can still fail on direct reload if hosting cannot resolve its pathname.

## A useful analogy
A release is a reproducible package plus instructions for where requests and failures should go.

## Concepts, syntax, and terminology
### Deployment to static hosting
Upload dist to a static host and use the documented base path. This repository includes Netlify and Vercel configuration files and an opt-in GitHub Pages workflow.

### SPA route fallback configuration
BrowserRouter requires unknown application paths to return index.html. HashRouter keeps routing after #, so the host receives only the actual document path.

### GitHub Pages deployment considerations
Repository Pages often use /repo-name/. Set VITE_BASE_PATH during build, retain hash routing, and enable Pages with GitHub Actions. GitHub Pages does not provide arbitrary SPA rewrites.

### Netlify and Vercel deployment
Use npm ci as install, npm run build as build, and dist as output. Included rewrite rules support browser routing. Select project root correctly.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
// vite.config.js concept:
// export default defineConfig({ base: process.env.VITE_BASE_PATH || '/', plugins: [react()] });
// .env.production for an optional browser-history build:
// VITE_ROUTER_MODE=browser
// Default portable URL: /#/lessons/06-01-respond-to-events-with-state
```

## Expected output
The base path governs asset URLs; the router mode governs navigation URLs. They solve different problems.

## Line-by-line walkthrough
- Line 1: Documents a usage boundary or related use case; it is not executed.
- Line 2: Documents a usage boundary or related use case; it is not executed.
- Line 3: Documents a usage boundary or related use case; it is not executed.
- Line 4: Documents a usage boundary or related use case; it is not executed.
- Line 5: Documents a usage boundary or related use case; it is not executed.

## Internal behavior and data flow
The URL fragment is not sent to the server. Pathnames are, so browser-history routes depend on server fallback behavior.



## Common mistakes: incorrect versus correct
Do not set a repository base path on a root-domain deployment by habit, or forget it for repository Pages assets.

## Practical use case
Use this concept when building admin analytics dashboard. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Build once with a /course/ base path. Independently explain which network requests should include that prefix.

<details>
<summary>Hint</summary>

Use npm ci as install, npm run build as build, and dist as output. Included rewrite rules support browser routing. Select project root correctly.

</details>

## Exercise solution
```js
# PowerShell, repository Pages example:
$env:VITE_BASE_PATH='/react-vite-complete-course/'
npm.cmd run build
# Afterward remove the override when no longer needed:
Remove-Item Env:VITE_BASE_PATH
```

The URL fragment is not sent to the server. Pathnames are, so browser-history routes depend on server fallback behavior.

## Quiz
**Is the URL fragment after # sent in an HTTP request?**

1. Only on refresh
2. No
3. Yes

**Answer: 2.** No. The URL fragment is not sent to the server. Pathnames are, so browser-history routes depend on server fallback behavior.

## Interview questions
- **Basic: Is the URL fragment after # sent in an HTTP request?**
  No
- **Intermediate: Explain the execution of the deploy to static hosts example.**
  The URL fragment is not sent to the server. Pathnames are, so browser-history routes depend on server fallback behavior.
- **Advanced: What mistake or trade-off would you watch for when applying deploy to static hosts in a larger application?**
  Do not set a repository base path on a root-domain deployment by habit, or forget it for repository Pages assets.

## Summary
A route working after clicking can still fail on direct reload if hosting cannot resolve its pathname. The URL fragment is not sent to the server. Pathnames are, so browser-history routes depend on server fallback behavior.

## Revision checklist
- [ ] Explain and apply deployment to static hosting.
- [ ] Explain and apply spa route fallback configuration.
- [ ] Explain and apply github pages deployment considerations.
- [ ] Explain and apply netlify and vercel deployment.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Build and validate the release](../21-production-deployment/21-01-build-and-validate-the-release.md)

Next: [Prepare a maintainable release](../21-production-deployment/21-03-prepare-a-maintainable-release.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `vite` `deployment` `security` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [vite.dev/guide/](https://vite.dev/guide/)
- [vite.dev/guide/static-deploy.html](https://vite.dev/guide/static-deploy.html)
- [react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
