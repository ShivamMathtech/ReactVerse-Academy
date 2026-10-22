# Respond to events with state

> Chapter 06 · State and Events · beginner-plus · 21 minutes

## Learning objectives
- Explain and apply usestate.
- Explain and apply event handlers.
- Explain and apply controlled inputs.

## Prerequisites
[Choose an owner for changing data](../05-props-data-flow/05-03-choose-an-owner-for-changing-data.md)

## Why this concept exists
State connects user interaction to a recalculated view.

## A useful analogy
Each render is a photograph of state. Event handlers belong to that photograph; setters request the next photograph.

## Concepts, syntax, and terminology
### useState
The Hook returns the current value and a setter. Initial state is used on mount. A setter requests another render; it does not mutate the current render snapshot.

### Event handlers
Pass a function, such as onClick={increment}. Writing onClick={increment()} runs it during rendering. Events are a good place for user-triggered side effects.

### Controlled inputs
A text input with value and onChange follows React state. Initialize it to an empty string rather than switching between undefined and a string.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState } from 'react';
export default function App() {
  const [name, setName] = useState('');
  return <><label>Name <input value={name} onChange={e => setName(e.target.value)} /></label>
    <p>Hello, {name || 'learner'}</p></>;
}
```

## Expected output
The greeting follows the input as you type.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Returns the value or UI for this branch.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
React retains state between renders at a component position. Calling setName queues an update; the next call to the component receives the new value.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not assign name = ... or manipulate the input DOM directly. Call the setter from onChange.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a button that clears the name. Independently reject names over 30 characters using an input constraint.

<details>
<summary>Hint</summary>

A text input with value and onChange follows React state. Initialize it to an empty string rather than switching between undefined and a string.

</details>

## Exercise solution
```jsx
import { useState } from 'react';
export default function App() {
  const [name, setName] = useState('');
  return <><input aria-label="Name" maxLength={30} value={name} onChange={e => setName(e.target.value)} />
    <button onClick={() => setName('')}>Clear</button></>;
}
```

React retains state between renders at a component position. Calling setName queues an update; the next call to the component receives the new value.

## Quiz
**What should onClick normally receive?**

1. A function reference
2. The result of calling a handler during render
3. A CSS selector

**Answer: 1.** A function reference. React retains state between renders at a component position. Calling setName queues an update; the next call to the component receives the new value.

## Interview questions
- **Basic: What should onClick normally receive?**
  A function reference
- **Intermediate: Explain the execution of the respond to events with state example.**
  React retains state between renders at a component position. Calling setName queues an update; the next call to the component receives the new value.
- **Advanced: What mistake or trade-off would you watch for when applying respond to events with state in a larger application?**
  Do not assign name = ... or manipulate the input DOM directly. Call the setter from onChange.

## Summary
State connects user interaction to a recalculated view. React retains state between renders at a component position. Calling setName queues an update; the next call to the component receives the new value.

## Revision checklist
- [ ] Explain and apply usestate.
- [ ] Explain and apply event handlers.
- [ ] Explain and apply controlled inputs.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Choose an owner for changing data](../05-props-data-flow/05-03-choose-an-owner-for-changing-data.md)

Next: [Queue immutable updates](../06-state-events/06-02-queue-immutable-updates.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `state` `events` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
