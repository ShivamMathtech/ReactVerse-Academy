# Understand memoization trade-offs

> Chapter 17 · Performance Optimization · advanced · 56 minutes

## Learning objectives
- Explain and apply react.memo.
- Explain and apply usememo and usecallback trade-offs.
- Explain and apply react compiler concepts.
- Explain and apply avoiding unnecessary re-renders.

## Prerequisites
[Measure rendering and place state](../17-performance/17-01-measure-rendering-and-place-state.md)

## Why this concept exists
A cache trades repeated computation for retained work and invalidation rules.

## A useful analogy
Optimization is a measured repair: find the slow queue before adding an express lane.

## Concepts, syntax, and terminology
### React.memo
memo may skip a component render when its props compare equal. It does not prevent renders from that component state or consumed Context.

### useMemo and useCallback trade-offs
Memoization costs comparisons, retained memory, and dependency complexity. Fresh object/function props can defeat a memoized child. Use caching only for a measured need.

### React Compiler concepts
The compiler can automate some memoization when configured in a supported build. It is not enabled in this repository, and pure component rules still matter.

### Avoiding unnecessary re-renders
A stable reference is useful only when some downstream comparison uses it. It does not make an inherently expensive algorithm cheap.

### Beginner explanation
Memoization remembers work when inputs have not changed. Remembering a value also has a cost.

### Intermediate explanation
A freshly constructed array or callback is a new reference, even if it looks identical. Memoization helps only where a comparison or expensive calculation benefits from stable inputs.

### Advanced explanation
A cache may be discarded, so logic must remain correct without it. Memoized components still respond to their own state and Context. Compiler-assisted caching changes the amount of manual work, not the need for pure code.

### Practical scenario and trade-off
Cache a measured expensive selector and compare its cost with dependency checking. For simple multiplication, recomputing is generally clearer. Avoid custom comparison functions unless you can prove correctness and benefit.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { memo, useMemo } from 'react';
const Results = memo(function Results({ items }) {
  return <ul>{items.map(item => <li key={item.id}>{item.title}</li>)}</ul>;
});
export default function SearchResults({ items = [], query = '' }) {
  const filtered = useMemo(() => items.filter(item => item.title.includes(query)), [items, query]);
  return <Results items={filtered} />;
}
```

## Expected output
Results can reuse its render when the memoized filtered array and other props are unchanged.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Transforms each matching item into a new value or element.
- Line 5: Defines a named operation; it runs when called or rendered.
- Line 6: Keeps only records that satisfy the predicate.
- Line 7: Returns the value or UI for this branch.

## Internal behavior and data flow
useMemo compares dependencies with Object.is. If the parent recreates items on every render, the calculation still runs. React may discard caches, so correctness must not depend on them.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not omit dependencies to preserve a cache. That makes output stale rather than fast.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Remove useMemo and verify identical behavior. Independently measure whether caching helps for 10 versus 10,000 records.

<details>
<summary>Hint</summary>

Cache a measured expensive selector and compare its cost with dependency checking. For simple multiplication, recomputing is generally clearer. Avoid custom comparison functions unless you can prove correctness and benefit.

</details>

## Exercise solution
```jsx
// Correctness baseline:
const filtered = items => items.filter(item => item.title.includes('React'));
console.log(filtered([{ id: 'a', title: 'React state' }]));
```

useMemo compares dependencies with Object.is. If the parent recreates items on every render, the calculation still runs. React may discard caches, so correctness must not depend on them.

## Quiz
**Should application correctness depend on useMemo retaining a value forever?**

1. No
2. Yes
3. Only for objects

**Answer: 1.** No. useMemo compares dependencies with Object.is. If the parent recreates items on every render, the calculation still runs. React may discard caches, so correctness must not depend on them.

## Interview questions
- **Basic: Should application correctness depend on useMemo retaining a value forever?**
  No
- **Intermediate: Explain the execution of the understand memoization trade-offs example.**
  useMemo compares dependencies with Object.is. If the parent recreates items on every render, the calculation still runs. React may discard caches, so correctness must not depend on them.
- **Advanced: What mistake or trade-off would you watch for when applying understand memoization trade-offs in a larger application?**
  Do not omit dependencies to preserve a cache. That makes output stale rather than fast.

## Summary
A cache trades repeated computation for retained work and invalidation rules. useMemo compares dependencies with Object.is. If the parent recreates items on every render, the calculation still runs. React may discard caches, so correctness must not depend on them.

## Revision checklist
- [ ] Explain and apply react.memo.
- [ ] Explain and apply usememo and usecallback trade-offs.
- [ ] Explain and apply react compiler concepts.
- [ ] Explain and apply avoiding unnecessary re-renders.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Measure rendering and place state](../17-performance/17-01-measure-rendering-and-place-state.md)

Next: [Reduce bundle, list, and network work](../17-performance/17-03-reduce-bundle-list-and-network-work.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `performance` `rendering` `hooks` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react/Profiler](https://react.dev/reference/react/Profiler)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
