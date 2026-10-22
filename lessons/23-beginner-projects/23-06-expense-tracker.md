# Expense tracker

> Chapter 23 · Beginner Projects · beginner · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Quiz application](../23-beginner-projects/23-05-quiz-application.md)

## Why this concept exists
This project connects forms, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Track expenses in integer cents and inspect category totals.

### Feature contract
Validated amount entry. Category totals. Remove entries and persist.

### Architecture and folder structure
projects/beginner/expense-tracker/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Expense tracker and drive its labeled controls using userEvent. Assert visible outcomes for validated amount entry. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/beginner/expense-tracker/README.md).

```jsx
import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
import { money } from '../../shared/api';
export default function App() {
  const [items, setItems, error] = useStored(
    'rv-expenses',
    [],
    (v) => Array.isArray(v) && v.every((x) => typeof x.id === 'string' && Number.isFinite(x.cents)),
  );
  const [message, setMessage] = useState('');
  function add(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const raw = String(d.get('amount'));
    const amount = Number(raw);
    const title = String(d.get('title')).trim();
    if (!title || !/^\d+(\.\d{1,2})?$/.test(raw) || amount <= 0 || amount > 1000000) {
      setMessage('Enter a title and an amount from ₹0.01 to ₹1,000,000 with at most two decimals.');
      return;
    }
    setItems((a) => [
      ...a,
      { id: uid(), title, category: d.get('category'), cents: Math.round(amount * 100) },
```

## Expected output
Open projects/beginner/expense-tracker/index.html using the root Vite server. The complete executable implementation is included at projects/beginner/expense-tracker; its documented controls implement: Validated amount entry, Category totals, Remove entries and persist.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Imports the named API or type from its module.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Defines the named binding from the expression on the right.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Creates render state and its setter; the initial value is used on mount.
- Line 11: Defines a named operation; it runs when called or rendered.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Defines the named binding from the expression on the right.
- Line 14: Defines the named binding from the expression on the right.
- Line 15: Defines the named binding from the expression on the right.
- Line 16: Defines the named binding from the expression on the right.
- Line 17: Defines the named binding from the expression on the right.
- Line 18: Chooses whether the guarded branch should run.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the expense tracker as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Track expenses in integer cents and inspect category totals.

## Guided exercise and independent challenge
Run the project and demonstrate validated amount entry. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Expense tracker and drive its labeled controls using userEvent. Assert visible outcomes for validated amount entry. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/beginner/expense-tracker/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/beginner/expense-tracker/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Why does this tracker store integer cents?**

1. To hide amounts from the browser
2. To keep ordinary currency arithmetic in integer units
3. To convert every amount to dollars

**Answer: 2.** To keep ordinary currency arithmetic in integer units. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Why does this tracker store integer cents?**
  To keep ordinary currency arithmetic in integer units
- **Intermediate: Explain the execution of the expense tracker example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying expense tracker in a larger application?**
  Do not treat the expense tracker as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

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
Previous: [Quiz application](../23-beginner-projects/23-05-quiz-application.md)

Next: [Searchable student directory](../23-beginner-projects/23-07-searchable-student-directory.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `hands-on` `portfolio-project` `mini-project` `forms` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
