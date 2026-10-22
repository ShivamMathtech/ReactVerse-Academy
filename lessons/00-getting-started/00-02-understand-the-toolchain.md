# Understand the toolchain

> Chapter 00 · Course Introduction · beginner · 21 minutes

## Learning objectives
- Explain and apply what vite is and why it is used.
- Explain and apply frontend development roadmap.
- Explain and apply how to use this repository.

## Prerequisites
[Think in user interfaces](../00-getting-started/00-01-think-in-user-interfaces.md)

## Why this concept exists
Build tooling translates authoring formats and packages dependencies into files a browser can load.

## A useful analogy
A component is a reusable recipe; props are its ingredients and state is the changing order ticket.

## Concepts, syntax, and terminology
### What Vite is and why it is used
Vite serves modules during development and bundles assets for release. It does not replace React and does not automatically provide a backend.

### Frontend development roadmap
Learn semantic HTML, CSS, and JavaScript first, then components, state, forms, routing, testing, accessibility, and delivery. Advanced APIs become useful after these foundations.

### How to use this repository
Run npm ci at the root, then npm run dev. lessons/ contains the same teaching text as the site; examples/ and projects/ contain executable entry points. Follow chapter IDs in order.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Expected output
The development command prints a local URL. The build command writes dist/. Preview serves that build.

## Line-by-line walkthrough
- Line 1: `npm ci` runs the named command or sets the documented public configuration.
- Line 2: `npm run dev` runs the named command or sets the documented public configuration.
- Line 3: `npm run build` runs the named command or sets the documented public configuration.
- Line 4: `npm run preview` runs the named command or sets the documented public configuration.

## Internal behavior and data flow
The dev server transforms source on demand. The production build resolves the module graph and emits browser assets; preview serves those emitted files.



## Common mistakes: incorrect versus correct
Do not deploy node_modules or use the development server as production hosting. Deploy dist and configure routing.

## Practical use case
Use this concept when building a maintainable learning interface. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Run the four commands and compare development with preview. Independently locate the generated JavaScript file in dist/assets.

<details>
<summary>Hint</summary>

Run npm ci at the root, then npm run dev. lessons/ contains the same teaching text as the site; examples/ and projects/ contain executable entry points. Follow chapter IDs in order.

</details>

## Exercise solution
```bash
npm run build
npm run preview
# Visit the URL printed by preview, then open browser Network tools.
```

The dev server transforms source on demand. The production build resolves the module graph and emits browser assets; preview serves those emitted files.

## Quiz
**Which directory is the default deployment output?**

1. node_modules
2. dist
3. src

**Answer: 2.** dist. The dev server transforms source on demand. The production build resolves the module graph and emits browser assets; preview serves those emitted files.

## Interview questions
- **Basic: Which directory is the default deployment output?**
  dist
- **Intermediate: Explain the execution of the understand the toolchain example.**
  The dev server transforms source on demand. The production build resolves the module graph and emits browser assets; preview serves those emitted files.
- **Advanced: What mistake or trade-off would you watch for when applying understand the toolchain in a larger application?**
  Do not deploy node_modules or use the development server as production hosting. Deploy dist and configure routing.

## Summary
Build tooling translates authoring formats and packages dependencies into files a browser can load. The dev server transforms source on demand. The production build resolves the module graph and emits browser assets; preview serves those emitted files.

## Revision checklist
- [ ] Explain and apply what vite is and why it is used.
- [ ] Explain and apply frontend development roadmap.
- [ ] Explain and apply how to use this repository.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Think in user interfaces](../00-getting-started/00-01-think-in-user-interfaces.md)

Next: [Practice with feedback](../00-getting-started/00-03-practice-with-feedback.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `javascript` `frontend-fundamentals` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
