# Reduce bundle, list, and network work

> Chapter 17 · Performance Optimization · advanced · 28 minutes

## Learning objectives
- Explain and apply code splitting, lazy loading, and suspense.
- Explain and apply large-list virtualization.
- Explain and apply bundle analysis.
- Explain and apply network performance.

## Prerequisites
[Understand memoization trade-offs](../17-performance/17-02-understand-memoization-trade-offs.md)

## Why this concept exists
Reducing unnecessary downloaded and rendered work can outperform micro-optimizing one callback.

## A useful analogy
Optimization is a measured repair: find the slow queue before adding an express lane.

## Concepts, syntax, and terminology
### Code splitting, lazy loading, and Suspense
Split infrequently visited features with dynamic imports. Suspense provides a waiting boundary for supported resources such as lazy components; it does not automatically observe a fetch in an Effect.

### Large-list virtualization
Render only the visible window plus overscan when DOM volume is measured as a bottleneck. Account for item heights, focus, scroll position, and screen-reader access.

### Bundle analysis
Inspect emitted chunks and their dependency graph. Large libraries should be justified by use. A bundle size is not equivalent to load time on every device.

### Network performance
Compress assets at hosting, size images appropriately, cache immutable assets, and avoid sequential independent requests. Measure under representative latency.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
export function visibleRange(scrollTop, rowHeight, viewportHeight, count, overscan = 3) {
  const start = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const end = Math.min(count, Math.ceil((scrollTop + viewportHeight) / rowHeight) + overscan);
  return { start, end, offset: start * rowHeight };
}
console.log(visibleRange(400, 40, 200, 100));
```

## Expected output
{ start: 7, end: 18, offset: 280 }; end is exclusive. This is range math, not a complete accessible virtual list.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Returns the value or UI for this branch.
- Line 6: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
A virtual list preserves total scroll geometry while mounting a subset. Removing a focused row requires deliberate focus handling.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not virtualize a small list by default or claim Suspense handles every asynchronous operation automatically.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Calculate the range at scrollTop=0. Independently design a keyboard policy before building a virtualized interactive list.

<details>
<summary>Hint</summary>

Compress assets at hosting, size images appropriately, cache immutable assets, and avoid sequential independent requests. Measure under representative latency.

</details>

## Exercise solution
```js
const totalHeight = 100 * 40;
const start = 0; const end = 8;
console.log({ totalHeight, visibleRows: end - start });
```

A virtual list preserves total scroll geometry while mounting a subset. Removing a focused row requires deliberate focus handling.

## Quiz
**What does virtualization primarily reduce?**

1. All network requests
2. Mounted DOM elements
3. The total dataset automatically

**Answer: 2.** Mounted DOM elements. A virtual list preserves total scroll geometry while mounting a subset. Removing a focused row requires deliberate focus handling.

## Interview questions
- **Basic: What does virtualization primarily reduce?**
  Mounted DOM elements
- **Intermediate: Explain the execution of the reduce bundle, list, and network work example.**
  A virtual list preserves total scroll geometry while mounting a subset. Removing a focused row requires deliberate focus handling.
- **Advanced: What mistake or trade-off would you watch for when applying reduce bundle, list, and network work in a larger application?**
  Do not virtualize a small list by default or claim Suspense handles every asynchronous operation automatically.

## Summary
Reducing unnecessary downloaded and rendered work can outperform micro-optimizing one callback. A virtual list preserves total scroll geometry while mounting a subset. Removing a focused row requires deliberate focus handling.

## Revision checklist
- [ ] Explain and apply code splitting, lazy loading, and suspense.
- [ ] Explain and apply large-list virtualization.
- [ ] Explain and apply bundle analysis.
- [ ] Explain and apply network performance.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Understand memoization trade-offs](../17-performance/17-02-understand-memoization-trade-offs.md)

Next: [Start with semantics and keyboard](../18-accessibility/18-01-start-with-semantics-and-keyboard.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `performance` `rendering` `hooks` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react/Profiler](https://react.dev/reference/react/Profiler)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
