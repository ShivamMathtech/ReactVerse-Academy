# Design a registration workflow

> Chapter 08 · Forms and Validation · beginner-plus · 21 minutes

## Learning objectives
- Explain and apply select, checkbox, and radio inputs.
- Explain and apply multi-step forms.
- Explain and apply practical registration form.

## Prerequisites
[Validate and explain errors](../08-forms-validation/08-02-validate-and-explain-errors.md)

## Why this concept exists
A long form becomes easier when each step has a clear purpose and preserves prior work.

## A useful analogy
A form is a conversation: each field asks a clear question, and validation explains how to repair an answer.

## Concepts, syntax, and terminology
### Select, checkbox, and radio inputs
Use select for choosing one option from a list, checkbox for independent booleans, and a fieldset of radios for a small exclusive set. Keep labels clickable.

### Multi-step forms
Store values above step components so navigation preserves them. Validate each step before advancing and allow back navigation without discarding input.

### Practical registration form
Collect name, email, track, and consent. Review the data before final submission. The included registration project stores a local demonstration record and creates no account.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState } from 'react';
export default function App() {
  const [track, setTrack] = useState('react');
  const [agreed, setAgreed] = useState(false);
  return <form onSubmit={e => e.preventDefault()}>
    <label>Track <select value={track} onChange={e => setTrack(e.target.value)}><option value="react">React</option><option value="js">JavaScript</option></select></label>
    <label><input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />I agree</label>
    <button disabled={!agreed}>Review {track}</button>
  </form>;
}
```

## Expected output
A track chooser and consent checkbox; the review button is disabled until consent is checked.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Creates render state and its setter; the initial value is used on mount.
- Line 5: Returns the value or UI for this branch.
- Line 6: Connects a user interaction to the handler shown.
- Line 7: Connects a user interaction to the handler shown.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Mounting and unmounting a step would reset local state, so shared values must live in a parent that stays mounted.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not store a checkbox using event.target.value and expect a boolean. Use event.target.checked.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a back button with type="button". Independently build a two-step review that preserves track and consent.

<details>
<summary>Hint</summary>

Collect name, email, track, and consent. Review the data before final submission. The included registration project stores a local demonstration record and creates no account.

</details>

## Exercise solution
```jsx
const steps = ['Details', 'Review'];
// In the parent: const [step, setStep] = useState(0);
// Back button: <button type="button" onClick={() => setStep(s => Math.max(0, s - 1))}>Back</button>
// Values remain in the parent while step content changes.
console.log(steps.join(' → '));
```

Mounting and unmounting a step would reset local state, so shared values must live in a parent that stays mounted.

## Quiz
**Where should values live when step components unmount?**

1. In a CSS variable
2. In a persistent parent
3. Only in the unmounted step

**Answer: 2.** In a persistent parent. Mounting and unmounting a step would reset local state, so shared values must live in a parent that stays mounted.

## Interview questions
- **Basic: Where should values live when step components unmount?**
  In a persistent parent
- **Intermediate: Explain the execution of the design a registration workflow example.**
  Mounting and unmounting a step would reset local state, so shared values must live in a parent that stays mounted.
- **Advanced: What mistake or trade-off would you watch for when applying design a registration workflow in a larger application?**
  Do not store a checkbox using event.target.value and expect a boolean. Use event.target.checked.

## Summary
A long form becomes easier when each step has a clear purpose and preserves prior work. Mounting and unmounting a step would reset local state, so shared values must live in a parent that stays mounted.

## Revision checklist
- [ ] Explain and apply select, checkbox, and radio inputs.
- [ ] Explain and apply multi-step forms.
- [ ] Explain and apply practical registration form.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Validate and explain errors](../08-forms-validation/08-02-validate-and-explain-errors.md)

Next: [Synchronize with Effects](../09-hooks/09-01-synchronize-with-effects.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `forms` `events` `accessibility` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
