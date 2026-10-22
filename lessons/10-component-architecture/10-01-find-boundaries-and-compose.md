# Find boundaries and compose

> Chapter 10 · Component Architecture · intermediate · 21 minutes

## Learning objectives
- Explain and apply component boundaries.
- Explain and apply composition over duplication.
- Explain and apply presentational and state-owning components.

## Prerequisites
[Extract and test custom Hooks](../09-hooks/09-03-extract-and-test-custom-hooks.md)

## Why this concept exists
A focused boundary reduces the number of reasons a component needs to change.

## A useful analogy
Good component boundaries resemble departments with clear responsibilities and small, explicit handoffs.

## Concepts, syntax, and terminology
### Component boundaries
Split by responsibility, repeated behavior, or independently meaningful UI. Do not create a component solely because a file exceeds an arbitrary line count.

### Composition over duplication
Extract repeated structure while keeping variable content explicit. Similar-looking components with different behavior do not always need one giant abstraction.

### Presentational and state-owning components
A state owner coordinates data and operations; a presentational component receives a useful interface. This is a flexible design lens, not a rule forbidding state in UI components.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
function EmptyState({ title, action }) {
  return <section><h2>{title}</h2>{action}</section>;
}
export default function App() {
  return <EmptyState title="No notes yet" action={<a href="#new">Create your first note</a>} />;
}
```

## Expected output
A meaningful empty state with caller-provided action.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
Props describe a contract between components. Composition can keep state near its owner and avoid making a generic wrapper depend on domain-specific stores.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not build a UniversalCard with dozens of unrelated flags. Prefer composition when content varies independently.

## Practical use case
Use this concept when building interactive profile card. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Design an error panel accepting title, message, and action. Independently identify one boundary in the notes project that owns persistence.

<details>
<summary>Hint</summary>

A state owner coordinates data and operations; a presentational component receives a useful interface. This is a flexible design lens, not a rule forbidding state in UI components.

</details>

## Exercise solution
```jsx
function Notice({ title, children, action }) {
  return <section><h2>{title}</h2><div>{children}</div>{action}</section>;
}
export default function App() { return <Notice title="Offline" action={<button onClick={() => location.reload()}>Retry</button>}>Check your connection.</Notice>; }
```

Props describe a contract between components. Composition can keep state near its owner and avoid making a generic wrapper depend on domain-specific stores.

## Quiz
**What is a useful reason to extract a component?**

1. To hide all data flow
2. A cohesive responsibility
3. Every three JSX lines

**Answer: 2.** A cohesive responsibility. Props describe a contract between components. Composition can keep state near its owner and avoid making a generic wrapper depend on domain-specific stores.

## Interview questions
- **Basic: What is a useful reason to extract a component?**
  A cohesive responsibility
- **Intermediate: Explain the execution of the find boundaries and compose example.**
  Props describe a contract between components. Composition can keep state near its owner and avoid making a generic wrapper depend on domain-specific stores.
- **Advanced: What mistake or trade-off would you watch for when applying find boundaries and compose in a larger application?**
  Do not build a UniversalCard with dozens of unrelated flags. Prefer composition when content varies independently.

## Summary
A focused boundary reduces the number of reasons a component needs to change. Props describe a contract between components. Composition can keep state near its owner and avoid making a generic wrapper depend on domain-specific stores.

## Revision checklist
- [ ] Explain and apply component boundaries.
- [ ] Explain and apply composition over duplication.
- [ ] Explain and apply presentational and state-owning components.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Extract and test custom Hooks](../09-hooks/09-03-extract-and-test-custom-hooks.md)

Next: [Design controlled component APIs](../10-component-architecture/10-02-design-controlled-component-apis.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `components` `props` `industry-practices` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
