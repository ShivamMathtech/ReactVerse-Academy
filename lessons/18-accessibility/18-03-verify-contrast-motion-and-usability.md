# Verify contrast, motion, and usability

> Chapter 18 · Accessibility and Inclusive Design · intermediate · 28 minutes

## Learning objectives
- Explain and apply color contrast.
- Explain and apply reduced motion.
- Explain and apply automated and manual accessibility testing.
- Explain and apply inclusive design trade-offs.

## Prerequisites
[Make forms and dialogs understandable](../18-accessibility/18-02-make-forms-and-dialogs-understandable.md)

## Why this concept exists
Accessibility must be verified in the actual experience rather than inferred from a component checklist.

## A useful analogy
Accessible UI provides more than one way to perceive information and operate the same controls.

## Concepts, syntax, and terminology
### Color contrast
Normal text generally needs at least 4.5:1 under WCAG AA; large text has a 3:1 threshold. Focus indicators and controls also need careful contrast. Do not use color alone to signal state.

### Reduced motion
Honor prefers-reduced-motion and avoid essential information conveyed only by animation. Keep transitions restrained and disable nonessential movement when requested.

### Automated and manual accessibility testing
Use semantic queries and automated audits, then test keyboard, zoom, screen readers, error recovery, and real devices. Automated results are a subset of accessibility evidence.

### Inclusive design trade-offs
A technically valid widget can still be hard to understand. Plain labels, short forms, and predictable navigation reduce cognitive burden.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```css
.status { border: 1px solid currentColor; padding: .5rem; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; scroll-behavior: auto !important; transition: none !important; }
}
```

## Expected output
Nonessential CSS animation and transitions are disabled when reduced motion is requested.

## Line-by-line walkthrough
- Line 1: `.status { border: 1px solid currentColor; padding: .5rem; }` defines the selector, declaration, or responsive boundary shown.
- Line 2: `@media (prefers-reduced-motion: reduce) {` defines the selector, declaration, or responsive boundary shown.
- Line 3: `  *, *::before, *::after { animation: none !important; scroll-behavior: auto !important; transition: none !important; }` defines the selector, declaration, or responsive boundary shown.
- Line 4: `}` defines the selector, declaration, or responsive boundary shown.

## Internal behavior and data flow
Media queries respond to user preferences. CSS changes motion, while labels and interaction semantics still need appropriate HTML and behavior.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not claim compliance from a color palette alone. Evaluate complete pages, focus order, error messages, and content at zoom.

## Practical use case
Use this concept when building interactive profile card. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Check the quiz at 200% zoom and with keyboard only. Independently record one manual finding and its reproducible fix.

<details>
<summary>Hint</summary>

A technically valid widget can still be hard to understand. Plain labels, short forms, and predictable navigation reduce cognitive burden.

</details>

## Exercise solution
```css
const audit = ['Text zoom does not hide actions', 'Errors are described in text', 'Focus is visible', 'Status uses text plus color', 'Motion respects preference'];
console.table(audit);
```

Media queries respond to user preferences. CSS changes motion, while labels and interaction semantics still need appropriate HTML and behavior.

## Quiz
**Can an automated audit prove all accessibility requirements are satisfied?**

1. Yes
2. Only for React apps
3. No

**Answer: 3.** No. Media queries respond to user preferences. CSS changes motion, while labels and interaction semantics still need appropriate HTML and behavior.

## Interview questions
- **Basic: Can an automated audit prove all accessibility requirements are satisfied?**
  No
- **Intermediate: Explain the execution of the verify contrast, motion, and usability example.**
  Media queries respond to user preferences. CSS changes motion, while labels and interaction semantics still need appropriate HTML and behavior.
- **Advanced: What mistake or trade-off would you watch for when applying verify contrast, motion, and usability in a larger application?**
  Do not claim compliance from a color palette alone. Evaluate complete pages, focus order, error messages, and content at zoom.

## Summary
Accessibility must be verified in the actual experience rather than inferred from a component checklist. Media queries respond to user preferences. CSS changes motion, while labels and interaction semantics still need appropriate HTML and behavior.

## Revision checklist
- [ ] Explain and apply color contrast.
- [ ] Explain and apply reduced motion.
- [ ] Explain and apply automated and manual accessibility testing.
- [ ] Explain and apply inclusive design trade-offs.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Make forms and dialogs understandable](../18-accessibility/18-02-make-forms-and-dialogs-understandable.md)

Next: [Render untrusted content safely](../19-security/19-01-render-untrusted-content-safely.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `html` `accessibility` `forms` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
- [www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
