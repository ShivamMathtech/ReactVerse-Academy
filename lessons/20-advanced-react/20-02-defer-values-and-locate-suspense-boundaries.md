# Defer values and locate Suspense boundaries

> Chapter 20 · Advanced React Concepts · expert-concepts · 56 minutes

## Learning objectives
- Explain and apply usedeferredvalue.
- Explain and apply suspense boundaries.
- Explain and apply server rendering concepts and hydration.
- Explain and apply mismatch prevention.

## Prerequisites
[Understand identity and concurrent work](../20-advanced-react/20-01-understand-identity-and-concurrent-work.md)

## Why this concept exists
Different parts of a view can have different urgency and loading boundaries.

## A useful analogy
Concurrent rendering is interruptible planning before committing a result; it is not two threads editing the same DOM at once.

## Concepts, syntax, and terminology
### useDeferredValue
Let a derived view lag behind an urgent value. It is not a debounce timer and does not by itself reduce network requests. A memoized slow subtree may be necessary to benefit.

### Suspense boundaries
A boundary displays fallback when descendants suspend through supported mechanisms. Place boundaries around meaningful loading regions rather than hiding an entire page for one small panel.

### Server rendering concepts and hydration
SSR generates initial HTML on a server. Hydration attaches React behavior to matching server markup. A plain Vite client root uses createRoot, not hydration, unless you build SSR infrastructure.

### Mismatch prevention
Server and client initial output must agree. Random values, locale differences, and current time can create mismatches when rendered independently.

### Beginner explanation
Deferral lets a result view temporarily use an older value while an input stays current. Hydration is a different concept: it attaches behavior to server-produced HTML.

### Intermediate explanation
Suspense waits for supported suspending resources, such as a lazy component. An ordinary Effect fetch with explicit loading state does not automatically become a Suspense resource.

### Advanced explanation
Server and client initial trees must match for hydration. Time, random values, and differing locale defaults can violate that contract. A client-only Vite build uses createRoot and has no server markup to hydrate.

### Practical scenario and trade-off
Choose boundaries around independently useful panels. Too broad a fallback can hide working content; too many tiny boundaries can make the experience visually fragmented.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useDeferredValue, useState } from 'react';
export default function App() {
  const [query, setQuery] = useState('');
  const deferred = useDeferredValue(query);
  return <><input aria-label="Query" value={query} onChange={e => setQuery(e.target.value)} />
    <p aria-busy={query !== deferred}>Results for {deferred}</p></>;
}
```

## Expected output
The results value may briefly lag behind input; no fixed delay or request cancellation is implied.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Returns the value or UI for this branch.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Deferred rendering allows React to retry lower-priority work. Hydration is a separate process that expects preexisting compatible server-rendered markup.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not use hydrateRoot on an empty root because the word sounds faster. Use createRoot for this client-only application.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Explain the distinction between deferral and debouncing. Independently identify a sensible Suspense boundary for a dashboard chart.

<details>
<summary>Hint</summary>

Choose boundaries around independently useful panels. Too broad a fallback can hide working content; too many tiny boundaries can make the experience visually fragmented.

</details>

## Exercise solution
```jsx
// Client-only entry point:
// createRoot(document.getElementById('root')).render(<App />);
// SSR infrastructure may instead use hydrateRoot(container, <App />)
// only when the container already has matching server-rendered HTML.
```

Deferred rendering allows React to retry lower-priority work. Hydration is a separate process that expects preexisting compatible server-rendered markup.

## Quiz
**Does useDeferredValue guarantee a fixed millisecond delay?**

1. No
2. Yes, 300ms
3. Yes, 1000ms

**Answer: 1.** No. Deferred rendering allows React to retry lower-priority work. Hydration is a separate process that expects preexisting compatible server-rendered markup.

## Interview questions
- **Basic: Does useDeferredValue guarantee a fixed millisecond delay?**
  No
- **Intermediate: Explain the execution of the defer values and locate suspense boundaries example.**
  Deferred rendering allows React to retry lower-priority work. Hydration is a separate process that expects preexisting compatible server-rendered markup.
- **Advanced: What mistake or trade-off would you watch for when applying defer values and locate suspense boundaries in a larger application?**
  Do not use hydrateRoot on an empty root because the word sounds faster. Use createRoot for this client-only application.

## Summary
Different parts of a view can have different urgency and loading boundaries. Deferred rendering allows React to retry lower-priority work. Hydration is a separate process that expects preexisting compatible server-rendered markup.

## Revision checklist
- [ ] Explain and apply usedeferredvalue.
- [ ] Explain and apply suspense boundaries.
- [ ] Explain and apply server rendering concepts and hydration.
- [ ] Explain and apply mismatch prevention.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Understand identity and concurrent work](../20-advanced-react/20-01-understand-identity-and-concurrent-work.md)

Next: [Separate core APIs from infrastructure](../20-advanced-react/20-03-separate-core-apis-from-infrastructure.md)

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
