# Lift, derive, preserve, and reset

> Chapter 06 · State and Events · beginner-plus · 28 minutes

## Learning objectives
- Explain and apply lifting state up.
- Explain and apply derived state.
- Explain and apply state preservation and reset.
- Explain and apply state updates and rendering.

## Prerequisites
[Queue immutable updates](../06-state-events/06-02-queue-immutable-updates.md)

## Why this concept exists
Correct ownership reduces synchronization code and makes resets intentional.

## A useful analogy
Each render is a photograph of state. Event handlers belong to that photograph; setters request the next photograph.

## Concepts, syntax, and terminology
### Lifting state up
Move shared state to the closest common parent and pass values and callbacks down. Avoid a global store for data used by only two sibling components.

### Derived state
Calculate filtered lists, totals, and validation flags during render when inexpensive. Store inputs, not every result.

### State preservation and reset
React preserves state for the same component type and key at the same tree position. Changing a key deliberately starts a new component identity.

### State updates and rendering
Rendering calculates output; committing applies necessary DOM changes. A render does not imply that every DOM node changed.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState } from 'react';
function Editor() {
  const [text, setText] = useState('');
  return <input aria-label="Draft" value={text} onChange={e => setText(e.target.value)} />;
}
export default function App() {
  const [version, setVersion] = useState(0);
  return <><Editor key={version} /><button onClick={() => setVersion(v => v + 1)}>Reset draft</button></>;
}
```

## Expected output
Typing changes the draft. Reset draft remounts the editor and clears it.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Returns the value or UI for this branch.
- Line 6: Defines a named operation; it runs when called or rendered.
- Line 7: Creates render state and its setter; the initial value is used on mount.
- Line 8: Returns the value or UI for this branch.

## Internal behavior and data flow
A new key causes React to unmount the old editor and mount a new one, including resetting its Hook state and Effects.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Avoid random keys: they reset state on every render. Use stable identity except when a full reset is intentional.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Build two inputs sharing one value in their parent. Independently reset only one draft using a stable version key.

<details>
<summary>Hint</summary>

Rendering calculates output; committing applies necessary DOM changes. A render does not imply that every DOM node changed.

</details>

## Exercise solution
```jsx
import { useState } from 'react';
export default function App() {
  const [text, setText] = useState('');
  const props = { value: text, onChange: e => setText(e.target.value) };
  return <><input aria-label="First" {...props} /><input aria-label="Second" {...props} /></>;
}
```

A new key causes React to unmount the old editor and mount a new one, including resetting its Hook state and Effects.

## Quiz
**What can deliberately reset a component subtree?**

1. Changing a label prop alone
2. Reusing the same key
3. Changing its key

**Answer: 3.** Changing its key. A new key causes React to unmount the old editor and mount a new one, including resetting its Hook state and Effects.

## Interview questions
- **Basic: What can deliberately reset a component subtree?**
  Changing its key
- **Intermediate: Explain the execution of the lift, derive, preserve, and reset example.**
  A new key causes React to unmount the old editor and mount a new one, including resetting its Hook state and Effects.
- **Advanced: What mistake or trade-off would you watch for when applying lift, derive, preserve, and reset in a larger application?**
  Avoid random keys: they reset state on every render. Use stable identity except when a full reset is intentional.

## Summary
Correct ownership reduces synchronization code and makes resets intentional. A new key causes React to unmount the old editor and mount a new one, including resetting its Hook state and Effects.

## Revision checklist
- [ ] Explain and apply lifting state up.
- [ ] Explain and apply derived state.
- [ ] Explain and apply state preservation and reset.
- [ ] Explain and apply state updates and rendering.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Queue immutable updates](../06-state-events/06-02-queue-immutable-updates.md)

Next: [Render stable collections](../07-lists-conditional-ui/07-01-render-stable-collections.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `state` `events` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
