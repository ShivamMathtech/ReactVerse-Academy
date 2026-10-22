# StudyFlow capstone

> Chapter 26 · Capstone Project · advanced · 240 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Production-style SaaS dashboard](../25-advanced-projects/25-07-production-style-saas-dashboard.md)

## Why this concept exists
This project connects capstone, routing, forms, api-integration, typescript, testing in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
A complete local study planner with routing, validated tasks, a real fixture fetch, persistent reducer state, and a strict TypeScript edition.

### Feature contract
Nested routing and deep links. Validated task CRUD and filtering. Fetch API, cancellation, loading, empty and error states. Local reducer persistence and JSON export. JavaScript and strict TypeScript variants.

### Architecture and folder structure
projects/advanced/studyflow/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render StudyFlow capstone and drive its labeled controls using userEvent. Assert visible outcomes for nested routing and deep links. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/advanced/studyflow/README.md).

```jsx
import { useEffect, useRef, useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Outlet, Link, useSearchParams, useParams, } from 'react-router';
import { PlannerProvider, usePlanner } from './store';
import { createTaskId, validateTask } from './model';
import { loadCourses } from './api';
import '../../../src/styles/projects.css';
const empty = { id: '', title: '', course: '', due: '', done: false };
function Shell() {
    const { storageError } = usePlanner();
    return (<div className="demo-layout">
      <header>
        <a href={`${import.meta.env.BASE_URL}#/projects`}>← ReactVerse Academy</a>
        <span>STUDYFLOW · CAPSTONE</span>
      </header>
      <main>
        <p className="eyebrow">YOUR LEARNING, IN FOCUS</p>
        <h1>Make room for progress.</h1>
        <nav aria-label="StudyFlow">
          <NavLink to="/" end>
            Overview
          </NavLink>
          <NavLink to="/planner">Study planner</NavLink>
          <NavLink to="/courses">Course catalog</NavLink>
          <NavLink to="/settings">Settings</NavLink>
```

## Expected output
Open projects/advanced/studyflow/index.html using the root Vite server. The complete executable implementation is included at projects/advanced/studyflow; its documented controls implement: Nested routing and deep links, Validated task CRUD and filtering, Fetch API, cancellation, loading, empty and error states, Local reducer persistence and JSON export, JavaScript and strict TypeScript variants.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Imports the named API or type from its module.
- Line 4: Imports the named API or type from its module.
- Line 5: Imports the named API or type from its module.
- Line 6: Imports the named API or type from its module.
- Line 7: Defines the named binding from the expression on the right.
- Line 8: Defines a named operation; it runs when called or rendered.
- Line 9: Defines the named binding from the expression on the right.
- Line 10: Returns the value or UI for this branch.
- Line 11: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the studyflow capstone as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
A complete local study planner with routing, validated tasks, a real fixture fetch, persistent reducer state, and a strict TypeScript edition.

## Guided exercise and independent challenge
Run the project and demonstrate nested routing and deep links. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render StudyFlow capstone and drive its labeled controls using userEvent. Assert visible outcomes for nested routing and deep links. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/advanced/studyflow/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/advanced/studyflow/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Why validate a course response at runtime even in TypeScript?**

1. TypeScript encrypts responses
2. Fetch always returns a valid Course array
3. Types do not validate unknown JSON after compilation

**Answer: 3.** Types do not validate unknown JSON after compilation. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Why validate a course response at runtime even in TypeScript?**
  Types do not validate unknown JSON after compilation
- **Intermediate: Explain the execution of the studyflow capstone example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying studyflow capstone in a larger application?**
  Do not treat the studyflow capstone as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects capstone, routing, forms, api-integration, typescript, testing in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Production-style SaaS dashboard](../25-advanced-projects/25-07-production-style-saas-dashboard.md)

Next: Course complete — revisit a capstone decision and explain its trade-offs.

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `vite` `hands-on` `portfolio-project` `capstone` `typescript` `routing` `forms` `api-integration` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 240 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
- [www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
