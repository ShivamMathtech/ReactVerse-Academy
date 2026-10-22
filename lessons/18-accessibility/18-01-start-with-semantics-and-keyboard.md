# Start with semantics and keyboard

> Chapter 18 · Accessibility and Inclusive Design · intermediate · 28 minutes

## Learning objectives
- Explain and apply semantic elements.
- Explain and apply keyboard navigation.
- Explain and apply focus management.
- Explain and apply screen-reader considerations.

## Prerequisites
[Reduce bundle, list, and network work](../17-performance/17-03-reduce-bundle-list-and-network-work.md)

## Why this concept exists
Keyboard and semantic support improve usability across assistive technologies and input methods.

## A useful analogy
Accessible UI provides more than one way to perceive information and operate the same controls.

## Concepts, syntax, and terminology
### Semantic elements
Use buttons for actions, anchors for navigation, and headings/landmarks for document structure. Native elements include behaviors that custom div controls must recreate.

### Keyboard navigation
Every action must be reachable and usable without a pointer. Preserve logical DOM order, visible focus, and expected Enter/Space behavior.

### Focus management
Move focus intentionally after navigation or a dialog transition. Avoid stealing focus on every render. The user should understand where they are.

### Screen-reader considerations
A visible label and a programmatic accessible name should agree. Use live regions for meaningful changing status, not every keystroke.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
export default function App() {
  return <><a href="#content">Skip to content</a>
    <nav aria-label="Lesson navigation"><a href="#intro">Introduction</a></nav>
    <main id="content" tabIndex={-1}><h1>Accessible learning</h1><button onClick={() => window.print()}>Print lesson</button></main></>;
}
```

## Expected output
Keyboard users can reach a skip link, navigation, and a native print button.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Connects a user interaction to the handler shown.

## Internal behavior and data flow
The DOM order informs sequential focus navigation and the accessibility tree. CSS visual rearrangement does not automatically change that order.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Avoid positive tabIndex values that impose a separate confusing order. Prefer native order and tabIndex=0 only where necessary.

## Practical use case
Use this concept when building interactive profile card. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Navigate the page without a mouse. Independently add a visible :focus-visible outline and verify it on every action.

<details>
<summary>Hint</summary>

A visible label and a programmatic accessible name should agree. Use live regions for meaningful changing status, not every keystroke.

</details>

## Exercise solution
```jsx
:focus-visible { outline: 3px solid #14634e; outline-offset: 4px; }
/* Keep sufficient contrast against both adjacent colors. */
```

The DOM order informs sequential focus navigation and the accessibility tree. CSS visual rearrangement does not automatically change that order.

## Quiz
**Which is normally best for an action?**

1. A native button
2. A clickable span without keyboard support
3. An image with only onClick

**Answer: 1.** A native button. The DOM order informs sequential focus navigation and the accessibility tree. CSS visual rearrangement does not automatically change that order.

## Interview questions
- **Basic: Which is normally best for an action?**
  A native button
- **Intermediate: Explain the execution of the start with semantics and keyboard example.**
  The DOM order informs sequential focus navigation and the accessibility tree. CSS visual rearrangement does not automatically change that order.
- **Advanced: What mistake or trade-off would you watch for when applying start with semantics and keyboard in a larger application?**
  Avoid positive tabIndex values that impose a separate confusing order. Prefer native order and tabIndex=0 only where necessary.

## Summary
Keyboard and semantic support improve usability across assistive technologies and input methods. The DOM order informs sequential focus navigation and the accessibility tree. CSS visual rearrangement does not automatically change that order.

## Revision checklist
- [ ] Explain and apply semantic elements.
- [ ] Explain and apply keyboard navigation.
- [ ] Explain and apply focus management.
- [ ] Explain and apply screen-reader considerations.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Reduce bundle, list, and network work](../17-performance/17-03-reduce-bundle-list-and-network-work.md)

Next: [Make forms and dialogs understandable](../18-accessibility/18-02-make-forms-and-dialogs-understandable.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `html` `accessibility` `forms` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
- [www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
