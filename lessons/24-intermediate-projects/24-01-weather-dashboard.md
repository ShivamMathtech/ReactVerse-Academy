# Weather dashboard

> Chapter 24 · Intermediate Projects · intermediate · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Searchable student directory](../23-beginner-projects/23-07-searchable-student-directory.md)

## Why this concept exists
This project connects api-integration, useeffect, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Explore deterministic weather fixtures with realistic async states.

### Feature contract
City selection. Loading, empty, error and retry. Unit conversion.

### Architecture and folder structure
projects/intermediate/weather-dashboard/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Weather dashboard and drive its labeled controls using userEvent. Assert visible outcomes for city selection. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/intermediate/weather-dashboard/README.md).

```jsx
import { useEffect, useState } from 'react';
import { mockRequest } from '../../shared/api';
const weather = {
  Dehradun: { temp: 23, condition: 'Clear', humidity: 52 },
  Delhi: { temp: 29, condition: 'Hazy', humidity: 41 },
  Munnar: { temp: 18, condition: 'Cloudy', humidity: 78 },
};
export default function App() {
  const [city, setCity] = useState('Dehradun');
  const [mode, setMode] = useState('success');
  const [unit, setUnit] = useState('C');
  const [version, setVersion] = useState(0);
  const [result, setResult] = useState({ status: 'loading' });
  useEffect(() => {
    const c = new AbortController();
    setResult({ status: 'loading' });
    mockRequest([weather[city]], { signal: c.signal, mode })
      .then((data) => setResult({ status: 'success', data }))
      .catch((e) => {
        if (e.name !== 'AbortError') setResult({ status: 'error', message: e.message });
      });
    return () => c.abort();
  }, [city, mode, version]);
  return (
```

## Expected output
Open projects/intermediate/weather-dashboard/index.html using the root Vite server. The complete executable implementation is included at projects/intermediate/weather-dashboard; its documented controls implement: City selection, Loading, empty, error and retry, Unit conversion.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Defines a named operation; it runs when called or rendered.
- Line 9: Creates render state and its setter; the initial value is used on mount.
- Line 10: Creates render state and its setter; the initial value is used on mount.
- Line 11: Creates render state and its setter; the initial value is used on mount.
- Line 12: Creates render state and its setter; the initial value is used on mount.
- Line 13: Creates render state and its setter; the initial value is used on mount.
- Line 14: Registers external synchronization after commit.
- Line 15: Defines the named binding from the expression on the right.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 20: Chooses whether the guarded branch should run.
- Line 22: Returns cleanup to release the external resource.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Returns the value or UI for this branch.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the weather dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Explore deterministic weather fixtures with realistic async states.

## Guided exercise and independent challenge
Run the project and demonstrate city selection. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Weather dashboard and drive its labeled controls using userEvent. Assert visible outcomes for city selection. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/intermediate/weather-dashboard/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/intermediate/weather-dashboard/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**What should a canceled weather request do to the visible error state?**

1. It should not report a user-facing request failure
2. It must show a red error
3. It must clear all city options

**Answer: 1.** It should not report a user-facing request failure. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: What should a canceled weather request do to the visible error state?**
  It should not report a user-facing request failure
- **Intermediate: Explain the execution of the weather dashboard example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying weather dashboard in a larger application?**
  Do not treat the weather dashboard as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects api-integration, useeffect, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Searchable student directory](../23-beginner-projects/23-07-searchable-student-directory.md)

Next: [Movie discovery interface](../24-intermediate-projects/24-02-movie-discovery-interface.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `vite` `hands-on` `portfolio-project` `mini-project` `api-integration` `useeffect` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
