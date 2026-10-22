# Registration system

> Chapter 24 · Intermediate Projects · intermediate · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Paginated data explorer](../24-intermediate-projects/24-07-paginated-data-explorer.md)

## Why this concept exists
This project connects forms, accessibility, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Complete a two-step locally simulated enrollment with accessible validation.

### Feature contract
Field-level validation and focus. Review and back navigation. Local submission confirmation.

### Architecture and folder structure
projects/intermediate/registration-form/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Registration system and drive its labeled controls using userEvent. Assert visible outcomes for field-level validation and focus. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/intermediate/registration-form/README.md).

```jsx
import { useRef, useState } from 'react';
export function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Enter a valid email address.';
  if (!values.consent) errors.consent = 'Confirm this is a practice submission.';
  return errors;
}
export default function App() {
  const [values, setValues] = useState({ name: '', email: '', track: 'React', consent: false });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);
  const form = useRef(null);
  function submit(e) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) {
      form.current.elements.namedItem(Object.keys(next)[0])?.focus();
      return;
    }
    setStep(1);
  }
```

## Expected output
Open projects/intermediate/registration-form/index.html using the root Vite server. The complete executable implementation is included at projects/intermediate/registration-form; its documented controls implement: Field-level validation and focus, Review and back navigation, Local submission confirmation.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Chooses whether the guarded branch should run.
- Line 5: Chooses whether the guarded branch should run.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Chooses whether the guarded branch should run.
- Line 8: Returns the value or UI for this branch.
- Line 10: Defines a named operation; it runs when called or rendered.
- Line 11: Creates render state and its setter; the initial value is used on mount.
- Line 12: Creates render state and its setter; the initial value is used on mount.
- Line 13: Creates render state and its setter; the initial value is used on mount.
- Line 14: Defines the named binding from the expression on the right.
- Line 15: Defines a named operation; it runs when called or rendered.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Defines the named binding from the expression on the right.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Chooses whether the guarded branch should run.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the registration system as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Complete a two-step locally simulated enrollment with accessible validation.

## Guided exercise and independent challenge
Run the project and demonstrate field-level validation and focus. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Registration system and drive its labeled controls using userEvent. Assert visible outcomes for field-level validation and focus. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/intermediate/registration-form/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/intermediate/registration-form/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Where should form values live across review and back navigation?**

1. In the button text
2. In the persistent parent state
3. Only in the unmounted field DOM

**Answer: 2.** In the persistent parent state. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Where should form values live across review and back navigation?**
  In the persistent parent state
- **Intermediate: Explain the execution of the registration system example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying registration system in a larger application?**
  Do not treat the registration system as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects forms, accessibility, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Paginated data explorer](../24-intermediate-projects/24-07-paginated-data-explorer.md)

Next: [Admin analytics dashboard](../25-advanced-projects/25-01-admin-analytics-dashboard.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `vite` `hands-on` `portfolio-project` `mini-project` `forms` `accessibility` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
