# Prepare a maintainable release

> Chapter 21 · Production-Ready Applications · advanced · 28 minutes

## Learning objectives
- Explain and apply ci workflows.
- Explain and apply dependency auditing.
- Explain and apply release preparation.
- Explain and apply readme and documentation quality.

## Prerequisites
[Deploy to static hosts](../21-production-deployment/21-02-deploy-to-static-hosts.md)

## Why this concept exists
An open-source release needs reproducible setup and honest status as much as working UI.

## A useful analogy
A release is a reproducible package plus instructions for where requests and failures should go.

## Concepts, syntax, and terminology
### CI workflows
The included workflow checks source on pull requests and pushes. Permissions are minimal; Pages deployment is a separate opt-in manual workflow.

### Dependency auditing
Inspect npm audit output and assess actual exposure before upgrading. Avoid blind force-upgrades across major versions; rerun validation after updates.

### Release preparation
Update the changelog, review the license, record versions and verification results, and exclude generated secrets, node_modules, and local user data from source archives.

### README and documentation quality
Commands, paths, counts, and status must match reality. Content checks verify chapter metadata and local links; humans still review teaching accuracy.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```bash
npm audit
npm ls --depth=0
npm run verify
npm run format:check
```

## Expected output
Audit and version output provide review evidence; verify and formatting checks report actual pass/fail status.

## Line-by-line walkthrough
- Line 1: `npm audit` runs the named command or sets the documented public configuration.
- Line 2: `npm ls --depth=0` runs the named command or sets the documented public configuration.
- Line 3: `npm run verify` runs the named command or sets the documented public configuration.
- Line 4: `npm run format:check` runs the named command or sets the documented public configuration.

## Internal behavior and data flow
A lockfile records resolved transitive dependencies. CI uses npm ci to reproduce that dependency graph for its operating system.



## Common mistakes: incorrect versus correct
Do not add an invented passing badge or claim full coverage without measured results. Keep limits in the implementation report.

## Practical use case
Use this concept when building admin analytics dashboard. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Review the release checklist in docs. Independently propose one small dependency update with its observed validation results.

<details>
<summary>Hint</summary>

Commands, paths, counts, and status must match reality. Content checks verify chapter metadata and local links; humans still review teaching accuracy.

</details>

## Exercise solution
```bash
# Review dependency changes before committing:
git diff -- package.json package-lock.json
# Then run the repository verification gates:
npm run verify
```

A lockfile records resolved transitive dependencies. CI uses npm ci to reproduce that dependency graph for its operating system.

## Quiz
**What should a project status claim be based on?**

1. An attractive badge
2. An unrun test file
3. Executed checks and disclosed limits

**Answer: 3.** Executed checks and disclosed limits. A lockfile records resolved transitive dependencies. CI uses npm ci to reproduce that dependency graph for its operating system.

## Interview questions
- **Basic: What should a project status claim be based on?**
  Executed checks and disclosed limits
- **Intermediate: Explain the execution of the prepare a maintainable release example.**
  A lockfile records resolved transitive dependencies. CI uses npm ci to reproduce that dependency graph for its operating system.
- **Advanced: What mistake or trade-off would you watch for when applying prepare a maintainable release in a larger application?**
  Do not add an invented passing badge or claim full coverage without measured results. Keep limits in the implementation report.

## Summary
An open-source release needs reproducible setup and honest status as much as working UI. A lockfile records resolved transitive dependencies. CI uses npm ci to reproduce that dependency graph for its operating system.

## Revision checklist
- [ ] Explain and apply ci workflows.
- [ ] Explain and apply dependency auditing.
- [ ] Explain and apply release preparation.
- [ ] Explain and apply readme and documentation quality.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Deploy to static hosts](../21-production-deployment/21-02-deploy-to-static-hosts.md)

Next: [Organize by features and boundaries](../22-industry-architecture/22-01-organize-by-features-and-boundaries.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `vite` `deployment` `security` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [vite.dev/guide/](https://vite.dev/guide/)
- [vite.dev/guide/static-deploy.html](https://vite.dev/guide/static-deploy.html)
- [react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
