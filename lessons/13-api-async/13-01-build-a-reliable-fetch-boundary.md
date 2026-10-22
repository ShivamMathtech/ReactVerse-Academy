# Build a reliable fetch boundary

> Chapter 13 · API Integration and Asynchronous UI · intermediate · 28 minutes

## Learning objectives
- Explain and apply fetch api and http methods/status codes.
- Explain and apply loading, success, empty, and error states.
- Explain and apply async operations.
- Explain and apply api configuration using vite environment variables.

## Prerequisites
[Choose tools without overengineering](../12-context-state-management/12-03-choose-tools-without-overengineering.md)

## Why this concept exists
A small API client keeps transport details separate from presentation.

## A useful analogy
A request is a parcel in transit: it can arrive late, fail, or become irrelevant because you requested something else.

## Concepts, syntax, and terminology
### Fetch API and HTTP methods/status codes
GET reads, POST commonly creates, PATCH partially updates, and DELETE removes according to the API contract. Check response.ok and understand 204 before parsing JSON.

### Loading, success, empty, and error states
Represent request state explicitly. Preserve enough context for a meaningful retry. Empty successful data is not a failure.

### Async operations
await suspends the async function, not the browser. Catch rejections where you can choose a user-facing recovery.

### API configuration using Vite environment variables
Use a public base URL and encode dynamic path/query values. The default course fixture works locally with no service or API key.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
export async function getCourses(signal) {
  const response = await fetch(`${import.meta.env.BASE_URL}data/courses.json`, { signal });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const rows = await response.json();
  if (!Array.isArray(rows)) throw new Error('Expected a course array');
  return rows;
}
```

## Expected output
Resolves to the bundled course records, or rejects with an explanatory error.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Waits for the Promise without blocking the browser event loop.
- Line 3: Rejects this invalid or failed path instead of silently continuing.
- Line 4: Waits for the Promise without blocking the browser event loop.
- Line 5: Rejects this invalid or failed path instead of silently continuing.
- Line 6: Returns the value or UI for this branch.

## Internal behavior and data flow
fetch returns a Response first. JSON parsing is another asynchronous operation and can fail even after an HTTP success.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not blindly call response.json() for a 204 response or treat every resolved fetch as successful.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Load the local course fixture and show its title list. Independently test a malformed payload and a non-OK response.

<details>
<summary>Hint</summary>

Use a public base URL and encode dynamic path/query values. The default course fixture works locally with no service or API key.

</details>

## Exercise solution
```jsx
export async function readJson(response) {
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  if (response.status === 204) return null;
  return response.json();
}
```

fetch returns a Response first. JSON parsing is another asynchronous operation and can fail even after an HTTP success.

## Quiz
**What should you check before interpreting an HTTP response as success?**

1. Only the content length
2. response.ok or the expected status
3. Only whether fetch resolved

**Answer: 2.** response.ok or the expected status. fetch returns a Response first. JSON parsing is another asynchronous operation and can fail even after an HTTP success.

## Interview questions
- **Basic: What should you check before interpreting an HTTP response as success?**
  response.ok or the expected status
- **Intermediate: Explain the execution of the build a reliable fetch boundary example.**
  fetch returns a Response first. JSON parsing is another asynchronous operation and can fail even after an HTTP success.
- **Advanced: What mistake or trade-off would you watch for when applying build a reliable fetch boundary in a larger application?**
  Do not blindly call response.json() for a 204 response or treat every resolved fetch as successful.

## Summary
A small API client keeps transport details separate from presentation. fetch returns a Response first. JSON parsing is another asynchronous operation and can fail even after an HTTP success.

## Revision checklist
- [ ] Explain and apply fetch api and http methods/status codes.
- [ ] Explain and apply loading, success, empty, and error states.
- [ ] Explain and apply async operations.
- [ ] Explain and apply api configuration using vite environment variables.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Choose tools without overengineering](../12-context-state-management/12-03-choose-tools-without-overengineering.md)

Next: [Cancel obsolete work and avoid races](../13-api-async/13-02-cancel-obsolete-work-and-avoid-races.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `api-integration` `hooks` `useeffect` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
- [tanstack.com/query/latest/docs/framework/react/quick-start](https://tanstack.com/query/latest/docs/framework/react/quick-start)
