# Use children for flexible composition

> Chapter 05 · Props and Data Flow · beginner · 21 minutes

## Learning objectives
- Explain and apply children and composition.
- Explain and apply reusable component design.
- Explain and apply one-way data flow.

## Prerequisites
[Pass and destructure props](../05-props-data-flow/05-01-pass-and-destructure-props.md)

## Why this concept exists
Composition avoids duplicating wrappers while preserving flexibility for their contents.

## A useful analogy
Props are a delivery envelope from a parent; the receiving component reads it without rewriting its contents.

## Concepts, syntax, and terminology
### Children and composition
The children prop contains nested JSX. A layout component can provide structure without knowing which content it wraps.

### Reusable component design
Expose the few inputs callers need. Use meaningful names like title and onSave rather than many unrelated boolean switches. Keep domain rules outside generic visual wrappers.

### One-way data flow
Data travels down; callbacks communicate an intent upward. The parent decides whether and how to change shared data.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
function Panel({ title, children }) {
  return <section><h2>{title}</h2><div>{children}</div></section>;
}
export default function App() {
  return <Panel title="Today"><p>Practice composition.</p></Panel>;
}
```

## Expected output
A titled panel containing the supplied paragraph.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
children is an ordinary prop with renderable values. Wrapping content does not require cloning or mutating child elements.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not inspect child component internals to decide layout. Prefer explicit props and slots such as children.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a footer prop to Panel. Independently compose a confirmation panel with a button callback.

<details>
<summary>Hint</summary>

Data travels down; callbacks communicate an intent upward. The parent decides whether and how to change shared data.

</details>

## Exercise solution
```jsx
function Panel({ title, children, footer }) {
  return <section><h2>{title}</h2>{children}<footer>{footer}</footer></section>;
}
export default function App() {
  return <Panel title="Draft" footer={<small>Saved locally</small>}><p>My notes</p></Panel>;
}
```

children is an ordinary prop with renderable values. Wrapping content does not require cloning or mutating child elements.

## Quiz
**What is children?**

1. A prop containing nested content
2. A global DOM query
3. A private state store

**Answer: 1.** A prop containing nested content. children is an ordinary prop with renderable values. Wrapping content does not require cloning or mutating child elements.

## Interview questions
- **Basic: What is children?**
  A prop containing nested content
- **Intermediate: Explain the execution of the use children for flexible composition example.**
  children is an ordinary prop with renderable values. Wrapping content does not require cloning or mutating child elements.
- **Advanced: What mistake or trade-off would you watch for when applying use children for flexible composition in a larger application?**
  Do not inspect child component internals to decide layout. Prefer explicit props and slots such as children.

## Summary
Composition avoids duplicating wrappers while preserving flexibility for their contents. children is an ordinary prop with renderable values. Wrapping content does not require cloning or mutating child elements.

## Revision checklist
- [ ] Explain and apply children and composition.
- [ ] Explain and apply reusable component design.
- [ ] Explain and apply one-way data flow.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Pass and destructure props](../05-props-data-flow/05-01-pass-and-destructure-props.md)

Next: [Choose an owner for changing data](../05-props-data-flow/05-03-choose-an-owner-for-changing-data.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `props` `components` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
