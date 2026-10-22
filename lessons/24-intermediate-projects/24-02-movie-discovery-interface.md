# Movie discovery interface

> Chapter 24 · Intermediate Projects · intermediate · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Weather dashboard](../24-intermediate-projects/24-01-weather-dashboard.md)

## Why this concept exists
This project connects rendering, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Discover a fictional local movie catalog and keep a watchlist.

### Feature contract
Search and genre filter. Rating sort. Persistent watchlist.

### Architecture and folder structure
projects/intermediate/movie-discovery/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Movie discovery interface and drive its labeled controls using userEvent. Assert visible outcomes for search and genre filter. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/intermediate/movie-discovery/README.md).

```jsx
import { useState } from 'react';
import { useStored } from '../../shared/storage';
const movies = [
  { id: 'm1', title: 'Beyond the Compiler', genre: 'Adventure', rating: 8.2, year: 2025 },
  { id: 'm2', title: 'The Last Variable', genre: 'Mystery', rating: 7.9, year: 2024 },
  { id: 'm3', title: 'A Weekend in Dehradun', genre: 'Drama', rating: 8.4, year: 2026 },
  { id: 'm4', title: 'Debugging Tomorrow', genre: 'Adventure', rating: 7.5, year: 2023 },
  { id: 'm5', title: 'The Missing Semicolon', genre: 'Mystery', rating: 8.8, year: 2026 },
];
export default function App() {
  const [q, setQ] = useState('');
  const [genre, setGenre] = useState('');
  const [only, setOnly] = useState(false);
  const [saved, setSaved, error] = useStored(
    'rv-watchlist',
    [],
    (v) => Array.isArray(v) && v.every((x) => typeof x === 'string'),
  );
  const rows = movies
    .filter(
      (x) =>
        x.title.toLowerCase().includes(q.toLowerCase()) &&
        (!genre || x.genre === genre) &&
        (!only || saved.includes(x.id)),
```

## Expected output
Open projects/intermediate/movie-discovery/index.html using the root Vite server. The complete executable implementation is included at projects/intermediate/movie-discovery; its documented controls implement: Search and genre filter, Rating sort, Persistent watchlist.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 10: Defines a named operation; it runs when called or rendered.
- Line 11: Creates render state and its setter; the initial value is used on mount.
- Line 12: Creates render state and its setter; the initial value is used on mount.
- Line 13: Creates render state and its setter; the initial value is used on mount.
- Line 14: Defines the named binding from the expression on the right.
- Line 15: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 16: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 17: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 19: Defines the named binding from the expression on the right.
- Line 20: Keeps only records that satisfy the predicate.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the movie discovery interface as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Discover a fictional local movie catalog and keep a watchlist.

## Guided exercise and independent challenge
Run the project and demonstrate search and genre filter. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Movie discovery interface and drive its labeled controls using userEvent. Assert visible outcomes for search and genre filter. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/intermediate/movie-discovery/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/intermediate/movie-discovery/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**What should the watchlist persist?**

1. DOM element references
2. Stable movie IDs
3. The current filtered array indices

**Answer: 2.** Stable movie IDs. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: What should the watchlist persist?**
  Stable movie IDs
- **Intermediate: Explain the execution of the movie discovery interface example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying movie discovery interface in a larger application?**
  Do not treat the movie discovery interface as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

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
Previous: [Weather dashboard](../24-intermediate-projects/24-01-weather-dashboard.md)

Next: [Notes application](../24-intermediate-projects/24-03-notes-application.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `vite` `hands-on` `portfolio-project` `mini-project` `rendering` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
