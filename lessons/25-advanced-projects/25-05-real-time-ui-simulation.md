# Real-time UI simulation

> Chapter 25 · Advanced Projects · advanced · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Project management board](../25-advanced-projects/25-04-project-management-board.md)

## Why this concept exists
This project connects useeffect, hooks, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Inspect a local event stream with pause, filtering, and cleanup.

### Feature contract
Timed event generation. Pause/resume and clear. Stream filter and bounded history.

### Architecture and folder structure
projects/advanced/realtime-simulation/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Real-time UI simulation and drive its labeled controls using userEvent. Assert visible outcomes for timed event generation. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/advanced/realtime-simulation/README.md).

```jsx
import { useEffect, useRef, useState } from 'react';
export default function App() {
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const seq = useRef(0);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const n = ++seq.current;
      const event = {
        id: n,
        time: new Date().toLocaleTimeString(),
        type: n % 3 === 0 ? 'warning' : 'info',
        text: n % 3 === 0 ? 'Simulated queue delay' : 'Simulated lesson activity',
      };
      setEvents((a) => [event, ...a].slice(0, 50));
    }, 1200);
    return () => clearInterval(id);
  }, [running]);
  return (
    <section className="panel">
      <p className="notice">Local timer simulation. No WebSocket or live users are connected.</p>
      <div className="row">
```

## Expected output
Open projects/advanced/realtime-simulation/index.html using the root Vite server. The complete executable implementation is included at projects/advanced/realtime-simulation; its documented controls implement: Timed event generation, Pause/resume and clear, Stream filter and bounded history.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Creates render state and its setter; the initial value is used on mount.
- Line 5: Creates render state and its setter; the initial value is used on mount.
- Line 6: Defines the named binding from the expression on the right.
- Line 7: Registers external synchronization after commit.
- Line 8: Chooses whether the guarded branch should run.
- Line 9: Defines the named binding from the expression on the right.
- Line 10: Defines the named binding from the expression on the right.
- Line 11: Defines the named binding from the expression on the right.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Returns cleanup to release the external resource.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Returns the value or UI for this branch.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the real-time ui simulation as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Inspect a local event stream with pause, filtering, and cleanup.

## Guided exercise and independent challenge
Run the project and demonstrate timed event generation. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Real-time UI simulation and drive its labeled controls using userEvent. Assert visible outcomes for timed event generation. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/advanced/realtime-simulation/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/advanced/realtime-simulation/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**What produces events in this project?**

1. A live WebSocket server
2. Real learner activity
3. A local timer explicitly labeled as simulation

**Answer: 3.** A local timer explicitly labeled as simulation. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: What produces events in this project?**
  A local timer explicitly labeled as simulation
- **Intermediate: Explain the execution of the real-time ui simulation example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying real-time ui simulation in a larger application?**
  Do not treat the real-time ui simulation as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects useeffect, hooks, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Project management board](../25-advanced-projects/25-04-project-management-board.md)

Next: [Accessible component library](../25-advanced-projects/25-06-accessible-component-library.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `vite` `hands-on` `portfolio-project` `mini-project` `useeffect` `hooks` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
