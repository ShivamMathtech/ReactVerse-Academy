# Accessible component library

> Chapter 25 · Advanced Projects · advanced · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Real-time UI simulation](../25-advanced-projects/25-05-real-time-ui-simulation.md)

## Why this concept exists
This project connects accessibility, components, testing in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Explore keyboard-operated tabs, a native modal, and disclosure patterns.

### Feature contract
Arrow-key tabs with roving focus. Native dialog and focus restoration. Disclosure and labeled switch.

### Architecture and folder structure
projects/advanced/component-library/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Accessible component library and drive its labeled controls using userEvent. Assert visible outcomes for arrow-key tabs with roving focus. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/advanced/component-library/README.md).

```jsx
import { useRef, useState } from 'react';
const panels = [
  ['Overview', 'A component contract includes behavior, names, and focus rules.'],
  ['Keyboard', 'Use Left/Right, Home, and End to move between these tabs.'],
  ['Testing', 'Verify the selected panel, keyboard interaction, and restored dialog focus.'],
];
export default function App() {
  const [tab, setTab] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const tabs = useRef([]);
  const dialog = useRef(null);
  const trigger = useRef(null);
  function move(e) {
    const next =
      e.key === 'ArrowRight'
        ? (tab + 1) % 3
        : e.key === 'ArrowLeft'
          ? (tab + 2) % 3
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? 2
              : null;
    if (next === null) return;
```

## Expected output
Open projects/advanced/component-library/index.html using the root Vite server. The complete executable implementation is included at projects/advanced/component-library; its documented controls implement: Arrow-key tabs with roving focus, Native dialog and focus restoration, Disclosure and labeled switch.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Defines a named operation; it runs when called or rendered.
- Line 8: Creates render state and its setter; the initial value is used on mount.
- Line 9: Creates render state and its setter; the initial value is used on mount.
- Line 10: Defines the named binding from the expression on the right.
- Line 11: Defines the named binding from the expression on the right.
- Line 12: Defines the named binding from the expression on the right.
- Line 13: Defines a named operation; it runs when called or rendered.
- Line 14: Defines the named binding from the expression on the right.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Chooses whether the guarded branch should run.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the accessible component library as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Explore keyboard-operated tabs, a native modal, and disclosure patterns.

## Guided exercise and independent challenge
Run the project and demonstrate arrow-key tabs with roving focus. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Accessible component library and drive its labeled controls using userEvent. Assert visible outcomes for arrow-key tabs with roving focus. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/advanced/component-library/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/advanced/component-library/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**After closing a dialog, where should focus usually return?**

1. To the control that opened it
2. To an arbitrary hidden field
3. Nowhere

**Answer: 1.** To the control that opened it. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: After closing a dialog, where should focus usually return?**
  To the control that opened it
- **Intermediate: Explain the execution of the accessible component library example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying accessible component library in a larger application?**
  Do not treat the accessible component library as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects accessibility, components, testing in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Real-time UI simulation](../25-advanced-projects/25-05-real-time-ui-simulation.md)

Next: [Production-style SaaS dashboard](../25-advanced-projects/25-07-production-style-saas-dashboard.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `vite` `hands-on` `portfolio-project` `mini-project` `accessibility` `components` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
