# Build a meaningful document

> Chapter 01 · Web Development Foundations · beginner · 21 minutes

## Learning objectives
- Explain and apply html structure and semantic html.
- Explain and apply css fundamentals.
- Explain and apply dom and browser rendering.

## Prerequisites
[Practice with feedback](../00-getting-started/00-03-practice-with-feedback.md)

## Why this concept exists
Meaningful structure provides usable navigation before styling or scripting exists.

## A useful analogy
HTML is the structure of a classroom, CSS arranges it, and JavaScript responds when someone interacts.

## Concepts, syntax, and terminology
### HTML structure and semantic HTML
Use headings in a logical order and main, nav, article, and button for their meaning. Semantics expose structure and native behaviors to assistive tools.

### CSS fundamentals
Selectors choose elements; declarations apply values. The cascade, inheritance, specificity, and source order decide conflicts. The box model includes content, padding, border, and margin.

### DOM and browser rendering
HTML becomes a DOM tree and CSS contributes style information. Layout calculates geometry, painting draws pixels, and compositing combines layers. Changing width can require layout; visual effects have different costs.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```html
<main>
  <h1>Learning journal</h1>
  <article>
    <h2>First entry</h2>
    <p>I built a semantic page.</p>
  </article>
</main>
```

## Expected output
A main region with a page heading, article heading, and journal paragraph.

## Line-by-line walkthrough
- Line 1: `<main>` adds the named semantic element or its content.
- Line 2: `  <h1>Learning journal</h1>` adds the named semantic element or its content.
- Line 3: `  <article>` adds the named semantic element or its content.
- Line 4: `    <h2>First entry</h2>` adds the named semantic element or its content.
- Line 5: `    <p>I built a semantic page.</p>` adds the named semantic element or its content.
- Line 6: `  </article>` adds the named semantic element or its content.
- Line 7: `</main>` adds the named semantic element or its content.

## Internal behavior and data flow
The browser parses nested elements into nodes and exposes their semantics through its accessibility tree. CSS changes appearance without changing meaning.



## Common mistakes: incorrect versus correct
A clickable div does not automatically behave like a button. Prefer native controls rather than adding a click handler and hoping keyboard access works.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a navigation region with two links. Independently style the article with padding and a readable max-width.

<details>
<summary>Hint</summary>

HTML becomes a DOM tree and CSS contributes style information. Layout calculates geometry, painting draws pixels, and compositing combines layers. Changing width can require layout; visual effects have different costs.

</details>

## Exercise solution
```html
<nav aria-label="Journal"><a href="#entry">First entry</a></nav>
<main><article id="entry"><h1>First entry</h1><p>Today I practiced.</p></article></main>
<style>article { max-width: 60ch; padding: 1rem; }</style>
```

The browser parses nested elements into nodes and exposes their semantics through its accessibility tree. CSS changes appearance without changing meaning.

## Quiz
**Which element describes the primary page content?**

1. b
2. main
3. span

**Answer: 2.** main. The browser parses nested elements into nodes and exposes their semantics through its accessibility tree. CSS changes appearance without changing meaning.

## Interview questions
- **Basic: Which element describes the primary page content?**
  main
- **Intermediate: Explain the execution of the build a meaningful document example.**
  The browser parses nested elements into nodes and exposes their semantics through its accessibility tree. CSS changes appearance without changing meaning.
- **Advanced: What mistake or trade-off would you watch for when applying build a meaningful document in a larger application?**
  A clickable div does not automatically behave like a button. Prefer native controls rather than adding a click handler and hoping keyboard access works.

## Summary
Meaningful structure provides usable navigation before styling or scripting exists. The browser parses nested elements into nodes and exposes their semantics through its accessibility tree. CSS changes appearance without changing meaning.

## Revision checklist
- [ ] Explain and apply html structure and semantic html.
- [ ] Explain and apply css fundamentals.
- [ ] Explain and apply dom and browser rendering.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Practice with feedback](../00-getting-started/00-03-practice-with-feedback.md)

Next: [Connect browser and server](../01-web-foundations/01-02-connect-browser-and-server.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `html` `css` `javascript` `accessibility` `frontend-fundamentals` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
