# Pass and destructure props

> Chapter 05 · Props and Data Flow · beginner · 21 minutes

## Learning objectives
- Explain and apply what props are.
- Explain and apply passing values.
- Explain and apply destructuring props and default values.

## Prerequisites
[Conditions and styles](../04-jsx-components/04-03-conditions-and-styles.md)

## Why this concept exists
Props make one implementation useful for many records without copying markup.

## A useful analogy
Props are a delivery envelope from a parent; the receiving component reads it without rewriting its contents.

## Concepts, syntax, and terminology
### What props are
Props are the inputs a parent supplies to a component. They can include strings, numbers, arrays, objects, and functions. Treat them as read-only snapshots.

### Passing values
Quoted attributes pass strings. Curly braces pass JavaScript values, so count={3} is numeric while count="3" is a string.

### Destructuring props and default values
Destructure in the parameter list for a clear API. A default parameter is used for undefined or missing values, not null.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
function Score({ name, points = 0 }) {
  return <p>{name}: {points}</p>;
}
export default function App() {
  return <><Score name="Maya" points={9} /><Score name="Arun" /></>;
}
```

## Expected output
Maya: 9 and Arun: 0

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
Each parent render computes child props. Updating a parent value supplies a new snapshot; the child must not mutate its input object.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Incorrect: props.points++. Correct: request a change through a callback or let the owning component update state.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Pass an array of skills to a Profile component. Independently distinguish an omitted points prop from points={null}.

<details>
<summary>Hint</summary>

Destructure in the parameter list for a clear API. A default parameter is used for undefined or missing values, not null.

</details>

## Exercise solution
```jsx
function Profile({ skills = [] }) { return <p>{skills.join(', ')}</p>; }
export default function App() { return <Profile skills={['HTML', 'React']} />; }
```

Each parent render computes child props. Updating a parent value supplies a new snapshot; the child must not mutate its input object.

## Quiz
**When does points = 0 apply?**

1. When points is null
2. For every falsy value
3. When points is undefined

**Answer: 3.** When points is undefined. Each parent render computes child props. Updating a parent value supplies a new snapshot; the child must not mutate its input object.

## Interview questions
- **Basic: When does points = 0 apply?**
  When points is undefined
- **Intermediate: Explain the execution of the pass and destructure props example.**
  Each parent render computes child props. Updating a parent value supplies a new snapshot; the child must not mutate its input object.
- **Advanced: What mistake or trade-off would you watch for when applying pass and destructure props in a larger application?**
  Incorrect: props.points++. Correct: request a change through a callback or let the owning component update state.

## Summary
Props make one implementation useful for many records without copying markup. Each parent render computes child props. Updating a parent value supplies a new snapshot; the child must not mutate its input object.

## Revision checklist
- [ ] Explain and apply what props are.
- [ ] Explain and apply passing values.
- [ ] Explain and apply destructuring props and default values.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Conditions and styles](../04-jsx-components/04-03-conditions-and-styles.md)

Next: [Use children for flexible composition](../05-props-data-flow/05-02-use-children-for-flexible-composition.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `props` `components` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
