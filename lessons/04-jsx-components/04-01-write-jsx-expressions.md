# Write JSX expressions

> Chapter 04 · JSX and Components · beginner · 21 minutes

## Learning objectives
- Explain and apply jsx syntax.
- Explain and apply expressions in jsx.
- Explain and apply jsx attributes.

## Prerequisites
[Build, configure, and diagnose](../03-react-vite-setup/03-03-build-configure-and-diagnose.md)

## Why this concept exists
JSX keeps UI structure near the JavaScript that determines it.

## A useful analogy
JSX is a recipe for a tree of UI elements, not a string of HTML.

## Concepts, syntax, and terminology
### JSX syntax
JSX is transformed JavaScript syntax. Return one enclosing element or a Fragment. Close all tags. It does not run in a plain browser console without transformation.

### Expressions in JSX
Curly braces embed expressions, such as a variable or function result. Statements such as if and for belong outside the returned JSX.

### JSX attributes
Use className, htmlFor, and camelCase DOM props such as onClick. aria-* and data-* retain hyphens. Inline style receives an object.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
export default function App() {
  const name = 'Asha';
  return <section className="card">
    <h1>{name.toUpperCase()}</h1>
    <p style={{ color: 'teal' }}>Welcome</p>
  </section>;
}
```

## Expected output
ASHA and a teal Welcome paragraph.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Returns the value or UI for this branch.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
The transform creates React element descriptions. Strings and numbers become text; objects cannot be rendered as ordinary text children.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Incorrect: <p>{ { name: "Asha" } }</p>. Correct: render the name field or explicitly JSON.stringify for debugging.

## Practical use case
Use this concept when building todo application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Render your name and the result of 3 + 4. Independently add an image with meaningful alt text.

<details>
<summary>Hint</summary>

Use className, htmlFor, and camelCase DOM props such as onClick. aria-* and data-* retain hyphens. Inline style receives an object.

</details>

## Exercise solution
```jsx
export default function App() {
  const learner = { name: 'Asha' };
  return <><h1>{learner.name}</h1><p>{3 + 4}</p></>;
}
```

The transform creates React element descriptions. Strings and numbers become text; objects cannot be rendered as ordinary text children.

## Quiz
**What fits inside JSX curly braces?**

1. A raw for statement
2. A JavaScript expression
3. Any import statement

**Answer: 2.** A JavaScript expression. The transform creates React element descriptions. Strings and numbers become text; objects cannot be rendered as ordinary text children.

## Interview questions
- **Basic: What fits inside JSX curly braces?**
  A JavaScript expression
- **Intermediate: Explain the execution of the write jsx expressions example.**
  The transform creates React element descriptions. Strings and numbers become text; objects cannot be rendered as ordinary text children.
- **Advanced: What mistake or trade-off would you watch for when applying write jsx expressions in a larger application?**
  Incorrect: <p>{ { name: "Asha" } }</p>. Correct: render the name field or explicitly JSON.stringify for debugging.

## Summary
JSX keeps UI structure near the JavaScript that determines it. The transform creates React element descriptions. Strings and numbers become text; objects cannot be rendered as ordinary text children.

## Revision checklist
- [ ] Explain and apply jsx syntax.
- [ ] Explain and apply expressions in jsx.
- [ ] Explain and apply jsx attributes.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Build, configure, and diagnose](../03-react-vite-setup/03-03-build-configure-and-diagnose.md)

Next: [Compose function components](../04-jsx-components/04-02-compose-function-components.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `jsx` `components` `rendering` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
