# Choose the appropriate Hook

> Chapter 09 · React Hooks · intermediate · 28 minutes

## Learning objectives
- Explain and apply useref.
- Explain and apply usecontext.
- Explain and apply usereducer.
- Explain and apply usememo and usecallback.

## Prerequisites
[Synchronize with Effects](../09-hooks/09-01-synchronize-with-effects.md)

## Why this concept exists
Different Hooks solve different ownership and synchronization problems; using all of them is not a goal.

## A useful analogy
An Effect is a synchronization contract with something outside React, including an agreement for disconnecting.

## Concepts, syntax, and terminology
### useRef
A ref stores a mutable value that survives renders without causing rendering. Use it for DOM focus or an imperative handle, not a value the UI must display reactively.

### useContext
Read the nearest provider value. It avoids passing values through unrelated intermediates, but updates can re-render consumers. Context is not automatically a selector-based store.

### useReducer
A reducer groups state transitions into named actions. It must return new state without side effects. It is useful when transitions interact, but overkill for one boolean.

### useMemo and useCallback
useMemo caches a calculated value; useCallback caches a function identity. They are performance tools, not correctness requirements. Measure and use them only when identity or expensive work matters.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useRef } from 'react';
export default function App() {
  const input = useRef(null);
  return <><input ref={input} aria-label="Search lessons" />
    <button onClick={() => input.current?.focus()}>Focus search</button></>;
}
```

## Expected output
The button moves keyboard focus into the search input.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Returns the value or UI for this branch.
- Line 5: Connects a user interaction to the handler shown.

## Internal behavior and data flow
React assigns the DOM node to the ref during commit. Updating ref.current does not enqueue a component render.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not use a ref instead of state for a visible score; changes will not refresh the UI. Do not memoize trivial arithmetic by habit.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a button that selects the input text. Independently implement a reducer with increment and reset actions.

<details>
<summary>Hint</summary>

useMemo caches a calculated value; useCallback caches a function identity. They are performance tools, not correctness requirements. Measure and use them only when identity or expensive work matters.

</details>

## Exercise solution
```jsx
export function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'reset': return { count: 0 };
    default: return state;
  }
}
console.log(reducer({ count: 2 }, { type: 'reset' }));
```

React assigns the DOM node to the ref during commit. Updating ref.current does not enqueue a component render.

## Quiz
**Does changing ref.current schedule a render?**

1. Only for numbers
2. No
3. Yes, always

**Answer: 2.** No. React assigns the DOM node to the ref during commit. Updating ref.current does not enqueue a component render.

## Interview questions
- **Basic: Does changing ref.current schedule a render?**
  No
- **Intermediate: Explain the execution of the choose the appropriate hook example.**
  React assigns the DOM node to the ref during commit. Updating ref.current does not enqueue a component render.
- **Advanced: What mistake or trade-off would you watch for when applying choose the appropriate hook in a larger application?**
  Do not use a ref instead of state for a visible score; changes will not refresh the UI. Do not memoize trivial arithmetic by habit.

## Summary
Different Hooks solve different ownership and synchronization problems; using all of them is not a goal. React assigns the DOM node to the ref during commit. Updating ref.current does not enqueue a component render.

## Revision checklist
- [ ] Explain and apply useref.
- [ ] Explain and apply usecontext.
- [ ] Explain and apply usereducer.
- [ ] Explain and apply usememo and usecallback.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Synchronize with Effects](../09-hooks/09-01-synchronize-with-effects.md)

Next: [Extract and test custom Hooks](../09-hooks/09-03-extract-and-test-custom-hooks.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `hooks` `useeffect` `usecontext` `usereducer` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
