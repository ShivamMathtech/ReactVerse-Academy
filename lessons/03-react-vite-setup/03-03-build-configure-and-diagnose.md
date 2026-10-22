# Build, configure, and diagnose

> Chapter 03 · React and Vite Setup · beginner · 21 minutes

## Learning objectives
- Explain and apply build and preview.
- Explain and apply environment variables and vite conventions.
- Explain and apply common installation errors.

## Prerequisites
[Read the application entry point](../03-react-vite-setup/03-02-read-the-application-entry-point.md)

## Why this concept exists
Configuration differs by environment while code should remain reproducible.

## A useful analogy
The source folder is your workshop; dist is the packaged product you deliver.

## Concepts, syntax, and terminology
### Build and preview
npm run build generates dist; npm run preview serves it for a local production check. Preview is not a managed production server. Check deep links and missing assets before publishing.

### Environment variables and Vite conventions
Read public configuration with import.meta.env.VITE_NAME. Values are strings and replaced during build. Never place private API keys in VITE_ variables.

### Common installation errors
An engine warning means check Node compatibility. vite not recognized means install at the package root. A native-module platform error means reinstall on the current OS. Registry timeouts need a network check, not random version changes.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```bash
const mode = import.meta.env.MODE;
const title = import.meta.env.VITE_APP_TITLE ?? 'ReactVerse Academy';
export default function App() {
  return <p>{title} — {mode}</p>;
}
```

## Expected output
The configured title and current Vite mode, such as development.

## Line-by-line walkthrough
- Line 1: `const mode = import.meta.env.MODE;` runs the named command or sets the documented public configuration.
- Line 2: `const title = import.meta.env.VITE_APP_TITLE ?? 'ReactVerse Academy';` runs the named command or sets the documented public configuration.
- Line 3: `export default function App() {` runs the named command or sets the documented public configuration.
- Line 4: `  return <p>{title} — {mode}</p>;` runs the named command or sets the documented public configuration.
- Line 5: `}` runs the named command or sets the documented public configuration.

## Internal behavior and data flow
Vite substitutes supported environment expressions at build time. A static deployment cannot read a later server environment change without rebuilding.



## Common mistakes: incorrect versus correct
Incorrect: VITE_SECRET_TOKEN contains a secret. Correct: only use public configuration in a client bundle.

## Practical use case
Use this concept when building a maintainable learning interface. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Set VITE_APP_TITLE in .env.local and restart dev. Independently inspect the built JavaScript to confirm the public title is present.

<details>
<summary>Hint</summary>

An engine warning means check Node compatibility. vite not recognized means install at the package root. A native-module platform error means reinstall on the current OS. Registry timeouts need a network check, not random version changes.

</details>

## Exercise solution
```bash
# .env.local (public configuration only)
VITE_APP_TITLE=My React Workshop
# Terminal:
# npm run build
# npm run preview
```

Vite substitutes supported environment expressions at build time. A static deployment cannot read a later server environment change without rebuilding.

## Quiz
**Are VITE_ values private after deployment?**

1. Yes, they are encrypted
2. Only on localhost
3. No, they reach client code

**Answer: 3.** No, they reach client code. Vite substitutes supported environment expressions at build time. A static deployment cannot read a later server environment change without rebuilding.

## Interview questions
- **Basic: Are VITE_ values private after deployment?**
  No, they reach client code
- **Intermediate: Explain the execution of the build, configure, and diagnose example.**
  Vite substitutes supported environment expressions at build time. A static deployment cannot read a later server environment change without rebuilding.
- **Advanced: What mistake or trade-off would you watch for when applying build, configure, and diagnose in a larger application?**
  Incorrect: VITE_SECRET_TOKEN contains a secret. Correct: only use public configuration in a client bundle.

## Summary
Configuration differs by environment while code should remain reproducible. Vite substitutes supported environment expressions at build time. A static deployment cannot read a later server environment change without rebuilding.

## Revision checklist
- [ ] Explain and apply build and preview.
- [ ] Explain and apply environment variables and vite conventions.
- [ ] Explain and apply common installation errors.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Read the application entry point](../03-react-vite-setup/03-02-read-the-application-entry-point.md)

Next: [Write JSX expressions](../04-jsx-components/04-01-write-jsx-expressions.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `deployment` `debugging` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
- [vite.dev/guide/static-deploy.html](https://vite.dev/guide/static-deploy.html)
