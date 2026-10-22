# Think in user interfaces

> Chapter 00 · Course Introduction · beginner · 21 minutes

## Learning objectives
- Explain and apply what react is and what it solves.
- Explain and apply react versus vanilla javascript.
- Explain and apply react versus react native.

## Prerequisites
No prior React experience. A browser, text editor, and curiosity are enough to begin.

## Why this concept exists
A declarative view makes changing data easier to follow than scattered DOM mutations.

## A useful analogy
A component is a reusable recipe; props are its ingredients and state is the changing order ticket.

## Concepts, syntax, and terminology
### What React is and what it solves
React describes a view from data. You compose functions that return UI instead of manually coordinating many DOM edits. It is a library, so you still choose routing and data tools.

### React versus vanilla JavaScript
Both run JavaScript. Vanilla code can update textContent directly; React owns the DOM under its root and reconciles component output. A tiny static page may not need React.

### React versus React Native
React DOM renders browser elements such as button. React Native uses native platform primitives such as View. Component thinking transfers; markup and platform APIs do not.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
export default function App() {
  const learner = 'Shivam';
  return <h1>Hello, {learner}!</h1>;
}
```

## Expected output
Hello, Shivam!

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Returns the value or UI for this branch.

## Internal behavior and data flow
React calls App to calculate an element description. React DOM creates or updates the matching browser nodes. Rendering is not the same as changing every DOM node.



## Common mistakes: incorrect versus correct
Do not write document.querySelector(...).textContent inside render for a node React owns. Return the desired text in JSX instead.

## Practical use case
Use this concept when building a maintainable learning interface. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Change the name, then add a paragraph showing your learning goal. Independently add a reusable greeting for two learners.

<details>
<summary>Hint</summary>

React DOM renders browser elements such as button. React Native uses native platform primitives such as View. Component thinking transfers; markup and platform APIs do not.

</details>

## Exercise solution
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
export default function App() {
  return <><Greeting name="Shivam" /><p>Build useful interfaces.</p></>;
}
```

React calls App to calculate an element description. React DOM creates or updates the matching browser nodes. Rendering is not the same as changing every DOM node.

## Quiz
**What does React primarily help you describe?**

1. A user interface from data
2. A database schema
3. A native operating system

**Answer: 1.** A user interface from data. React calls App to calculate an element description. React DOM creates or updates the matching browser nodes. Rendering is not the same as changing every DOM node.

## Interview questions
- **Basic: What does React primarily help you describe?**
  A user interface from data
- **Intermediate: Explain the execution of the think in user interfaces example.**
  React calls App to calculate an element description. React DOM creates or updates the matching browser nodes. Rendering is not the same as changing every DOM node.
- **Advanced: What mistake or trade-off would you watch for when applying think in user interfaces in a larger application?**
  Do not write document.querySelector(...).textContent inside render for a node React owns. Return the desired text in JSX instead.

## Summary
A declarative view makes changing data easier to follow than scattered DOM mutations. React calls App to calculate an element description. React DOM creates or updates the matching browser nodes. Rendering is not the same as changing every DOM node.

## Revision checklist
- [ ] Explain and apply what react is and what it solves.
- [ ] Explain and apply react versus vanilla javascript.
- [ ] Explain and apply react versus react native.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: Start of course

Next: [Understand the toolchain](../00-getting-started/00-02-understand-the-toolchain.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `javascript` `frontend-fundamentals` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
