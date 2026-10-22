# Render untrusted content safely

> Chapter 19 · Security and Reliability · advanced · 21 minutes

## Learning objectives
- Explain and apply xss fundamentals.
- Explain and apply safe rendering.
- Explain and apply avoiding unsafe html injection.

## Prerequisites
[Verify contrast, motion, and usability](../18-accessibility/18-03-verify-contrast-motion-and-usability.md)

## Why this concept exists
Content must remain data unless a deliberate, validated feature requires interpreting it.

## A useful analogy
A browser is a public display case: anything shipped to it can be inspected and changed by its visitor.

## Concepts, syntax, and terminology
### XSS fundamentals
Cross-site scripting runs attacker-controlled script in another user context. It can arise from unsafe HTML, unsafe URLs, or compromised dependencies.

### Safe rendering
React escapes ordinary text children. Rendering a user string inside JSX text does not interpret it as markup. Context still matters: URLs and raw HTML need their own validation.

### Avoiding unsafe HTML injection
dangerouslySetInnerHTML bypasses text escaping. If rich HTML is unavoidable, use a maintained sanitizer with a clear policy and test dangerous cases. This site disables raw Markdown HTML.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
export default function App() {
  const comment = '<img src=x onerror=alert(1)>';
  return <p>{comment}</p>;
}
```

## Expected output
The suspicious markup is displayed as text; it is not executed as an image event handler.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Returns the value or UI for this branch.

## Internal behavior and data flow
React DOM creates text nodes for ordinary string children. Bypassing that path with raw HTML changes the trust boundary.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Incorrect: inject an arbitrary comment with dangerouslySetInnerHTML. Correct: render it as text, or sanitize a constrained rich-text format.

## Practical use case
Use this concept when building weather dashboard. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Render a comment containing angle brackets. Independently restrict a link to approved http/https protocols.

<details>
<summary>Hint</summary>

dangerouslySetInnerHTML bypasses text escaping. If rich HTML is unavoidable, use a maintained sanitizer with a clear policy and test dangerous cases. This site disables raw Markdown HTML.

</details>

## Exercise solution
```jsx
export function safeLink(value) {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; }
  catch { return null; }
}
console.log(safeLink('javascript:alert(1)'));
```

React DOM creates text nodes for ordinary string children. Bypassing that path with raw HTML changes the trust boundary.

## Quiz
**How should ordinary user comments be rendered?**

1. Using eval
2. As escaped text
3. As raw injected HTML by default

**Answer: 2.** As escaped text. React DOM creates text nodes for ordinary string children. Bypassing that path with raw HTML changes the trust boundary.

## Interview questions
- **Basic: How should ordinary user comments be rendered?**
  As escaped text
- **Intermediate: Explain the execution of the render untrusted content safely example.**
  React DOM creates text nodes for ordinary string children. Bypassing that path with raw HTML changes the trust boundary.
- **Advanced: What mistake or trade-off would you watch for when applying render untrusted content safely in a larger application?**
  Incorrect: inject an arbitrary comment with dangerouslySetInnerHTML. Correct: render it as text, or sanitize a constrained rich-text format.

## Summary
Content must remain data unless a deliberate, validated feature requires interpreting it. React DOM creates text nodes for ordinary string children. Bypassing that path with raw HTML changes the trust boundary.

## Revision checklist
- [ ] Explain and apply xss fundamentals.
- [ ] Explain and apply safe rendering.
- [ ] Explain and apply avoiding unsafe html injection.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Verify contrast, motion, and usability](../18-accessibility/18-03-verify-contrast-motion-and-usability.md)

Next: [Understand identity and secret boundaries](../19-security/19-02-understand-identity-and-secret-boundaries.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `security` `api-integration` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
- [developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
