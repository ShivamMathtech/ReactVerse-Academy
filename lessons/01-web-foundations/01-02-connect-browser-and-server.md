# Connect browser and server

> Chapter 01 · Web Development Foundations · beginner · 21 minutes

## Learning objectives
- Explain and apply javascript execution in browsers.
- Explain and apply http basics.
- Explain and apply client-server architecture.

## Prerequisites
[Build a meaningful document](../01-web-foundations/01-01-build-a-meaningful-document.md)

## Why this concept exists
Network boundaries explain why UI needs loading, failure, and permission states.

## A useful analogy
HTML is the structure of a classroom, CSS arranges it, and JavaScript responds when someone interacts.

## Concepts, syntax, and terminology
### JavaScript execution in browsers
Scripts execute on the main thread unless explicitly moved to a worker. Long synchronous tasks delay input and rendering. Modules have their own scope.

### HTTP basics
A request has a method, URL, headers, and possibly a body. A response has a status, headers, and body. GET reads; POST commonly creates. A 404 is an HTTP response, not a network rejection.

### Client-server architecture
The browser presents UI and sends requests. A server controls trusted data and authorization. A static React bundle cannot keep secrets or enforce permissions.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
async function loadText() {
  const response = await fetch('/data/courses.json');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const courses = await response.json();
  console.log(courses.length);
}
loadText().catch(console.error);
```

## Expected output
Logs the number of records in the bundled courses fixture, or an error when unavailable.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Waits for the Promise without blocking the browser event loop.
- Line 3: Rejects this invalid or failed path instead of silently continuing.
- Line 4: Waits for the Promise without blocking the browser event loop.
- Line 5: Prints the observable value so you can compare it with the expected output.
- Line 7: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
await yields control while the Promise is pending. fetch resolves on HTTP error statuses, so response.ok must be checked separately.



## Common mistakes: incorrect versus correct
Do not treat a client-side role flag as authorization. A trusted service must verify access for each protected operation.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Use the Network panel to inspect the local JSON response. Independently change the URL to a missing file and explain the difference between HTTP and JSON parsing errors.

<details>
<summary>Hint</summary>

The browser presents UI and sends requests. A server controls trusted data and authorization. A static React bundle cannot keep secrets or enforce permissions.

</details>

## Exercise solution
```js
fetch('/data/courses.json')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then(rows => console.log(rows.length))
  .catch(error => console.error(error.message));
```

await yields control while the Promise is pending. fetch resolves on HTTP error statuses, so response.ok must be checked separately.

## Quiz
**Does fetch reject solely because a server responds 404?**

1. Yes, always
2. Only with GET
3. No; inspect response.ok

**Answer: 3.** No; inspect response.ok. await yields control while the Promise is pending. fetch resolves on HTTP error statuses, so response.ok must be checked separately.

## Interview questions
- **Basic: Does fetch reject solely because a server responds 404?**
  No; inspect response.ok
- **Intermediate: Explain the execution of the connect browser and server example.**
  await yields control while the Promise is pending. fetch resolves on HTTP error statuses, so response.ok must be checked separately.
- **Advanced: What mistake or trade-off would you watch for when applying connect browser and server in a larger application?**
  Do not treat a client-side role flag as authorization. A trusted service must verify access for each protected operation.

## Summary
Network boundaries explain why UI needs loading, failure, and permission states. await yields control while the Promise is pending. fetch resolves on HTTP error statuses, so response.ok must be checked separately.

## Revision checklist
- [ ] Explain and apply javascript execution in browsers.
- [ ] Explain and apply http basics.
- [ ] Explain and apply client-server architecture.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Build a meaningful document](../01-web-foundations/01-01-build-a-meaningful-document.md)

Next: [Inspect and collaborate](../01-web-foundations/01-03-inspect-and-collaborate.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `html` `css` `javascript` `accessibility` `frontend-fundamentals` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
