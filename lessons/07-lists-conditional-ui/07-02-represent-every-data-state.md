# Represent every data state

> Chapter 07 · Lists and Conditional UI · beginner-plus · 21 minutes

## Learning objectives
- Explain and apply empty states.
- Explain and apply loading and error states.
- Explain and apply conditional expressions.

## Prerequisites
[Render stable collections](../07-lists-conditional-ui/07-01-render-stable-collections.md)

## Why this concept exists
Explicit states prevent blank screens and ambiguous failure.

## A useful analogy
A key is a student ID, not their seat number. Students can move seats without changing identity.

## Concepts, syntax, and terminology
### Empty states
Explain why no items appear and offer a next action. Distinguish an empty dataset from a search with no matches.

### Loading and error states
Model loading, success, and failure explicitly. Show a retry when a failed read can be repeated safely. Announce changing status without repeatedly interrupting users.

### Conditional expressions
Prefer clear early returns for major state branches. Nested ternaries become hard to audit; split meaningful branches into components.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
function Results({ status, items }) {
  if (status === 'loading') return <p role="status">Loading…</p>;
  if (status === 'error') return <p role="alert">Could not load students.</p>;
  if (!items.length) return <p>No students match your search.</p>;
  return <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>;
}
export default function App() { return <Results status="success" items={[]} />; }
```

## Expected output
No students match your search.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 3: Returns the value or UI for this branch.
- Line 4: Returns the value or UI for this branch.
- Line 5: Transforms each matching item into a new value or element.
- Line 7: Returns the value or UI for this branch.

## Internal behavior and data flow
Only one branch returns for each state. A status variable makes contradictory combinations less likely than several independent booleans.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not display No results while a request is still loading. Check pending and error conditions before empty data.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Render each branch using fixed props. Independently add a retry callback visible only on error.

<details>
<summary>Hint</summary>

Prefer clear early returns for major state branches. Nested ternaries become hard to audit; split meaningful branches into components.

</details>

## Exercise solution
```jsx
function ErrorNotice({ onRetry }) {
  return <div><p role="alert">Loading failed.</p><button onClick={onRetry}>Retry</button></div>;
}
export default function App() { return <ErrorNotice onRetry={() => window.location.reload()} />; }
```

Only one branch returns for each state. A status variable makes contradictory combinations less likely than several independent booleans.

## Quiz
**When should an empty state appear?**

1. Before every request
2. Instead of every error
3. After a successful read with no matching records

**Answer: 3.** After a successful read with no matching records. Only one branch returns for each state. A status variable makes contradictory combinations less likely than several independent booleans.

## Interview questions
- **Basic: When should an empty state appear?**
  After a successful read with no matching records
- **Intermediate: Explain the execution of the represent every data state example.**
  Only one branch returns for each state. A status variable makes contradictory combinations less likely than several independent booleans.
- **Advanced: What mistake or trade-off would you watch for when applying represent every data state in a larger application?**
  Do not display No results while a request is still loading. Check pending and error conditions before empty data.

## Summary
Explicit states prevent blank screens and ambiguous failure. Only one branch returns for each state. A status variable makes contradictory combinations less likely than several independent booleans.

## Revision checklist
- [ ] Explain and apply empty states.
- [ ] Explain and apply loading and error states.
- [ ] Explain and apply conditional expressions.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Render stable collections](../07-lists-conditional-ui/07-01-render-stable-collections.md)

Next: [Search and paginate derived views](../07-lists-conditional-ui/07-03-search-and-paginate-derived-views.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `rendering` `state` `jsx` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
