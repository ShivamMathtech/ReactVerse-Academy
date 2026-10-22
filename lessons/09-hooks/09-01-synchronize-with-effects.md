# Synchronize with Effects

> Chapter 09 · React Hooks · intermediate · 56 minutes

## Learning objectives
- Explain and apply rules of hooks.
- Explain and apply usestate and useeffect.
- Explain and apply dependency arrays.
- Explain and apply cleanup functions and effect lifecycle.

## Prerequisites
[Design a registration workflow](../08-forms-validation/08-03-design-a-registration-workflow.md)

## Why this concept exists
External systems do not automatically follow React component lifetimes. Effects establish and release that connection.

## A useful analogy
An Effect is a synchronization contract with something outside React, including an agreement for disconnecting.

## Concepts, syntax, and terminology
### Rules of Hooks
Call ordinary Hooks unconditionally at the top level of a component or custom Hook. Stable call order lets React associate each Hook with its state. The special use API has different placement rules; it is not covered by this rule shorthand.

### useState and useEffect
State stores UI memory. Effects synchronize committed UI with external systems such as timers, subscriptions, and browser APIs. Calculations from existing props/state usually belong in render.

### Dependency arrays
List all reactive values used by an Effect. React compares dependencies with Object.is. [] does not mean ignore every future value; it means the Effect uses no reactive dependencies.

### Cleanup functions and Effect lifecycle
Return cleanup to undo a subscription or timer. React cleans up old synchronization before running it for changed dependencies, and on unmount. Development StrictMode adds a setup-cleanup rehearsal.

### Beginner explanation
An Effect connects a component to something React does not own, such as a timer. If all you need is a value calculated from props, calculate it directly.

### Intermediate explanation
Treat setup and cleanup as one reversible operation. On a changed dependency, disconnect the old resource before connecting the new one. The dependency list describes the values used; it is not an arbitrary schedule.

### Advanced explanation
An Effect belongs to committed UI. Development setup-cleanup repetition tests reversibility. A stale subscription after unmount is a lifetime bug, not a reason to disable development checks.

### Practical scenario and trade-off
For a room subscription, connect using roomId and return unsubscribe. The trade-off is explicit lifecycle code, but you gain correct switching and teardown.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useEffect, useState } from 'react';
export default function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds(n => n + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return <p>{seconds} seconds</p>;
}
```

## Expected output
The count rises approximately once per second and the timer stops on unmount.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Registers external synchronization after commit.
- Line 5: Defines the named binding from the expression on the right.
- Line 6: Returns cleanup to release the external resource.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Returns the value or UI for this branch.

## Internal behavior and data flow
Effects run after a commit. A functional updater avoids reading seconds inside the Effect, so the timer can stay connected without a seconds dependency.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not hide missing dependencies with an empty array. Change the design so the Effect expresses its real inputs.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a pause prop and recreate the timer only when it changes. Independently verify cleanup after mounting and unmounting the component.

<details>
<summary>Hint</summary>

For a room subscription, connect using roomId and return unsubscribe. The trade-off is explicit lifecycle code, but you gain correct switching and teardown.

</details>

## Exercise solution
```jsx
import { useEffect, useState } from 'react';
export default function Timer({ paused = false }) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setSeconds(n => n + 1), 1000);
    return () => clearInterval(id);
  }, [paused]);
  return <p>{seconds}</p>;
}
```

Effects run after a commit. A functional updater avoids reading seconds inside the Effect, so the timer can stay connected without a seconds dependency.

## Quiz
**When is Effect cleanup used?**

1. Before changed synchronization and on unmount
2. Only on a page refresh
3. Only when an error occurs

**Answer: 1.** Before changed synchronization and on unmount. Effects run after a commit. A functional updater avoids reading seconds inside the Effect, so the timer can stay connected without a seconds dependency.

## Interview questions
- **Basic: When is Effect cleanup used?**
  Before changed synchronization and on unmount
- **Intermediate: Explain the execution of the synchronize with effects example.**
  Effects run after a commit. A functional updater avoids reading seconds inside the Effect, so the timer can stay connected without a seconds dependency.
- **Advanced: What mistake or trade-off would you watch for when applying synchronize with effects in a larger application?**
  Do not hide missing dependencies with an empty array. Change the design so the Effect expresses its real inputs.

## Summary
External systems do not automatically follow React component lifetimes. Effects establish and release that connection. Effects run after a commit. A functional updater avoids reading seconds inside the Effect, so the timer can stay connected without a seconds dependency.

## Revision checklist
- [ ] Explain and apply rules of hooks.
- [ ] Explain and apply usestate and useeffect.
- [ ] Explain and apply dependency arrays.
- [ ] Explain and apply cleanup functions and effect lifecycle.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Design a registration workflow](../08-forms-validation/08-03-design-a-registration-workflow.md)

Next: [Choose the appropriate Hook](../09-hooks/09-02-choose-the-appropriate-hook.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `hooks` `useeffect` `usecontext` `usereducer` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
