# Cancel obsolete work and avoid races

> Chapter 13 · API Integration and Asynchronous UI · intermediate · 56 minutes

## Learning objectives
- Explain and apply abortcontroller and request cancellation.
- Explain and apply race conditions.
- Explain and apply pagination and filtering.
- Explain and apply mock api examples that work locally.

## Prerequisites
[Build a reliable fetch boundary](../13-api-async/13-01-build-a-reliable-fetch-boundary.md)

## Why this concept exists
A user can change intent faster than a network response arrives.

## A useful analogy
A request is a parcel in transit: it can arrive late, fail, or become irrelevant because you requested something else.

## Concepts, syntax, and terminology
### AbortController and request cancellation
Create a controller for each synchronization and pass its signal to fetch. Cleanup aborts work that no longer belongs to the current view.

### Race conditions
An earlier request can finish after a later one and overwrite fresh data. Cancellation plus an active/request-identity guard prevents stale results from committing.

### Pagination and filtering
Include page and filters in the request identity. Reset page when query changes. Mock APIs should exercise the same visible states as remote calls.

### Mock API examples that work locally
This repository ships fixture JSON and a Promise-based simulator with success, empty, and error modes. Simulation is clearly labeled and never presented as live data.

### Beginner explanation
A response can arrive after you have moved on. Do not let yesterday’s question overwrite today’s answer.

### Intermediate explanation
Associate each request with its URL or query identity. Cleanup aborts the previous request; an active flag prevents noncancelable follow-up work from publishing an obsolete result.

### Advanced explanation
Cancellation saves resources when honored. Identity guards protect correctness even when completion cannot be prevented. For mutations, cancellation does not prove a server-side action was undone.

### Practical scenario and trade-off
Search quickly from A to B and resolve A last in a test. The visible data must still belong to B. This is more useful than adding an arbitrary delay and hoping ordering stays favorable.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useEffect, useState } from 'react';
export function useJson(url) {
  const [result, setResult] = useState({ status: 'loading', data: [] });
  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    setResult({ status: 'loading', data: [] });
    fetch(url, { signal: controller.signal }).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json();
    }).then(data => { if (active) setResult({ status: 'success', data }); })
      .catch(error => { if (active && error.name !== 'AbortError') setResult({ status: 'error', data: [] }); });
    return () => { active = false; controller.abort(); };
  }, [url]);
  return result;
}
```

## Expected output
The Hook returns loading, then success or error; obsolete requests cannot update its state.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Registers external synchronization after commit.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Defines the named binding from the expression on the right.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Rejects this invalid or failed path instead of silently continuing.
- Line 10: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 11: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 12: Returns cleanup to release the external resource.
- Line 13: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 14: Returns the value or UI for this branch.

## Internal behavior and data flow
The cleanup closes over the old active flag and controller. The next Effect creates its own pair, so only its current result is allowed to commit.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Ignoring cancellation can show the wrong record after quick navigation. Do not show an abort as a user-facing failure.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Test two requests that resolve in reverse order. Independently add an error message while keeping aborts silent.

<details>
<summary>Hint</summary>

Search quickly from A to B and resolve A last in a test. The visible data must still belong to B. This is more useful than adding an arbitrary delay and hoping ordering stays favorable.

</details>

## Exercise solution
```jsx
// In the catch branch, store a message only for the active request:
// setResult({ status: 'error', data: [], message: error.message });
// Keep cleanup setting active=false before controller.abort().
```

The cleanup closes over the old active flag and controller. The next Effect creates its own pair, so only its current result is allowed to commit.

## Quiz
**Why can a request-identity guard still be useful with cancellation?**

1. Abort always sorts responses
2. It makes requests synchronous
3. Some async work may not honor abort

**Answer: 3.** Some async work may not honor abort. The cleanup closes over the old active flag and controller. The next Effect creates its own pair, so only its current result is allowed to commit.

## Interview questions
- **Basic: Why can a request-identity guard still be useful with cancellation?**
  Some async work may not honor abort
- **Intermediate: Explain the execution of the cancel obsolete work and avoid races example.**
  The cleanup closes over the old active flag and controller. The next Effect creates its own pair, so only its current result is allowed to commit.
- **Advanced: What mistake or trade-off would you watch for when applying cancel obsolete work and avoid races in a larger application?**
  Ignoring cancellation can show the wrong record after quick navigation. Do not show an abort as a user-facing failure.

## Summary
A user can change intent faster than a network response arrives. The cleanup closes over the old active flag and controller. The next Effect creates its own pair, so only its current result is allowed to commit.

## Revision checklist
- [ ] Explain and apply abortcontroller and request cancellation.
- [ ] Explain and apply race conditions.
- [ ] Explain and apply pagination and filtering.
- [ ] Explain and apply mock api examples that work locally.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Build a reliable fetch boundary](../13-api-async/13-01-build-a-reliable-fetch-boundary.md)

Next: [Cache and update with TanStack Query](../13-api-async/13-03-cache-and-update-with-tanstack-query.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `api-integration` `hooks` `useeffect` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
- [tanstack.com/query/latest/docs/framework/react/quick-start](https://tanstack.com/query/latest/docs/framework/react/quick-start)
