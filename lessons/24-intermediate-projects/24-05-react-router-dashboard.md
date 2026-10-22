# React Router dashboard

> Chapter 24 · Intermediate Projects · intermediate · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Shopping cart](../24-intermediate-projects/24-04-shopping-cart.md)

## Why this concept exists
This project connects react-router, routing in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Navigate nested dashboard views with shareable search parameters.

### Feature contract
Nested routes and layout. Student detail URLs. URL-driven filters and not-found.

### Architecture and folder structure
projects/intermediate/router-dashboard/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render React Router dashboard and drive its labeled controls using userEvent. Assert visible outcomes for nested routes and layout. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/intermediate/router-dashboard/README.md).

```jsx
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link,
  useParams,
  useSearchParams,
} from 'react-router';
import { students } from '../../shared/api';
function Layout() {
  return (
    <>
      <nav aria-label="Dashboard">
        <NavLink to="/" end>
          Overview
        </NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <Outlet />
    </>
  );
```

## Expected output
Open projects/intermediate/router-dashboard/index.html using the root Vite server. The complete executable implementation is included at projects/intermediate/router-dashboard; its documented controls implement: Nested routes and layout, Student detail URLs, URL-driven filters and not-found.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 11: Imports the named API or type from its module.
- Line 12: Defines a named operation; it runs when called or rendered.
- Line 13: Returns the value or UI for this branch.
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

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the react router dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Navigate nested dashboard views with shareable search parameters.

## Guided exercise and independent challenge
Run the project and demonstrate nested routes and layout. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render React Router dashboard and drive its labeled controls using userEvent. Assert visible outcomes for nested routes and layout. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/intermediate/router-dashboard/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/intermediate/router-dashboard/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Why use the URL for the directory query?**

1. It replaces validation of route IDs
2. A bookmark can reproduce the filtered view
3. It makes the filter a secret

**Answer: 2.** A bookmark can reproduce the filtered view. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Why use the URL for the directory query?**
  A bookmark can reproduce the filtered view
- **Intermediate: Explain the execution of the react router dashboard example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying react router dashboard in a larger application?**
  Do not treat the react router dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects react-router, routing in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Shopping cart](../24-intermediate-projects/24-04-shopping-cart.md)

Next: [CRUD management interface](../24-intermediate-projects/24-06-crud-management-interface.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `vite` `hands-on` `portfolio-project` `mini-project` `react-router` `routing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
