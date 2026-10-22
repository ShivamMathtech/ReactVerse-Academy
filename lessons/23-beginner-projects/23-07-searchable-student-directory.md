# Searchable student directory

> Chapter 23 · Beginner Projects · beginner · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Expense tracker](../23-beginner-projects/23-06-expense-tracker.md)

## Why this concept exists
This project connects rendering, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Search, filter, and sort a local student dataset.

### Feature contract
Case-insensitive search. Track filter. Name and score sorting.

### Architecture and folder structure
projects/beginner/student-directory/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Searchable student directory and drive its labeled controls using userEvent. Assert visible outcomes for case-insensitive search. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/beginner/student-directory/README.md).

```jsx
import { useState } from 'react';
import { students } from '../../shared/api';
export default function App() {
  const [q, setQ] = useState('');
  const [track, setTrack] = useState('');
  const [sort, setSort] = useState('name');
  const rows = students
    .filter((x) => x.name.toLowerCase().includes(q.toLowerCase()) && (!track || x.track === track))
    .sort((a, b) => (sort === 'name' ? a.name.localeCompare(b.name) : b.score - a.score));
  return (
    <>
      <div className="panel row">
        <label>
          Search students
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <label>
          Track
          <select value={track} onChange={(e) => setTrack(e.target.value)}>
            <option value="">All tracks</option>
            {['React', 'JavaScript', 'TypeScript'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
```

## Expected output
Open projects/beginner/student-directory/index.html using the root Vite server. The complete executable implementation is included at projects/beginner/student-directory; its documented controls implement: Case-insensitive search, Track filter, Name and score sorting.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Creates render state and its setter; the initial value is used on mount.
- Line 5: Creates render state and its setter; the initial value is used on mount.
- Line 6: Creates render state and its setter; the initial value is used on mount.
- Line 7: Defines the named binding from the expression on the right.
- Line 8: Keeps only records that satisfy the predicate.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Returns the value or UI for this branch.
- Line 11: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 15: Connects a user interaction to the handler shown.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 18: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Connects a user interaction to the handler shown.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Transforms each matching item into a new value or element.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the searchable student directory as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Search, filter, and sort a local student dataset.

## Guided exercise and independent challenge
Run the project and demonstrate case-insensitive search. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Searchable student directory and drive its labeled controls using userEvent. Assert visible outcomes for case-insensitive search. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/beginner/student-directory/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/beginner/student-directory/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**When should the directory filter its dataset?**

1. By mutating each source name
2. Only after deleting unmatched records
3. Before rendering the matching view

**Answer: 3.** Before rendering the matching view. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: When should the directory filter its dataset?**
  Before rendering the matching view
- **Intermediate: Explain the execution of the searchable student directory example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying searchable student directory in a larger application?**
  Do not treat the searchable student directory as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects rendering, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Expense tracker](../23-beginner-projects/23-06-expense-tracker.md)

Next: [Weather dashboard](../24-intermediate-projects/24-01-weather-dashboard.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `hands-on` `portfolio-project` `mini-project` `rendering` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
