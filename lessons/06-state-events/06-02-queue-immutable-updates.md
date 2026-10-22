# Queue immutable updates

> Chapter 06 · State and Events · beginner-plus · 28 minutes

## Learning objectives
- Explain and apply functional state updates.
- Explain and apply batching.
- Explain and apply object and array state.
- Explain and apply avoiding direct state mutation.

## Prerequisites
[Respond to events with state](../06-state-events/06-01-respond-to-events-with-state.md)

## Why this concept exists
Updater functions express a change relative to the pending state rather than a stale captured value.

## A useful analogy
Each render is a photograph of state. Event handlers belong to that photograph; setters request the next photograph.

## Concepts, syntax, and terminology
### Functional state updates
Use setCount(previous => previous + 1) when computing from previous state. It composes correctly with other queued updates.

### Batching
React groups many state updates before rendering. Reading a variable after its setter still reads the current render snapshot. Do not rely on a synchronous DOM update.

### Object and array state
Copy every changed path. Use map to replace one item, filter to remove, and spread to append. Copying only the array does not copy its objects.

### Avoiding direct state mutation
Mutation can hide changes and corrupt earlier snapshots. Keep updater functions pure; development checks may call them more than once.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  function addTwo() { setCount(n => n + 1); setCount(n => n + 1); }
  return <button onClick={addTwo}>Count: {count}</button>;
}
```

## Expected output
Each click increases the count by 2.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
React applies queued updater functions in sequence. Each receives the result of the previous updater.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Incorrect: two setCount(count + 1) calls usually replace with the same number. Correct: queue two functional increments.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add three using three updaters. Independently toggle one todo without modifying its original object.

<details>
<summary>Hint</summary>

Mutation can hide changes and corrupt earlier snapshots. Keep updater functions pure; development checks may call them more than once.

</details>

## Exercise solution
```jsx
const toggle = (todos, id) => todos.map(todo =>
  todo.id === id ? { ...todo, done: !todo.done } : todo
);
console.log(toggle([{ id: 'a', done: false }], 'a'));
```

React applies queued updater functions in sequence. Each receives the result of the previous updater.

## Quiz
**Two functional +1 updates from 0 produce which value?**

1. 0
2. 2
3. 1

**Answer: 2.** 2. React applies queued updater functions in sequence. Each receives the result of the previous updater.

## Interview questions
- **Basic: Two functional +1 updates from 0 produce which value?**
  2
- **Intermediate: Explain the execution of the queue immutable updates example.**
  React applies queued updater functions in sequence. Each receives the result of the previous updater.
- **Advanced: What mistake or trade-off would you watch for when applying queue immutable updates in a larger application?**
  Incorrect: two setCount(count + 1) calls usually replace with the same number. Correct: queue two functional increments.

## Summary
Updater functions express a change relative to the pending state rather than a stale captured value. React applies queued updater functions in sequence. Each receives the result of the previous updater.

## Revision checklist
- [ ] Explain and apply functional state updates.
- [ ] Explain and apply batching.
- [ ] Explain and apply object and array state.
- [ ] Explain and apply avoiding direct state mutation.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Respond to events with state](../06-state-events/06-01-respond-to-events-with-state.md)

Next: [Lift, derive, preserve, and reset](../06-state-events/06-03-lift-derive-preserve-and-reset.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `state` `events` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
