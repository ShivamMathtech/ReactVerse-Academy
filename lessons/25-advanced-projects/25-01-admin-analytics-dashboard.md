# Admin analytics dashboard

> Chapter 25 · Advanced Projects · advanced · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Registration system](../24-intermediate-projects/24-08-registration-system.md)

## Why this concept exists
This project connects performance, state, production-ready in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Filter sample learning activity, calculate metrics, and export the visible data.

### Feature contract
Period filtering. Accessible chart and table. CSV export.

### Architecture and folder structure
projects/advanced/analytics-dashboard/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Admin analytics dashboard and drive its labeled controls using userEvent. Assert visible outcomes for period filtering. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/advanced/analytics-dashboard/README.md).

```jsx
import { useState } from 'react';
import { Stat } from '../../shared/ui';
const rows = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  lessons: 8 + ((i * 7) % 22),
  minutes: 40 + ((i * 13) % 100),
}));
export default function App() {
  const [period, setPeriod] = useState(7);
  const data = rows.slice(-period);
  function download() {
    const csv =
      'Day,Lessons,Minutes\n' + data.map((x) => `${x.day},${x.lessons},${x.minutes}`).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'learning-activity.csv';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <p>Illustrative dataset · not real learner analytics</p>
      <div className="row toolbar">
```

## Expected output
Open projects/advanced/analytics-dashboard/index.html using the root Vite server. The complete executable implementation is included at projects/advanced/analytics-dashboard; its documented controls implement: Period filtering, Accessible chart and table, CSV export.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Defines a named operation; it runs when called or rendered.
- Line 9: Creates render state and its setter; the initial value is used on mount.
- Line 10: Defines the named binding from the expression on the right.
- Line 11: Defines a named operation; it runs when called or rendered.
- Line 12: Defines the named binding from the expression on the right.
- Line 13: Transforms each matching item into a new value or element.
- Line 14: Defines the named binding from the expression on the right.
- Line 15: Defines the named binding from the expression on the right.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Returns the value or UI for this branch.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the admin analytics dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Filter sample learning activity, calculate metrics, and export the visible data.

## Guided exercise and independent challenge
Run the project and demonstrate period filtering. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Admin analytics dashboard and drive its labeled controls using userEvent. Assert visible outcomes for period filtering. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/advanced/analytics-dashboard/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/advanced/analytics-dashboard/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**What data should an exported CSV contain?**

1. Only chart colors
2. The same filtered records as the visible report
3. Unrelated hidden records

**Answer: 2.** The same filtered records as the visible report. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: What data should an exported CSV contain?**
  The same filtered records as the visible report
- **Intermediate: Explain the execution of the admin analytics dashboard example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying admin analytics dashboard in a larger application?**
  Do not treat the admin analytics dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects performance, state, production-ready in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Registration system](../24-intermediate-projects/24-08-registration-system.md)

Next: [E-commerce frontend](../25-advanced-projects/25-02-e-commerce-frontend.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `vite` `hands-on` `portfolio-project` `mini-project` `performance` `state` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
