# Extract and test custom Hooks

> Chapter 09 · React Hooks · intermediate · 56 minutes

## Learning objectives
- Explain and apply custom hooks.
- Explain and apply stale closures.
- Explain and apply avoiding unnecessary effects.
- Explain and apply hook testing.

## Prerequisites
[Choose the appropriate Hook](../09-hooks/09-02-choose-the-appropriate-hook.md)

## Why this concept exists
Extraction makes behavior reusable while keeping the same rules and ownership model.

## A useful analogy
An Effect is a synchronization contract with something outside React, including an agreement for disconnecting.

## Concepts, syntax, and terminology
### Custom Hooks
A use-prefixed function composes Hooks to share stateful logic. Each invocation gets independent state unless it reads a shared external source or provider.

### Stale closures
An Effect captures values from its render. Missing dependencies can preserve an old value. Functional updaters help for previous-state calculations; they do not fix every stale input.

### Avoiding unnecessary Effects
Calculate filtered data in render and handle a user action in its event handler. Effects are needed when synchronization must continue independently of one event.

### Hook testing
Use renderHook for a logic-focused Hook and act for direct updates. Prefer testing a component when the actual user interaction is what matters.

### Beginner explanation
A callback remembers the environment where it was created. It does not automatically receive every later render value.

### Intermediate explanation
An empty dependency array can accidentally keep a callback from the first render. Functional state updates solve previous-state calculations, while changing props still need a correct synchronization design.

### Advanced explanation
Separate reactive synchronization from nonreactive reading only when the API contract supports it. React 19.2+ useEffectEvent has a narrow Effect-oriented role; it is not a general workaround for dependency analysis.

### Practical scenario and trade-off
For an interval increment, use the updater form. For switching a data source, include the source identity and reconnect. These are different problems even if both involve closures.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState } from 'react';
export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  return { count, increment: () => setCount(n => n + 1), reset: () => setCount(initial) };
}
export default function App() {
  const counter = useCounter(2);
  return <button onClick={counter.increment}>{counter.count}</button>;
}
```

## Expected output
The button begins at 2 and increments on each click.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Returns the value or UI for this branch.
- Line 6: Defines a named operation; it runs when called or rendered.
- Line 7: Defines the named binding from the expression on the right.
- Line 8: Returns the value or UI for this branch.

## Internal behavior and data flow
Two calls to useCounter create two Hook state sequences. The function shares implementation, not a singleton count.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not assume all users of a custom Hook share state. Use a provider or external store when shared identity is required.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Render two counters and prove independence. Independently write a renderHook test verifying reset to the initial value.

<details>
<summary>Hint</summary>

For an interval increment, use the updater form. For switching a data source, include the source identity and reconnect. These are different problems even if both involve closures.

</details>

## Exercise solution
```jsx
import { renderHook, act } from '@testing-library/react';
import { expect, test } from 'vitest';
import { useCounter } from './useCounter';
test('resets to initial value', () => {
  const { result } = renderHook(() => useCounter(2));
  act(() => result.current.increment());
  act(() => result.current.reset());
  expect(result.current.count).toBe(2);
});
```

Two calls to useCounter create two Hook state sequences. The function shares implementation, not a singleton count.

## Quiz
**What do separate calls to a custom Hook normally share?**

1. One global state object
2. One DOM element
3. Implementation, not state

**Answer: 3.** Implementation, not state. Two calls to useCounter create two Hook state sequences. The function shares implementation, not a singleton count.

## Interview questions
- **Basic: What do separate calls to a custom Hook normally share?**
  Implementation, not state
- **Intermediate: Explain the execution of the extract and test custom hooks example.**
  Two calls to useCounter create two Hook state sequences. The function shares implementation, not a singleton count.
- **Advanced: What mistake or trade-off would you watch for when applying extract and test custom hooks in a larger application?**
  Do not assume all users of a custom Hook share state. Use a provider or external store when shared identity is required.

## Summary
Extraction makes behavior reusable while keeping the same rules and ownership model. Two calls to useCounter create two Hook state sequences. The function shares implementation, not a singleton count.

## Revision checklist
- [ ] Explain and apply custom hooks.
- [ ] Explain and apply stale closures.
- [ ] Explain and apply avoiding unnecessary effects.
- [ ] Explain and apply hook testing.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Choose the appropriate Hook](../09-hooks/09-02-choose-the-appropriate-hook.md)

Next: [Find boundaries and compose](../10-component-architecture/10-01-find-boundaries-and-compose.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `hooks` `useeffect` `usecontext` `usereducer` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
