# Make forms and dialogs understandable

> Chapter 18 · Accessibility and Inclusive Design · intermediate · 21 minutes

## Learning objectives
- Explain and apply accessible forms, labels, and descriptions.
- Explain and apply dialog accessibility.
- Explain and apply aria fundamentals.

## Prerequisites
[Start with semantics and keyboard](../18-accessibility/18-01-start-with-semantics-and-keyboard.md)

## Why this concept exists
Users need to identify both a control and the instruction needed to use it correctly.

## A useful analogy
Accessible UI provides more than one way to perceive information and operate the same controls.

## Concepts, syntax, and terminology
### Accessible forms, labels, and descriptions
A label identifies the field; a description adds instructions or errors. Use fieldset and legend for related controls. Never rely on placeholder text as the sole label.

### Dialog accessibility
A modal needs a name, focus placement, containment, Escape handling, background inertness, and focus restoration. Native dialog.showModal provides much of the platform behavior; test it in browsers.

### ARIA fundamentals
ARIA changes accessibility semantics, not native interaction behavior. Prefer native elements; add ARIA only when it expresses missing state or relationships.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
export default function EmailField({ error = '' }) {
  return <div><label htmlFor="email">Email</label>
    <input id="email" type="email" aria-invalid={Boolean(error)} aria-describedby="email-help" />
    <p id="email-help">{error || 'Use an address you can access.'}</p></div>;
}
```

## Expected output
A labeled email field whose helper text is programmatically associated with it.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
aria-describedby references another element by ID. An error can replace its text while preserving the relationship.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not add role="button" to a div and assume keyboard behavior is solved. Do not implement a visual modal without focus handling.

## Practical use case
Use this concept when building interactive profile card. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a password helper without asking users to submit real credentials. Independently test a native dialog for Escape and restored trigger focus.

<details>
<summary>Hint</summary>

ARIA changes accessibility semantics, not native interaction behavior. Prefer native elements; add ARIA only when it expresses missing state or relationships.

</details>

## Exercise solution
```jsx
// With a <dialog ref={dialogRef} aria-labelledby="dialog-title">:
// Open via dialogRef.current.showModal().
// Close via dialogRef.current.close().
// Remember the trigger, focus a useful control, and restore the trigger on close.
```

aria-describedby references another element by ID. An error can replace its text while preserving the relationship.

## Quiz
**What does aria-describedby provide?**

1. Automatic keyboard handlers
2. A relationship to explanatory text
3. Automatic input validation

**Answer: 2.** A relationship to explanatory text. aria-describedby references another element by ID. An error can replace its text while preserving the relationship.

## Interview questions
- **Basic: What does aria-describedby provide?**
  A relationship to explanatory text
- **Intermediate: Explain the execution of the make forms and dialogs understandable example.**
  aria-describedby references another element by ID. An error can replace its text while preserving the relationship.
- **Advanced: What mistake or trade-off would you watch for when applying make forms and dialogs understandable in a larger application?**
  Do not add role="button" to a div and assume keyboard behavior is solved. Do not implement a visual modal without focus handling.

## Summary
Users need to identify both a control and the instruction needed to use it correctly. aria-describedby references another element by ID. An error can replace its text while preserving the relationship.

## Revision checklist
- [ ] Explain and apply accessible forms, labels, and descriptions.
- [ ] Explain and apply dialog accessibility.
- [ ] Explain and apply aria fundamentals.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Start with semantics and keyboard](../18-accessibility/18-01-start-with-semantics-and-keyboard.md)

Next: [Verify contrast, motion, and usability](../18-accessibility/18-03-verify-contrast-motion-and-usability.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `html` `accessibility` `forms` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
- [www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
