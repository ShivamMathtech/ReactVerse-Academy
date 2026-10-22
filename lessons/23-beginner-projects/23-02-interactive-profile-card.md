# Interactive profile card

> Chapter 23 · Beginner Projects · beginner · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Counter application](../23-beginner-projects/23-01-counter-application.md)

## Why this concept exists
This project connects props, state, forms in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Edit a profile preview through controlled inputs.

### Feature contract
Live name and biography. Availability toggle. Reset profile.

### Architecture and folder structure
projects/beginner/profile-card/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Interactive profile card and drive its labeled controls using userEvent. Assert visible outcomes for live name and biography. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/beginner/profile-card/README.md).

```jsx
import { useState } from 'react';
const initial = {
  name: 'Maya Patel',
  role: 'Frontend learner',
  bio: 'Building useful things, one component at a time.',
  available: true,
};
export default function App() {
  const [profile, setProfile] = useState(initial);
  return (
    <div className="grid">
      <form className="panel" onSubmit={(e) => e.preventDefault()}>
        {['name', 'role', 'bio'].map((key) => (
          <label key={key}>
            {key}
            <input
              value={profile[key]}
              maxLength={key === 'bio' ? 160 : 60}
              onChange={(e) => setProfile((p) => ({ ...p, [key]: e.target.value }))}
            />
          </label>
        ))}
        <label>
          <input
```

## Expected output
Open projects/beginner/profile-card/index.html using the root Vite server. The complete executable implementation is included at projects/beginner/profile-card; its documented controls implement: Live name and biography, Availability toggle, Reset profile.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Defines a named operation; it runs when called or rendered.
- Line 9: Creates render state and its setter; the initial value is used on mount.
- Line 10: Returns the value or UI for this branch.
- Line 11: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Transforms each matching item into a new value or element.
- Line 14: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Connects a user interaction to the handler shown.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the interactive profile card as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Edit a profile preview through controlled inputs.

## Guided exercise and independent challenge
Run the project and demonstrate live name and biography. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Interactive profile card and drive its labeled controls using userEvent. Assert visible outcomes for live name and biography. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/beginner/profile-card/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/beginner/profile-card/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Which value is the source of truth for the profile preview?**

1. The parent profile state
2. The CSS color
3. A second hidden copy in the preview

**Answer: 1.** The parent profile state. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Which value is the source of truth for the profile preview?**
  The parent profile state
- **Intermediate: Explain the execution of the interactive profile card example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying interactive profile card in a larger application?**
  Do not treat the interactive profile card as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects props, state, forms in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Counter application](../23-beginner-projects/23-01-counter-application.md)

Next: [Digital clock](../23-beginner-projects/23-03-digital-clock.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `hands-on` `portfolio-project` `mini-project` `props` `state` `forms` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
