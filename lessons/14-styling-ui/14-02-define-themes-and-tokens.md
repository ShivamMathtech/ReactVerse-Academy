# Define themes and tokens

> Chapter 14 · Styling and UI Systems · intermediate · 21 minutes

## Learning objectives
- Explain and apply design tokens.
- Explain and apply reusable themes and dark mode.
- Explain and apply layout and typography.

## Prerequisites
[Build responsive layouts](../14-styling-ui/14-01-build-responsive-layouts.md)

## Why this concept exists
Central theme values keep contrast and visual consistency manageable as a project grows.

## A useful analogy
Design tokens are a shared vocabulary for spacing, color, and type, so every component speaks the same visual language.

## Concepts, syntax, and terminology
### Design tokens
Name colors by role, such as surface and text, and spacing by a consistent scale. Components should use roles rather than scattered literal colors.

### Reusable themes and dark mode
Override token values at a root data attribute. Respect system preference initially, allow a user override, and persist only the preference.

### Layout and typography
Set a readable line-height and a bounded prose measure. Distinguish headings, metadata, and body text with a restrained scale rather than many font families.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```css
:root { --surface:#ffffff; --text:#15231f; --accent:#14634e; }
[data-theme='dark'] { --surface:#10231c; --text:#edf5ef; --accent:#8ae6b9; }
body { background:var(--surface); color:var(--text); line-height:1.65; }
article { max-width:70ch; }
a { color:var(--accent); }
```

## Expected output
The same components inherit a light or dark token palette.

## Line-by-line walkthrough
- Line 1: `:root { --surface:#ffffff; --text:#15231f; --accent:#14634e; }` defines the selector, declaration, or responsive boundary shown.
- Line 2: `[data-theme='dark'] { --surface:#10231c; --text:#edf5ef; --accent:#8ae6b9; }` defines the selector, declaration, or responsive boundary shown.
- Line 3: `body { background:var(--surface); color:var(--text); line-height:1.65; }` defines the selector, declaration, or responsive boundary shown.
- Line 4: `article { max-width:70ch; }` defines the selector, declaration, or responsive boundary shown.
- Line 5: `a { color:var(--accent); }` defines the selector, declaration, or responsive boundary shown.

## Internal behavior and data flow
Custom properties cascade and inherit. Changing the root theme updates dependent properties without re-rendering each React component.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not invert every color blindly. Test text, borders, focus outlines, and disabled states in both themes.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a spacing token and use it on a panel. Independently persist the theme while handling unavailable storage.

<details>
<summary>Hint</summary>

Set a readable line-height and a bounded prose measure. Distinguish headings, metadata, and body text with a restrained scale rather than many font families.

</details>

## Exercise solution
```css
try { localStorage.setItem('theme', 'dark'); } catch { /* preference remains usable in memory */ }
document.documentElement.dataset.theme = 'dark';
```

Custom properties cascade and inherit. Changing the root theme updates dependent properties without re-rendering each React component.

## Quiz
**Why use semantic color tokens?**

1. To change a role consistently across components
2. To eliminate all CSS
3. To guarantee contrast without checking

**Answer: 1.** To change a role consistently across components. Custom properties cascade and inherit. Changing the root theme updates dependent properties without re-rendering each React component.

## Interview questions
- **Basic: Why use semantic color tokens?**
  To change a role consistently across components
- **Intermediate: Explain the execution of the define themes and tokens example.**
  Custom properties cascade and inherit. Changing the root theme updates dependent properties without re-rendering each React component.
- **Advanced: What mistake or trade-off would you watch for when applying define themes and tokens in a larger application?**
  Do not invert every color blindly. Test text, borders, focus outlines, and disabled states in both themes.

## Summary
Central theme values keep contrast and visual consistency manageable as a project grows. Custom properties cascade and inherit. Changing the root theme updates dependent properties without re-rendering each React component.

## Revision checklist
- [ ] Explain and apply design tokens.
- [ ] Explain and apply reusable themes and dark mode.
- [ ] Explain and apply layout and typography.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Build responsive layouts](../14-styling-ui/14-01-build-responsive-layouts.md)

Next: [Choose a UI system and navigation](../14-styling-ui/14-03-choose-a-ui-system-and-navigation.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `css` `react` `accessibility` `components` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [react.dev/learn](https://react.dev/learn)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
