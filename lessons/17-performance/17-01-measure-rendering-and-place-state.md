# Measure rendering and place state

> Chapter 17 · Performance Optimization · advanced · 56 minutes

## Learning objectives
- Explain and apply how react rendering works.
- Explain and apply render versus commit.
- Explain and apply state placement and avoiding unnecessary re-renders.
- Explain and apply react profiler and measuring before optimizing.

## Prerequisites
[Migrate with strict checking](../16-typescript/16-03-migrate-with-strict-checking.md)

## Why this concept exists
Measuring the user interaction prevents spending complexity on work that is already fast.

## A useful analogy
Optimization is a measured repair: find the slow queue before adding an express lane.

## Concepts, syntax, and terminology
### How React rendering works
A state update can cause React to call components to calculate output. A parent render normally visits its children unless a valid optimization lets React skip work.

### Render versus commit
Rendering computes a possible tree and must stay pure. Commit applies changes and assigns refs. Concurrent rendering may restart or discard render work.

### State placement and avoiding unnecessary re-renders
Move frequently changing state near the components that need it. Passing stable children through a stateful wrapper can also isolate updates.

### React Profiler and measuring before optimizing
Record a real slow interaction, identify expensive commits, and repeat under comparable conditions after one change. Development timings differ from production.

### Beginner explanation
Calling a component calculates a view. Updating the browser is a separate step. A render does not mean the whole page was redrawn.

### Intermediate explanation
State placement determines how far a normal update travels through the component tree. Profiling identifies which work is expensive for an actual interaction.

### Advanced explanation
Concurrent rendering can restart or discard calculations before a commit. Pure rendering makes these attempts safe. Measure comparable production behavior before claiming a performance improvement.

### Practical scenario and trade-off
Profile typing into a large list and then move unrelated state closer to its owner. Compare the same input and dataset; do not optimize every function on principle.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { Profiler, useState } from 'react';
function Counter() {
  const [n, setN] = useState(0);
  return <button onClick={() => setN(x => x + 1)}>{n}</button>;
}
export default function App() {
  return <Profiler id="counter" onRender={(id, phase, duration) => console.log(id, phase, duration)}><Counter /></Profiler>;
}
```

## Expected output
Clicking logs a measured render duration for this environment; no universal benchmark is implied.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Returns the value or UI for this branch.
- Line 6: Defines a named operation; it runs when called or rendered.
- Line 7: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
A render can be interrupted without committing. Side effects performed during render would still have occurred, which is why purity matters.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not use a console.log count as a production performance benchmark. Compare measured interactions and verify perceived responsiveness.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Profile typing into a filtered list. Independently move the input state closer to that list and compare the same interaction.

<details>
<summary>Hint</summary>

Profile typing into a large list and then move unrelated state closer to its owner. Compare the same input and dataset; do not optimize every function on principle.

</details>

## Exercise solution
```jsx
// Before: a page-level query state re-renders unrelated panels.
// After: SearchPanel owns query; expensive independent siblings keep their inputs unchanged.
// Record both designs with the same dataset and interaction before deciding.
```

A render can be interrupted without committing. Side effects performed during render would still have occurred, which is why purity matters.

## Quiz
**Which phase actually applies DOM changes?**

1. Every function call
2. Import resolution
3. Commit

**Answer: 3.** Commit. A render can be interrupted without committing. Side effects performed during render would still have occurred, which is why purity matters.

## Interview questions
- **Basic: Which phase actually applies DOM changes?**
  Commit
- **Intermediate: Explain the execution of the measure rendering and place state example.**
  A render can be interrupted without committing. Side effects performed during render would still have occurred, which is why purity matters.
- **Advanced: What mistake or trade-off would you watch for when applying measure rendering and place state in a larger application?**
  Do not use a console.log count as a production performance benchmark. Compare measured interactions and verify perceived responsiveness.

## Summary
Measuring the user interaction prevents spending complexity on work that is already fast. A render can be interrupted without committing. Side effects performed during render would still have occurred, which is why purity matters.

## Revision checklist
- [ ] Explain and apply how react rendering works.
- [ ] Explain and apply render versus commit.
- [ ] Explain and apply state placement and avoiding unnecessary re-renders.
- [ ] Explain and apply react profiler and measuring before optimizing.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Migrate with strict checking](../16-typescript/16-03-migrate-with-strict-checking.md)

Next: [Understand memoization trade-offs](../17-performance/17-02-understand-memoization-trade-offs.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `performance` `rendering` `hooks` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react/Profiler](https://react.dev/reference/react/Profiler)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
