# Design controlled component APIs

> Chapter 10 · Component Architecture · intermediate · 21 minutes

## Learning objectives
- Explain and apply reusable ui patterns.
- Explain and apply controlled component apis.
- Explain and apply compound component concepts.

## Prerequisites
[Find boundaries and compose](../10-component-architecture/10-01-find-boundaries-and-compose.md)

## Why this concept exists
An explicit API allows the same widget to participate in forms, settings panels, and tests.

## A useful analogy
Good component boundaries resemble departments with clear responsibilities and small, explicit handoffs.

## Concepts, syntax, and terminology
### Reusable UI patterns
Provide semantic defaults, support a caller label, and forward only intentional DOM props. Document disabled and error behavior.

### Controlled component APIs
A controlled widget receives its value and emits changes through onChange. The parent remains authoritative; the child should not silently maintain a conflicting copy.

### Compound component concepts
A group such as Tabs, TabList, and TabPanel can coordinate through Context. This improves composition but requires careful IDs, keyboard behavior, and state ownership.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
function Toggle({ checked, onChange, label }) {
  return <label><input type="checkbox" checked={checked}
    onChange={event => onChange(event.target.checked)} />{label}</label>;
}
import { useState } from 'react';
export default function App() {
  const [enabled, setEnabled] = useState(false);
  return <Toggle checked={enabled} onChange={setEnabled} label="Email updates" />;
}
```

## Expected output
A checkbox controlled by its parent state.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 3: Connects a user interaction to the handler shown.
- Line 5: Imports the named API or type from its module.
- Line 6: Defines a named operation; it runs when called or rendered.
- Line 7: Creates render state and its setter; the initial value is used on mount.
- Line 8: Returns the value or UI for this branch.

## Internal behavior and data flow
The input emits an intent, the parent updates state, and the new prop completes the loop. This keeps programmatic resets and user changes consistent.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Avoid a child state initialized from checked unless the API intentionally supports an uncontrolled defaultChecked mode.

## Practical use case
Use this concept when building interactive profile card. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add disabled support without breaking the label. Independently sketch a tabs API and explain why click-only tabs are incomplete.

<details>
<summary>Hint</summary>

A group such as Tabs, TabList, and TabPanel can coordinate through Context. This improves composition but requires careful IDs, keyboard behavior, and state ownership.

</details>

## Exercise solution
```jsx
function Toggle({ checked, onChange, label, disabled = false }) {
  return <label><input type="checkbox" disabled={disabled} checked={checked}
    onChange={event => onChange(event.target.checked)} />{label}</label>;
}
export default function App() { return <Toggle checked={false} onChange={() => {}} label="Unavailable setting" disabled />; }
```

The input emits an intent, the parent updates state, and the new prop completes the loop. This keeps programmatic resets and user changes consistent.

## Quiz
**Who owns a controlled component value?**

1. A hidden child copy
2. The stylesheet
3. Its parent

**Answer: 3.** Its parent. The input emits an intent, the parent updates state, and the new prop completes the loop. This keeps programmatic resets and user changes consistent.

## Interview questions
- **Basic: Who owns a controlled component value?**
  Its parent
- **Intermediate: Explain the execution of the design controlled component apis example.**
  The input emits an intent, the parent updates state, and the new prop completes the loop. This keeps programmatic resets and user changes consistent.
- **Advanced: What mistake or trade-off would you watch for when applying design controlled component apis in a larger application?**
  Avoid a child state initialized from checked unless the API intentionally supports an uncontrolled defaultChecked mode.

## Summary
An explicit API allows the same widget to participate in forms, settings panels, and tests. The input emits an intent, the parent updates state, and the new prop completes the loop. This keeps programmatic resets and user changes consistent.

## Revision checklist
- [ ] Explain and apply reusable ui patterns.
- [ ] Explain and apply controlled component apis.
- [ ] Explain and apply compound component concepts.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Find boundaries and compose](../10-component-architecture/10-01-find-boundaries-and-compose.md)

Next: [Contain errors and refactor safely](../10-component-architecture/10-03-contain-errors-and-refactor-safely.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `components` `props` `industry-practices` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
