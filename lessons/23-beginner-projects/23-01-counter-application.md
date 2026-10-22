# Counter application

> Chapter 23 · Beginner Projects · beginner · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Refactor and reason about systems](../22-industry-architecture/22-03-refactor-and-reason-about-systems.md)

## Why this concept exists
This project connects state, events in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Control a counter with a configurable step and explicit reset.

### Feature contract
Increment and decrement. Step validation. Reset.

### Architecture and folder structure
projects/beginner/counter/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Counter application and drive its labeled controls using userEvent. Assert visible outcomes for increment and decrement. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/beginner/counter/README.md).

```jsx
import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState('1');
  const amount = Number(step);
  const valid = Number.isInteger(amount) && amount > 0 && amount <= 100;
  return (
    <section className="panel">
      <label>
        Step
        <input
          type="number"
          min="1"
          max="100"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </label>
      {!valid && <p role="alert">Use a whole step from 1 to 100.</p>}
      <p className="huge" aria-live="polite">
        {count}
      </p>
      <div className="row">
        <button disabled={!valid} onClick={() => setCount((n) => n - amount)}>
```

## Expected output
Open projects/beginner/counter/index.html using the root Vite server. The complete executable implementation is included at projects/beginner/counter; its documented controls implement: Increment and decrement, Step validation, Reset.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Creates render state and its setter; the initial value is used on mount.
- Line 5: Defines the named binding from the expression on the right.
- Line 6: Defines the named binding from the expression on the right.
- Line 7: Returns the value or UI for this branch.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 11: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 16: Connects a user interaction to the handler shown.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Connects a user interaction to the handler shown.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the counter application as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Control a counter with a configurable step and explicit reset.

## Guided exercise and independent challenge
Run the project and demonstrate increment and decrement. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Counter application and drive its labeled controls using userEvent. Assert visible outcomes for increment and decrement. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/beginner/counter/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/beginner/counter/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Why is a functional updater useful for incrementing this counter?**

1. It modifies the DOM directly
2. It disables batching
3. It calculates from the pending previous count

**Answer: 3.** It calculates from the pending previous count. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Why is a functional updater useful for incrementing this counter?**
  It calculates from the pending previous count
- **Intermediate: Explain the execution of the counter application example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying counter application in a larger application?**
  Do not treat the counter application as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects state, events in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Refactor and reason about systems](../22-industry-architecture/22-03-refactor-and-reason-about-systems.md)

Next: [Interactive profile card](../23-beginner-projects/23-02-interactive-profile-card.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `hands-on` `portfolio-project` `mini-project` `state` `events` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
