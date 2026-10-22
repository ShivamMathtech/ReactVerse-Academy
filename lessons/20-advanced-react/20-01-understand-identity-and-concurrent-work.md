# Understand identity and concurrent work

> Chapter 20 · Advanced React Concepts · expert-concepts · 56 minutes

## Learning objectives
- Explain and apply reconciliation.
- Explain and apply keys and component identity.
- Explain and apply concurrent rendering concepts.
- Explain and apply transitions and usetransition.

## Prerequisites
[Maintain dependencies and recover from failure](../19-security/19-03-maintain-dependencies-and-recover-from-failure.md)

## Why this concept exists
Priority lets React keep urgent interactions responsive while less urgent rendering catches up.

## A useful analogy
Concurrent rendering is interruptible planning before committing a result; it is not two threads editing the same DOM at once.

## Concepts, syntax, and terminology
### Reconciliation
React compares element descriptions and determines which mounted components and DOM nodes can be retained. Stable type, position, and keys guide identity.

### Keys and component identity
A changed key starts a new component identity and resets its state. Keys need uniqueness among siblings, not across the entire application.

### Concurrent rendering concepts
React can prioritize updates and interrupt work before commit. Rendering must be pure because an attempt may never be committed.

### Transitions and useTransition
Mark a nonurgent update as a transition while keeping urgent controlled input state immediate. isPending can indicate background work. Transitions do not make expensive JavaScript run off-thread.

### Beginner explanation
Urgent typing should not wait behind a less urgent result view. A transition marks that distinction for React.

### Intermediate explanation
Keep controlled input state immediate and transition the dependent result state. The update may be interrupted by another urgent interaction before it commits.

### Advanced explanation
Transition callbacks still execute on the JavaScript thread. Expensive non-React computation may need a worker or chunking; scheduling priority is not parallel execution.

### Practical scenario and trade-off
Use a large results panel as the demonstration. A tiny label may finish too quickly for isPending to be visible. Report measured responsiveness rather than promising speed from one Hook.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState, useTransition } from 'react';
export default function App() {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [pending, startTransition] = useTransition();
  return <><input aria-label="Search" value={text} onChange={e => {
    const next = e.target.value; setText(next);
    startTransition(() => setQuery(next));
  }} /><p>{pending ? 'Updating…' : `Results for ${query}`}</p></>;
}
```

## Expected output
Input updates urgently; the results state is marked nonurgent. A tiny example may not visibly remain pending.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Creates render state and its setter; the initial value is used on mount.
- Line 5: Defines the named binding from the expression on the right.
- Line 6: Returns the value or UI for this branch.
- Line 7: Defines the named binding from the expression on the right.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
startTransition marks updates scheduled within its scope. It does not move a synchronous filtering loop into a worker or delay the callback itself.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not put the controlled input value update inside a transition. Keep the input immediate and transition the dependent view.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a measured expensive result component. Independently explain why a heavy loop inside the handler still blocks input.

<details>
<summary>Hint</summary>

Use a large results panel as the demonstration. A tiny label may finish too quickly for isPending to be visible. Report measured responsiveness rather than promising speed from one Hook.

</details>

## Exercise solution
```jsx
// Urgent:
// setText(next);
// Nonurgent rendering:
// startTransition(() => setQuery(next));
// CPU-heavy non-React work may need chunking or a Worker instead.
```

startTransition marks updates scheduled within its scope. It does not move a synchronous filtering loop into a worker or delay the callback itself.

## Quiz
**Does startTransition move arbitrary JavaScript to another thread?**

1. Yes
2. Only array filtering
3. No

**Answer: 3.** No. startTransition marks updates scheduled within its scope. It does not move a synchronous filtering loop into a worker or delay the callback itself.

## Interview questions
- **Basic: Does startTransition move arbitrary JavaScript to another thread?**
  No
- **Intermediate: Explain the execution of the understand identity and concurrent work example.**
  startTransition marks updates scheduled within its scope. It does not move a synchronous filtering loop into a worker or delay the callback itself.
- **Advanced: What mistake or trade-off would you watch for when applying understand identity and concurrent work in a larger application?**
  Do not put the controlled input value update inside a transition. Keep the input immediate and transition the dependent view.

## Summary
Priority lets React keep urgent interactions responsive while less urgent rendering catches up. startTransition marks updates scheduled within its scope. It does not move a synchronous filtering loop into a worker or delay the callback itself.

## Revision checklist
- [ ] Explain and apply reconciliation.
- [ ] Explain and apply keys and component identity.
- [ ] Explain and apply concurrent rendering concepts.
- [ ] Explain and apply transitions and usetransition.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Maintain dependencies and recover from failure](../19-security/19-03-maintain-dependencies-and-recover-from-failure.md)

Next: [Defer values and locate Suspense boundaries](../20-advanced-react/20-02-defer-values-and-locate-suspense-boundaries.md)

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
