# Todo application

> Chapter 23 · Beginner Projects · beginner · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Digital clock](../23-beginner-projects/23-03-digital-clock.md)

## Why this concept exists
This project connects state, forms, rendering in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Create, complete, filter, and remove browser-local tasks.

### Feature contract
Validated task creation. Completion filters. Persistent tasks.

### Architecture and folder structure
projects/beginner/todo-app/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Todo application and drive its labeled controls using userEvent. Assert visible outcomes for validated task creation. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/beginner/todo-app/README.md).

```jsx
import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
export default function App() {
  const [items, setItems, error] = useStored(
    'rv-todos',
    [],
    (v) =>
      Array.isArray(v) && v.every((x) => typeof x.id === 'string' && typeof x.title === 'string'),
  );
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('all');
  function add(e) {
    e.preventDefault();
    if (!title.trim()) return;
    setItems((a) => [...a, { id: uid(), title: title.trim(), done: false }]);
    setTitle('');
  }
  const visible = items.filter((x) => filter === 'all' || (filter === 'done' ? x.done : !x.done));
  return (
    <section>
      <form className="panel" onSubmit={add}>
        <label>
          New task
          <input
```

## Expected output
Open projects/beginner/todo-app/index.html using the root Vite server. The complete executable implementation is included at projects/beginner/todo-app; its documented controls implement: Validated task creation, Completion filters, Persistent tasks.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Creates render state and its setter; the initial value is used on mount.
- Line 11: Creates render state and its setter; the initial value is used on mount.
- Line 12: Defines a named operation; it runs when called or rendered.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Chooses whether the guarded branch should run.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Keeps only records that satisfy the predicate.
- Line 19: Returns the value or UI for this branch.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the todo application as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Create, complete, filter, and remove browser-local tasks.

## Guided exercise and independent challenge
Run the project and demonstrate validated task creation. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Todo application and drive its labeled controls using userEvent. Assert visible outcomes for validated task creation. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/beginner/todo-app/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/beginner/todo-app/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Which key preserves a task identity after filtering?**

1. Its filtered index
2. A new random number on each render
3. The task’s saved ID

**Answer: 3.** The task’s saved ID. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Which key preserves a task identity after filtering?**
  The task’s saved ID
- **Intermediate: Explain the execution of the todo application example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying todo application in a larger application?**
  Do not treat the todo application as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects state, forms, rendering in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Digital clock](../23-beginner-projects/23-03-digital-clock.md)

Next: [Quiz application](../23-beginner-projects/23-05-quiz-application.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `hands-on` `portfolio-project` `mini-project` `state` `forms` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
