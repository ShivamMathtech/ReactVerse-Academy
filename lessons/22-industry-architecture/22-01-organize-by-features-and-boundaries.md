# Organize by features and boundaries

> Chapter 22 · Architecture and Industry Practices · advanced · 28 minutes

## Learning objectives
- Explain and apply feature-based architecture.
- Explain and apply separation of concerns.
- Explain and apply reusable abstractions.
- Explain and apply api client organization.

## Prerequisites
[Prepare a maintainable release](../21-production-deployment/21-03-prepare-a-maintainable-release.md)

## Why this concept exists
A clear boundary limits how far a transport or UI change needs to spread.

## A useful analogy
Architecture is a set of reversible decisions that keeps the next change understandable.

## Concepts, syntax, and terminology
### Feature-based architecture
Group a feature UI, state, API adapter, and tests where ownership is clear. Promote modules to shared only when multiple features need the same stable contract.

### Separation of concerns
Keep rendering, transport, domain validation, and persistence distinguishable. Small apps can use simple files; separation does not require many layers.

### Reusable abstractions
Extract repeated knowledge, not merely similar syntax. A useful abstraction removes inconsistency without hiding essential behavior.

### API client organization
Centralize transport checks, base URLs, cancellation, and response parsing. Feature adapters translate transport data into domain shapes.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
export async function getJson(url, { signal } = {}) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
export async function loadTitles(url, options) {
  const rows = await getJson(url, options);
  if (!Array.isArray(rows)) throw new Error('Expected records');
  return rows.map(row => String(row.title));
}
```

## Expected output
The transport helper and feature adapter have distinct responsibilities.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Waits for the Promise without blocking the browser event loop.
- Line 3: Rejects this invalid or failed path instead of silently continuing.
- Line 4: Returns the value or UI for this branch.
- Line 6: Defines a named operation; it runs when called or rendered.
- Line 7: Waits for the Promise without blocking the browser event loop.
- Line 8: Rejects this invalid or failed path instead of silently continuing.
- Line 9: Transforms each matching item into a new value or element.

## Internal behavior and data flow
The call graph separates a generic HTTP policy from domain interpretation. Dependency direction is explicit and easy to replace in tests.



## Common mistakes: incorrect versus correct
Do not create generic helpers that silently swallow all errors or know every feature shape.

## Practical use case
Use this concept when building admin analytics dashboard. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Extract one API adapter from a component. Independently test it with an injected fetcher or mocked boundary.

<details>
<summary>Hint</summary>

Centralize transport checks, base URLs, cancellation, and response parsing. Feature adapters translate transport data into domain shapes.

</details>

## Exercise solution
```js
export const createTitlesApi = fetcher => async url => {
  const response = await fetcher(url);
  if (!response.ok) throw new Error('Could not load titles');
  return response.json();
};
```

The call graph separates a generic HTTP policy from domain interpretation. Dependency direction is explicit and easy to replace in tests.

## Quiz
**What should a shared transport helper avoid owning?**

1. Cancellation forwarding
2. Every feature-specific UI decision
3. HTTP status checking

**Answer: 2.** Every feature-specific UI decision. The call graph separates a generic HTTP policy from domain interpretation. Dependency direction is explicit and easy to replace in tests.

## Interview questions
- **Basic: What should a shared transport helper avoid owning?**
  Every feature-specific UI decision
- **Intermediate: Explain the execution of the organize by features and boundaries example.**
  The call graph separates a generic HTTP policy from domain interpretation. Dependency direction is explicit and easy to replace in tests.
- **Advanced: What mistake or trade-off would you watch for when applying organize by features and boundaries in a larger application?**
  Do not create generic helpers that silently swallow all errors or know every feature shape.

## Summary
A clear boundary limits how far a transport or UI change needs to spread. The call graph separates a generic HTTP policy from domain interpretation. Dependency direction is explicit and easy to replace in tests.

## Revision checklist
- [ ] Explain and apply feature-based architecture.
- [ ] Explain and apply separation of concerns.
- [ ] Explain and apply reusable abstractions.
- [ ] Explain and apply api client organization.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Prepare a maintainable release](../21-production-deployment/21-03-prepare-a-maintainable-release.md)

Next: [Review forms, design systems, and changes](../22-industry-architecture/22-02-review-forms-design-systems-and-changes.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `industry-practices` `production-ready` `portfolio-project` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
