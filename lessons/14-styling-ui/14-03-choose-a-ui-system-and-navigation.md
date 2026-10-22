# Choose a UI system and navigation

> Chapter 14 · Styling and UI Systems · intermediate · 28 minutes

## Learning objectives
- Explain and apply component libraries.
- Explain and apply utility-first css concepts.
- Explain and apply responsive navigation.
- Explain and apply reduced decoration.

## Prerequisites
[Define themes and tokens](../14-styling-ui/14-02-define-themes-and-tokens.md)

## Why this concept exists
A design system is behavior and conventions as well as visual styling.

## A useful analogy
Design tokens are a shared vocabulary for spacing, color, and type, so every component speaks the same visual language.

## Concepts, syntax, and terminology
### Component libraries
A library can accelerate common controls, but inspect keyboard behavior, theming, bundle cost, and maintenance. A library label alone does not guarantee accessibility.

### Utility-first CSS concepts
Utilities compose styles through small classes. They can improve consistency with a defined scale but need conventions to avoid unreadable duplication. This repository uses plain CSS.

### Responsive navigation
Use a real button to toggle narrow-screen navigation, connect aria-expanded and aria-controls, and retain logical keyboard order. Avoid inaccessible hover-only menus.

### Reduced decoration
Animations should serve feedback, respect reduced motion, and avoid shifting content during loading.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState } from 'react';
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <><button aria-expanded={open} aria-controls="menu" onClick={() => setOpen(v => !v)}>Menu</button>
    <nav id="menu" hidden={!open} aria-label="Example"><a href="#lessons">Lessons</a><a href="#projects">Projects</a></nav></>;
}
```

## Expected output
Menu toggles the visibility and announced expanded state of the navigation.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Returns the value or UI for this branch.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
hidden removes the collapsed navigation from layout and normal accessibility exposure. The trigger remains available to reopen it.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not use an unlabeled icon as the only menu control. Do not visually hide a drawer while leaving its links unexpectedly focusable.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Close the menu after selecting a link. Independently test it using Tab, Enter, and Space only.

<details>
<summary>Hint</summary>

Animations should serve feedback, respect reduced motion, and avoid shifting content during loading.

</details>

## Exercise solution
```jsx
// Add onClick={() => setOpen(false)} to each navigation link.
// Keep the button label and aria-expanded linked to the same open state.
```

hidden removes the collapsed navigation from layout and normal accessibility exposure. The trigger remains available to reopen it.

## Quiz
**Which attribute communicates whether a menu is open?**

1. title alone
2. aria-expanded
3. aria-hidden on the button

**Answer: 2.** aria-expanded. hidden removes the collapsed navigation from layout and normal accessibility exposure. The trigger remains available to reopen it.

## Interview questions
- **Basic: Which attribute communicates whether a menu is open?**
  aria-expanded
- **Intermediate: Explain the execution of the choose a ui system and navigation example.**
  hidden removes the collapsed navigation from layout and normal accessibility exposure. The trigger remains available to reopen it.
- **Advanced: What mistake or trade-off would you watch for when applying choose a ui system and navigation in a larger application?**
  Do not use an unlabeled icon as the only menu control. Do not visually hide a drawer while leaving its links unexpectedly focusable.

## Summary
A design system is behavior and conventions as well as visual styling. hidden removes the collapsed navigation from layout and normal accessibility exposure. The trigger remains available to reopen it.

## Revision checklist
- [ ] Explain and apply component libraries.
- [ ] Explain and apply utility-first css concepts.
- [ ] Explain and apply responsive navigation.
- [ ] Explain and apply reduced decoration.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Define themes and tokens](../14-styling-ui/14-02-define-themes-and-tokens.md)

Next: [Debug and test pure behavior](../15-testing/15-01-debug-and-test-pure-behavior.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `css` `react` `accessibility` `components` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [react.dev/learn](https://react.dev/learn)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
