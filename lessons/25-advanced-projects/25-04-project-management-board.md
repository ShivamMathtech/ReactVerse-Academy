# Project management board

> Chapter 25 · Advanced Projects · advanced · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Learning management interface](../25-advanced-projects/25-03-learning-management-interface.md)

## Why this concept exists
This project connects usereducer, state, forms in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Manage tasks through a keyboard-friendly three-column workflow.

### Feature contract
Create and delete tasks. Move using labeled selects. Filter by text and persist.

### Architecture and folder structure
projects/advanced/project-board/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Project management board and drive its labeled controls using userEvent. Assert visible outcomes for create and delete tasks. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/advanced/project-board/README.md).

```jsx
import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
const statuses = ['Backlog', 'Doing', 'Done'];
export default function App() {
  const [tasks, setTasks, error] = useStored(
    'rv-board',
    [{ id: 'seed', title: 'Plan the first feature', status: 'Backlog' }],
    (v) =>
      Array.isArray(v) &&
      v.every((x) => typeof x.title === 'string' && statuses.includes(x.status)),
  );
  const [q, setQ] = useState('');
  function add(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const title = String(new FormData(form).get('title')).trim();
    if (!title) return;
    setTasks((a) => [...a, { id: uid(), title, status: 'Backlog' }]);
    form.reset();
  }
  return (
    <>
      <form className="panel" onSubmit={add}>
        <label>
```

## Expected output
Open projects/advanced/project-board/index.html using the root Vite server. The complete executable implementation is included at projects/advanced/project-board; its documented controls implement: Create and delete tasks, Move using labeled selects, Filter by text and persist.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Defines the named binding from the expression on the right.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Creates render state and its setter; the initial value is used on mount.
- Line 13: Defines a named operation; it runs when called or rendered.
- Line 14: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Defines the named binding from the expression on the right.
- Line 16: Defines the named binding from the expression on the right.
- Line 17: Chooses whether the guarded branch should run.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Returns the value or UI for this branch.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the project management board as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Manage tasks through a keyboard-friendly three-column workflow.

## Guided exercise and independent challenge
Run the project and demonstrate create and delete tasks. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Project management board and drive its labeled controls using userEvent. Assert visible outcomes for create and delete tasks. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/advanced/project-board/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/advanced/project-board/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Why are native selects used to move tasks?**

1. They eliminate the need for state
2. They provide a keyboard-operable move action
3. They create a server connection

**Answer: 2.** They provide a keyboard-operable move action. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Why are native selects used to move tasks?**
  They provide a keyboard-operable move action
- **Intermediate: Explain the execution of the project management board example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying project management board in a larger application?**
  Do not treat the project management board as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects usereducer, state, forms in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Learning management interface](../25-advanced-projects/25-03-learning-management-interface.md)

Next: [Real-time UI simulation](../25-advanced-projects/25-05-real-time-ui-simulation.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `vite` `hands-on` `portfolio-project` `mini-project` `usereducer` `state` `forms` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
