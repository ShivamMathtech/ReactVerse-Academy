# Notes application

> Chapter 24 · Intermediate Projects · intermediate · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Movie discovery interface](../24-intermediate-projects/24-02-movie-discovery-interface.md)

## Why this concept exists
This project connects forms, state, hooks in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Create, edit, search, and delete browser-local notes.

### Feature contract
Create and edit notes. Search title and body. Persistence and empty states.

### Architecture and folder structure
projects/intermediate/notes-app/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Notes application and drive its labeled controls using userEvent. Assert visible outcomes for create and edit notes. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/intermediate/notes-app/README.md).

```jsx
import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
export default function App() {
  const [notes, setNotes, error] = useStored(
    'rv-notes',
    [],
    (v) =>
      Array.isArray(v) &&
      v.every(
        (x) =>
          typeof x.id === 'string' && typeof x.title === 'string' && typeof x.body === 'string',
      ),
  );
  const [draft, setDraft] = useState({ id: '', title: '', body: '' });
  const [q, setQ] = useState('');
  const [message, setMessage] = useState('');
  function save(e) {
    e.preventDefault();
    if (!draft.title.trim()) {
      setMessage('Enter a note title.');
      return;
    }
    const note = { ...draft, id: draft.id || uid(), title: draft.title.trim() };
    setNotes((a) => (draft.id ? a.map((x) => (x.id === draft.id ? note : x)) : [note, ...a]));
```

## Expected output
Open projects/intermediate/notes-app/index.html using the root Vite server. The complete executable implementation is included at projects/intermediate/notes-app; its documented controls implement: Create and edit notes, Search title and body, Persistence and empty states.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 11: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Creates render state and its setter; the initial value is used on mount.
- Line 15: Creates render state and its setter; the initial value is used on mount.
- Line 16: Creates render state and its setter; the initial value is used on mount.
- Line 17: Defines a named operation; it runs when called or rendered.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Chooses whether the guarded branch should run.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Defines the named binding from the expression on the right.
- Line 24: Transforms each matching item into a new value or element.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the notes application as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Create, edit, search, and delete browser-local notes.

## Guided exercise and independent challenge
Run the project and demonstrate create and edit notes. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Notes application and drive its labeled controls using userEvent. Assert visible outcomes for create and edit notes. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/intermediate/notes-app/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/intermediate/notes-app/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**What happens when an existing note is saved?**

1. Append a duplicate every time
2. Mutate a DOM paragraph only
3. Replace the matching ID with a new object

**Answer: 3.** Replace the matching ID with a new object. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: What happens when an existing note is saved?**
  Replace the matching ID with a new object
- **Intermediate: Explain the execution of the notes application example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying notes application in a larger application?**
  Do not treat the notes application as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects forms, state, hooks in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Movie discovery interface](../24-intermediate-projects/24-02-movie-discovery-interface.md)

Next: [Shopping cart](../24-intermediate-projects/24-04-shopping-cart.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `vite` `hands-on` `portfolio-project` `mini-project` `forms` `state` `hooks` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
