# CRUD management interface

> Chapter 24 · Intermediate Projects · intermediate · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[React Router dashboard](../24-intermediate-projects/24-05-react-router-dashboard.md)

## Why this concept exists
This project connects forms, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Maintain a small local inventory with validated create and edit workflows.

### Feature contract
Create, read, update and delete. Quantity validation. Local persistence.

### Architecture and folder structure
projects/intermediate/crud-manager/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render CRUD management interface and drive its labeled controls using userEvent. Assert visible outcomes for create, read, update and delete. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/intermediate/crud-manager/README.md).

```jsx
import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
const blank = { id: '', name: '', quantity: '1' };
export default function App() {
  const [items, setItems, error] = useStored(
    'rv-inventory',
    [],
    (v) =>
      Array.isArray(v) &&
      v.every(
        (x) =>
          typeof x.id === 'string' && typeof x.name === 'string' && Number.isInteger(x.quantity),
      ),
  );
  const [draft, setDraft] = useState(blank);
  const [message, setMessage] = useState('');
  function save(e) {
    e.preventDefault();
    const quantity = Number(draft.quantity);
    if (
      !draft.name.trim() ||
      draft.quantity === '' ||
      !Number.isInteger(quantity) ||
      quantity < 0 ||
```

## Expected output
Open projects/intermediate/crud-manager/index.html using the root Vite server. The complete executable implementation is included at projects/intermediate/crud-manager; its documented controls implement: Create, read, update and delete, Quantity validation, Local persistence.

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
- Line 11: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Creates render state and its setter; the initial value is used on mount.
- Line 16: Creates render state and its setter; the initial value is used on mount.
- Line 17: Defines a named operation; it runs when called or rendered.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Defines the named binding from the expression on the right.
- Line 20: Chooses whether the guarded branch should run.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the crud management interface as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Maintain a small local inventory with validated create and edit workflows.

## Guided exercise and independent challenge
Run the project and demonstrate create, read, update and delete. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render CRUD management interface and drive its labeled controls using userEvent. Assert visible outcomes for create, read, update and delete. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/intermediate/crud-manager/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/intermediate/crud-manager/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**What distinguishes an update from a create?**

1. A random CSS class
2. Whether the save button is green
3. A stable existing record ID

**Answer: 3.** A stable existing record ID. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: What distinguishes an update from a create?**
  A stable existing record ID
- **Intermediate: Explain the execution of the crud management interface example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying crud management interface in a larger application?**
  Do not treat the crud management interface as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects forms, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [React Router dashboard](../24-intermediate-projects/24-05-react-router-dashboard.md)

Next: [Paginated data explorer](../24-intermediate-projects/24-07-paginated-data-explorer.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `vite` `hands-on` `portfolio-project` `mini-project` `forms` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
