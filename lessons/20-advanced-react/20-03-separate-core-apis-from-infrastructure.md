# Separate core APIs from infrastructure

> Chapter 20 · Advanced React Concepts · expert-concepts · 56 minutes

## Learning objectives
- Explain and apply server components versus client components.
- Explain and apply framework integration.
- Explain and apply react compiler concepts.
- Explain and apply current react apis and limitations.

## Prerequisites
[Defer values and locate Suspense boundaries](../20-advanced-react/20-02-defer-values-and-locate-suspense-boundaries.md)

## Why this concept exists
Version and infrastructure boundaries keep learners from expecting unavailable behavior in a client-only starter.

## A useful analogy
Concurrent rendering is interruptible planning before committing a result; it is not two threads editing the same DOM at once.

## Concepts, syntax, and terminology
### Server Components versus client components
Server Components execute in a server-capable build/runtime and may access server resources. Client components support interactive state. A plain Vite SPA does not become an RSC app by adding a directive.

### Framework integration
Frameworks can supply routing, server rendering, data loading, and RSC infrastructure. These capabilities require a compatible integration and deployment model, not just React imports.

### React Compiler concepts
Compiler-assisted memoization requires build configuration and compatible code. This course leaves it off so the basic rendering model remains explicit.

### Current React APIs and limitations
The installed React 19.3 line includes stable ViewTransition and Fragment refs. Their browser/platform constraints still matter. useEffectEvent from 19.2 is for nonreactive Effect logic, not a dependency-lint escape hatch. useActionState/useOptimistic support action-oriented UI; a trusted server is still required for real server mutations.

### Beginner explanation
React APIs and a complete deployment framework are different layers. Installing React does not create a server runtime.

### Intermediate explanation
A compatible framework can coordinate server modules, client bundles, requests, and hydration. A directive has meaning only when the build/runtime integration interprets it.

### Advanced explanation
React 19.3 stabilizes ViewTransition and Fragment refs, but each still has platform constraints. The compiler needs configuration. Server Components need server-aware tooling and operational boundaries.

### Practical scenario and trade-off
Use the included client-side ViewTransition example on a supported browser, and document SSR/RSC as a separate architecture decision. Do not silently add a backend just to demonstrate a conceptual distinction.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { ViewTransition, startTransition, useState } from 'react';
export default function App() {
  const [open, setOpen] = useState(false);
  return <><button onClick={() => startTransition(() => setOpen(v => !v))}>Toggle details</button>
    {open && <ViewTransition><p>React 19.3 details</p></ViewTransition>}</>;
}
```

## Expected output
The details toggle works; supported browsers can animate the transition. Respect reduced-motion preferences.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Returns the value or UI for this branch.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
React 19.3 coordinates ViewTransition with browser capabilities. Server rendering and RSC need a separate server-aware module and execution model.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not teach ViewTransition as experimental for the pinned 19.3 release, or claim that this Vite SPA supports Server Components out of the box.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Run the toggle and inspect reduced-motion behavior. Independently document which proposed feature needs a framework and which runs in the current SPA.

<details>
<summary>Hint</summary>

Use the included client-side ViewTransition example on a supported browser, and document SSR/RSC as a separate architecture decision. Do not silently add a backend just to demonstrate a conceptual distinction.

</details>

## Exercise solution
```jsx
const featureMatrix = {
  useState: 'client React',
  ViewTransition: 'React 19.3 plus browser support',
  serverComponents: 'compatible server/framework integration',
  compiler: 'additional build configuration',
};
console.table(featureMatrix);
```

React 19.3 coordinates ViewTransition with browser capabilities. Server rendering and RSC need a separate server-aware module and execution model.

## Quiz
**Does adding a server-component directive make a plain Vite SPA an RSC application?**

1. Only after changing the file extension
2. No, compatible infrastructure is required
3. Yes

**Answer: 2.** No, compatible infrastructure is required. React 19.3 coordinates ViewTransition with browser capabilities. Server rendering and RSC need a separate server-aware module and execution model.

## Interview questions
- **Basic: Does adding a server-component directive make a plain Vite SPA an RSC application?**
  No, compatible infrastructure is required
- **Intermediate: Explain the execution of the separate core apis from infrastructure example.**
  React 19.3 coordinates ViewTransition with browser capabilities. Server rendering and RSC need a separate server-aware module and execution model.
- **Advanced: What mistake or trade-off would you watch for when applying separate core apis from infrastructure in a larger application?**
  Do not teach ViewTransition as experimental for the pinned 19.3 release, or claim that this Vite SPA supports Server Components out of the box.

## Summary
Version and infrastructure boundaries keep learners from expecting unavailable behavior in a client-only starter. React 19.3 coordinates ViewTransition with browser capabilities. Server rendering and RSC need a separate server-aware module and execution model.

## Revision checklist
- [ ] Explain and apply server components versus client components.
- [ ] Explain and apply framework integration.
- [ ] Explain and apply react compiler concepts.
- [ ] Explain and apply current react apis and limitations.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Defer values and locate Suspense boundaries](../20-advanced-react/20-02-defer-values-and-locate-suspense-boundaries.md)

Next: [Build and validate the release](../21-production-deployment/21-01-build-and-validate-the-release.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`expert-concepts` `react` `reconciliation` `performance` `hooks` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react/Profiler](https://react.dev/reference/react/Profiler)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
- [react.dev/blog/2026/09/09/react-19-3](https://react.dev/blog/2026/09/09/react-19-3)
- [react.dev/reference/rsc/server-components](https://react.dev/reference/rsc/server-components)
- [react.dev/learn/react-compiler](https://react.dev/learn/react-compiler)
