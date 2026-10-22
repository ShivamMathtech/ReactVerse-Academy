# Conditions and styles

> Chapter 04 · JSX and Components · beginner · 21 minutes

## Learning objectives
- Explain and apply conditional rendering.
- Explain and apply styling components.
- Explain and apply common jsx errors.

## Prerequisites
[Compose function components](../04-jsx-components/04-02-compose-function-components.md)

## Why this concept exists
A view must explain absent data as clearly as available data.

## A useful analogy
JSX is a recipe for a tree of UI elements, not a string of HTML.

## Concepts, syntax, and terminology
### Conditional rendering
Return different UI for different data. Use if for branches and a ternary for two inline alternatives. Render null to show nothing.

### Styling components
Plain CSS suits shared tokens and layout; CSS Modules scope class names per imported module. Inline objects suit computed values, not every style rule.

### Common JSX errors
Adjacent siblings need a wrapper; missing return yields no UI; numeric 0 on the left of && renders 0. Prefer count > 0 && ... for numeric counts.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
export default function App() {
  const count = 0;
  return <section>
    {count > 0 ? <p>{count} lessons ready</p> : <p>No lessons yet</p>}
  </section>;
}
```

## Expected output
No lessons yet

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Returns the value or UI for this branch.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
false, null, and undefined render no text. The number 0 is a valid text value, so 0 && <Panel /> leaves a visible zero.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Incorrect: count && <List /> when count may be zero. Correct: count > 0 && <List /> or a ternary with an empty state.

## Practical use case
Use this concept when building todo application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Change count to 2 and explain the branch. Independently handle loading, error, and ready values with early returns.

<details>
<summary>Hint</summary>

Adjacent siblings need a wrapper; missing return yields no UI; numeric 0 on the left of && renders 0. Prefer count > 0 && ... for numeric counts.

</details>

## Exercise solution
```jsx
export default function App() {
  const status = 'loading';
  if (status === 'loading') return <p role="status">Loading lessons…</p>;
  if (status === 'error') return <p role="alert">Could not load lessons.</p>;
  return <p>Ready</p>;
}
```

false, null, and undefined render no text. The number 0 is a valid text value, so 0 && <Panel /> leaves a visible zero.

## Quiz
**What can appear from 0 && <p>Items</p>?**

1. 0
2. Nothing, always
3. The paragraph

**Answer: 1.** 0. false, null, and undefined render no text. The number 0 is a valid text value, so 0 && <Panel /> leaves a visible zero.

## Interview questions
- **Basic: What can appear from 0 && <p>Items</p>?**
  0
- **Intermediate: Explain the execution of the conditions and styles example.**
  false, null, and undefined render no text. The number 0 is a valid text value, so 0 && <Panel /> leaves a visible zero.
- **Advanced: What mistake or trade-off would you watch for when applying conditions and styles in a larger application?**
  Incorrect: count && <List /> when count may be zero. Correct: count > 0 && <List /> or a ternary with an empty state.

## Summary
A view must explain absent data as clearly as available data. false, null, and undefined render no text. The number 0 is a valid text value, so 0 && <Panel /> leaves a visible zero.

## Revision checklist
- [ ] Explain and apply conditional rendering.
- [ ] Explain and apply styling components.
- [ ] Explain and apply common jsx errors.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Compose function components](../04-jsx-components/04-02-compose-function-components.md)

Next: [Pass and destructure props](../05-props-data-flow/05-01-pass-and-destructure-props.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `jsx` `components` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
