# Render stable collections

> Chapter 07 · Lists and Conditional UI · beginner-plus · 21 minutes

## Learning objectives
- Explain and apply map and list rendering.
- Explain and apply stable keys.
- Explain and apply filtering and sorting.

## Prerequisites
[Lift, derive, preserve, and reset](../06-state-events/06-03-lift-derive-preserve-and-reset.md)

## Why this concept exists
Stable identity prevents subtle bugs when a list contains stateful rows.

## A useful analogy
A key is a student ID, not their seat number. Students can move seats without changing identity.

## Concepts, syntax, and terminology
### map and list rendering
Transform records into elements with map. Keep data objects separate from presentation and include a useful empty state.

### Stable keys
Use a persistent domain ID unique among siblings. Keys help React match items between renders; they are not passed as ordinary props.

### Filtering and sorting
Filter then sort a copied array. Never sort source state in place. Stable IDs preserve input state when items are reordered.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
const students = [{ id: 's2', name: 'Zoya' }, { id: 's1', name: 'Asha' }];
export default function App() {
  const sorted = [...students].sort((a, b) => a.name.localeCompare(b.name));
  return <ul>{sorted.map(student => <li key={student.id}>{student.name}</li>)}</ul>;
}
```

## Expected output
Asha followed by Zoya.

## Line-by-line walkthrough
- Line 1: Defines the named binding from the expression on the right.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Transforms each matching item into a new value or element.

## Internal behavior and data flow
Reconciliation matches siblings by key and type. Index keys represent position, so insertion can associate old state with a different record.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Incorrect: key={Math.random()} or changing array index for editable rows. Correct: use the saved record ID.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a filter for names containing a. Independently reorder editable rows and demonstrate why an ID key matters.

<details>
<summary>Hint</summary>

Filter then sort a copied array. Never sort source state in place. Stable IDs preserve input state when items are reordered.

</details>

## Exercise solution
```jsx
const students = [{ id: 'a', name: 'Asha' }, { id: 'b', name: 'Zoya' }];
export default function App() {
  return <ul>{students.filter(s => s.name.toLowerCase().includes('a'))
    .map(s => <li key={s.id}>{s.name}</li>)}</ul>;
}
```

Reconciliation matches siblings by key and type. Index keys represent position, so insertion can associate old state with a different record.

## Quiz
**Which key best survives sorting?**

1. A fresh random number
2. A persistent record ID
3. The current array index

**Answer: 2.** A persistent record ID. Reconciliation matches siblings by key and type. Index keys represent position, so insertion can associate old state with a different record.

## Interview questions
- **Basic: Which key best survives sorting?**
  A persistent record ID
- **Intermediate: Explain the execution of the render stable collections example.**
  Reconciliation matches siblings by key and type. Index keys represent position, so insertion can associate old state with a different record.
- **Advanced: What mistake or trade-off would you watch for when applying render stable collections in a larger application?**
  Incorrect: key={Math.random()} or changing array index for editable rows. Correct: use the saved record ID.

## Summary
Stable identity prevents subtle bugs when a list contains stateful rows. Reconciliation matches siblings by key and type. Index keys represent position, so insertion can associate old state with a different record.

## Revision checklist
- [ ] Explain and apply map and list rendering.
- [ ] Explain and apply stable keys.
- [ ] Explain and apply filtering and sorting.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Lift, derive, preserve, and reset](../06-state-events/06-03-lift-derive-preserve-and-reset.md)

Next: [Represent every data state](../07-lists-conditional-ui/07-02-represent-every-data-state.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `rendering` `state` `jsx` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
