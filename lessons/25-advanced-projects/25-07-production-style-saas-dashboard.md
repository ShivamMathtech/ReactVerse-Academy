# Production-style SaaS dashboard

> Chapter 25 · Advanced Projects · advanced · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Accessible component library](../25-advanced-projects/25-06-accessible-component-library.md)

## Why this concept exists
This project connects forms, state, production-ready in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Manage a fictional workspace, seats, and sample invoices locally.

### Feature contract
Workspace preferences. Team seat management. Invoice filtering and CSV download.

### Architecture and folder structure
projects/advanced/saas-dashboard/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Production-style SaaS dashboard and drive its labeled controls using userEvent. Assert visible outcomes for workspace preferences. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/advanced/saas-dashboard/README.md).

```jsx
import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
import { money } from '../../shared/api';
const invoices = [
  { id: 'INV-001', cents: 490000, status: 'Paid' },
  { id: 'INV-002', cents: 490000, status: 'Paid' },
  { id: 'INV-003', cents: 590000, status: 'Due' },
];
export default function App() {
  const [tab, setTab] = useState('Overview');
  const [team, setTeam, error] = useStored(
    'rv-team',
    [{ id: 'owner', name: 'Demo owner', role: 'Owner' }],
    (v) =>
      Array.isArray(v) && v.every((x) => typeof x.id === 'string' && typeof x.name === 'string'),
  );
  const [workspace, setWorkspace, error2] = useStored(
    'rv-workspace',
    'Learning studio',
    (v) => typeof v === 'string',
  );
  const [filter, setFilter] = useState('All');
  const [notice, setNotice] = useState('');
  function add(e) {
```

## Expected output
Open projects/advanced/saas-dashboard/index.html using the root Vite server. The complete executable implementation is included at projects/advanced/saas-dashboard; its documented controls implement: Workspace preferences, Team seat management, Invoice filtering and CSV download.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Imports the named API or type from its module.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Defines a named operation; it runs when called or rendered.
- Line 10: Creates render state and its setter; the initial value is used on mount.
- Line 11: Defines the named binding from the expression on the right.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Defines the named binding from the expression on the right.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Creates render state and its setter; the initial value is used on mount.
- Line 23: Creates render state and its setter; the initial value is used on mount.
- Line 24: Defines a named operation; it runs when called or rendered.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the production-style saas dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Manage a fictional workspace, seats, and sample invoices locally.

## Guided exercise and independent challenge
Run the project and demonstrate workspace preferences. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Production-style SaaS dashboard and drive its labeled controls using userEvent. Assert visible outcomes for workspace preferences. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/advanced/saas-dashboard/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/advanced/saas-dashboard/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Does changing a local team role enforce real authorization?**

1. Yes, hiding a button is sufficient
2. No, this is a local demonstration
3. Yes, localStorage is authoritative

**Answer: 2.** No, this is a local demonstration. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Does changing a local team role enforce real authorization?**
  No, this is a local demonstration
- **Intermediate: Explain the execution of the production-style saas dashboard example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying production-style saas dashboard in a larger application?**
  Do not treat the production-style saas dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects forms, state, production-ready in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Accessible component library](../25-advanced-projects/25-06-accessible-component-library.md)

Next: [StudyFlow capstone](../26-capstone-project/26-01-studyflow-capstone.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `vite` `hands-on` `portfolio-project` `mini-project` `forms` `state` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
