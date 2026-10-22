# Build responsive layouts

> Chapter 14 · Styling and UI Systems · intermediate · 21 minutes

## Learning objectives
- Explain and apply plain css and css modules.
- Explain and apply responsive design and mobile-first design.
- Explain and apply flexbox and grid.

## Prerequisites
[Cache and update with TanStack Query](../13-api-async/13-03-cache-and-update-with-tanstack-query.md)

## Why this concept exists
A layout should accommodate content and user zoom instead of assuming one screen size.

## A useful analogy
Design tokens are a shared vocabulary for spacing, color, and type, so every component speaks the same visual language.

## Concepts, syntax, and terminology
### Plain CSS and CSS Modules
Plain CSS is useful for resets and tokens. CSS Modules transform class names for local scope; import styles from a .module.css file and use styles.card.

### Responsive design and mobile-first design
Start with a usable narrow layout, then add columns when space permits. Breakpoints should follow content needs rather than device brand names.

### Flexbox and Grid
Flexbox aligns items along one main axis. Grid describes rows and columns. Use minmax and min-width:0 to prevent long content from forcing overflow.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```css
.cards { display: grid; gap: 1rem; grid-template-columns: 1fr; }
.card { min-width: 0; padding: 1.25rem; border: 1px solid #cbd5e1; }
@media (min-width: 48rem) {
  .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
```

## Expected output
Cards use one column on narrow screens and two at 48rem or wider.

## Line-by-line walkthrough
- Line 1: `.cards { display: grid; gap: 1rem; grid-template-columns: 1fr; }` defines the selector, declaration, or responsive boundary shown.
- Line 2: `.card { min-width: 0; padding: 1.25rem; border: 1px solid #cbd5e1; }` defines the selector, declaration, or responsive boundary shown.
- Line 3: `@media (min-width: 48rem) {` defines the selector, declaration, or responsive boundary shown.
- Line 4: `  .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }` defines the selector, declaration, or responsive boundary shown.
- Line 5: `}` defines the selector, declaration, or responsive boundary shown.

## Internal behavior and data flow
Grid distributes available space between tracks; minmax(0,1fr) lets tracks shrink below the intrinsic width of long content.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Avoid a fixed desktop width on the page. Test long code, long titles, and 200% zoom as well as a typical phone width.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Build a three-card layout. Independently add a third column only when the content remains readable.

<details>
<summary>Hint</summary>

Flexbox aligns items along one main axis. Grid describes rows and columns. Use minmax and min-width:0 to prevent long content from forcing overflow.

</details>

## Exercise solution
```css
.cards { display:grid; gap:1rem; grid-template-columns:repeat(auto-fit,minmax(min(100%,16rem),1fr)); }
.card { min-width:0; overflow-wrap:anywhere; }
```

Grid distributes available space between tracks; minmax(0,1fr) lets tracks shrink below the intrinsic width of long content.

## Quiz
**Which tool naturally describes both rows and columns?**

1. Only floats
2. Inline text decoration
3. CSS Grid

**Answer: 3.** CSS Grid. Grid distributes available space between tracks; minmax(0,1fr) lets tracks shrink below the intrinsic width of long content.

## Interview questions
- **Basic: Which tool naturally describes both rows and columns?**
  CSS Grid
- **Intermediate: Explain the execution of the build responsive layouts example.**
  Grid distributes available space between tracks; minmax(0,1fr) lets tracks shrink below the intrinsic width of long content.
- **Advanced: What mistake or trade-off would you watch for when applying build responsive layouts in a larger application?**
  Avoid a fixed desktop width on the page. Test long code, long titles, and 200% zoom as well as a typical phone width.

## Summary
A layout should accommodate content and user zoom instead of assuming one screen size. Grid distributes available space between tracks; minmax(0,1fr) lets tracks shrink below the intrinsic width of long content.

## Revision checklist
- [ ] Explain and apply plain css and css modules.
- [ ] Explain and apply responsive design and mobile-first design.
- [ ] Explain and apply flexbox and grid.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Cache and update with TanStack Query](../13-api-async/13-03-cache-and-update-with-tanstack-query.md)

Next: [Define themes and tokens](../14-styling-ui/14-02-define-themes-and-tokens.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `css` `react` `accessibility` `components` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [react.dev/learn](https://react.dev/learn)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
