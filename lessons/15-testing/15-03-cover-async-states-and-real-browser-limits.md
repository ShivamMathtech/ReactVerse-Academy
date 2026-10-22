# Cover async states and real-browser limits

> Chapter 15 · Testing and Debugging · intermediate · 28 minutes

## Learning objectives
- Explain and apply mocking network requests.
- Explain and apply accessibility testing.
- Explain and apply end-to-end testing concepts.
- Explain and apply testing trade-offs.

## Prerequisites
[Test components through their UI](../15-testing/15-02-test-components-through-their-ui.md)

## Why this concept exists
Deterministic failure cases reveal recovery bugs that a reliable local network would rarely expose.

## A useful analogy
A good test is a rehearsal of an observable promise to a user, not a photograph of private implementation details.

## Concepts, syntax, and terminology
### Mocking network requests
Stub the API boundary or use a request interceptor so tests control success, empty, failure, and delayed responses. Restore mocks between tests.

### Accessibility testing
Automated checks catch some defects. Keyboard traversal, focus visibility, zoom, and screen-reader review still require manual evaluation.

### End-to-end testing concepts
A real browser checks routing, assets, and integrated workflows. DOM emulators do not reproduce layout or all platform APIs.

### Testing trade-offs
Use many focused tests and a few critical cross-feature flows. Avoid fragile snapshots of enormous DOM trees and arbitrary sleeps.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
import { expect, test, vi } from 'vitest';
test('checks the response status', async () => {
  const fetcher = vi.fn().mockResolvedValue({ ok: false, status: 503 });
  async function load() {
    const response = await fetcher('/courses');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  }
  await expect(load()).rejects.toThrow('HTTP 503');
});
```

## Expected output
The controlled failure test passes without network access.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Waits for the Promise without blocking the browser event loop.
- Line 6: Rejects this invalid or failed path instead of silently continuing.
- Line 8: Waits for the Promise without blocking the browser event loop.

## Internal behavior and data flow
A mocked boundary supplies specific outcomes. It proves handling of those outcomes, not compatibility with every real service or browser.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not claim an app is fully accessible because role queries pass. Do not claim visual responsiveness from jsdom tests alone.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Test an empty successful response. Independently write a manual keyboard checklist for the quiz retry workflow.

<details>
<summary>Hint</summary>

Use many focused tests and a few critical cross-feature flows. Avoid fragile snapshots of enormous DOM trees and arbitrary sleeps.

</details>

## Exercise solution
```js
const checklist = ['Tab reaches each answer', 'Focus is visible', 'Enter selects an answer', 'Feedback is announced', 'Retry clears score'];
console.log(checklist.join('
'));
```

A mocked boundary supplies specific outcomes. It proves handling of those outcomes, not compatibility with every real service or browser.

## Quiz
**What needs a real browser or manual review?**

1. A pure arithmetic assertion
2. JSON parsing alone
3. Responsive layout and practical keyboard flow

**Answer: 3.** Responsive layout and practical keyboard flow. A mocked boundary supplies specific outcomes. It proves handling of those outcomes, not compatibility with every real service or browser.

## Interview questions
- **Basic: What needs a real browser or manual review?**
  Responsive layout and practical keyboard flow
- **Intermediate: Explain the execution of the cover async states and real-browser limits example.**
  A mocked boundary supplies specific outcomes. It proves handling of those outcomes, not compatibility with every real service or browser.
- **Advanced: What mistake or trade-off would you watch for when applying cover async states and real-browser limits in a larger application?**
  Do not claim an app is fully accessible because role queries pass. Do not claim visual responsiveness from jsdom tests alone.

## Summary
Deterministic failure cases reveal recovery bugs that a reliable local network would rarely expose. A mocked boundary supplies specific outcomes. It proves handling of those outcomes, not compatibility with every real service or browser.

## Revision checklist
- [ ] Explain and apply mocking network requests.
- [ ] Explain and apply accessibility testing.
- [ ] Explain and apply end-to-end testing concepts.
- [ ] Explain and apply testing trade-offs.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Test components through their UI](../15-testing/15-02-test-components-through-their-ui.md)

Next: [Type props and events](../16-typescript/16-01-type-props-and-events.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `vitest` `react-testing-library` `testing` `debugging` `accessibility` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [vitest.dev/guide/](https://vitest.dev/guide/)
- [testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
