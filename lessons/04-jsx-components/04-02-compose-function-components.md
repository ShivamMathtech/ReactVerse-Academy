# Compose function components

> Chapter 04 · JSX and Components · beginner · 21 minutes

## Learning objectives
- Explain and apply component naming.
- Explain and apply functional components.
- Explain and apply component composition and fragment syntax.

## Prerequisites
[Write JSX expressions](../04-jsx-components/04-01-write-jsx-expressions.md)

## Why this concept exists
Small named components let you reason about one responsibility and reuse it.

## A useful analogy
JSX is a recipe for a tree of UI elements, not a string of HTML.

## Concepts, syntax, and terminology
### Component naming
Custom component names start with a capital letter. Lowercase names refer to browser elements. Name components for their domain responsibility.

### Functional components
A component is a function returning renderable output. Define it at module scope so its identity remains stable. Do not call Hooks from ordinary utility functions.

### Component composition and Fragment syntax
Combine components as children to form larger views. A Fragment groups siblings without adding a wrapper DOM element.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
function LessonBadge() { return <strong>Beginner</strong>; }
function LessonCard() {
  return <article><h2>JSX</h2><LessonBadge /></article>;
}
export default function App() {
  return <><h1>Lessons</h1><LessonCard /></>;
}
```

## Expected output
A Lessons heading followed by one JSX lesson card and Beginner badge.

## Line-by-line walkthrough
- Line 1: Returns the value or UI for this branch.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Returns the value or UI for this branch.
- Line 5: Defines a named operation; it runs when called or rendered.
- Line 6: Returns the value or UI for this branch.

## Internal behavior and data flow
React uses element type and position to identify components. Defining a component inside another creates a new function identity on each render.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Avoid defining LessonCard inside App when it needs stable state. Move its definition to module scope.

## Practical use case
Use this concept when building todo application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Extract a Footer component and render it after the card. Independently compose a header from a logo and navigation.

<details>
<summary>Hint</summary>

Combine components as children to form larger views. A Fragment groups siblings without adding a wrapper DOM element.

</details>

## Exercise solution
```jsx
function Footer() { return <footer>Practice every day.</footer>; }
export default function App() { return <><h1>Lessons</h1><Footer /></>; }
```

React uses element type and position to identify components. Defining a component inside another creates a new function identity on each render.

## Quiz
**Which JSX name refers to a custom component?**

1. lessoncard
2. article
3. LessonCard

**Answer: 3.** LessonCard. React uses element type and position to identify components. Defining a component inside another creates a new function identity on each render.

## Interview questions
- **Basic: Which JSX name refers to a custom component?**
  LessonCard
- **Intermediate: Explain the execution of the compose function components example.**
  React uses element type and position to identify components. Defining a component inside another creates a new function identity on each render.
- **Advanced: What mistake or trade-off would you watch for when applying compose function components in a larger application?**
  Avoid defining LessonCard inside App when it needs stable state. Move its definition to module scope.

## Summary
Small named components let you reason about one responsibility and reuse it. React uses element type and position to identify components. Defining a component inside another creates a new function identity on each render.

## Revision checklist
- [ ] Explain and apply component naming.
- [ ] Explain and apply functional components.
- [ ] Explain and apply component composition and fragment syntax.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Write JSX expressions](../04-jsx-components/04-01-write-jsx-expressions.md)

Next: [Conditions and styles](../04-jsx-components/04-03-conditions-and-styles.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `jsx` `components` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
