# Cache and update with TanStack Query

> Chapter 13 · API Integration and Asynchronous UI · intermediate · 28 minutes

## Learning objectives
- Explain and apply data caching concepts.
- Explain and apply tanstack query concepts and practical examples.
- Explain and apply optimistic updates.
- Explain and apply trade-offs.

## Prerequisites
[Cancel obsolete work and avoid races](../13-api-async/13-02-cancel-obsolete-work-and-avoid-races.md)

## Why this concept exists
Caching coordinates repeated reads across views and provides explicit invalidation after writes.

## A useful analogy
A request is a parcel in transit: it can arrive late, fail, or become irrelevant because you requested something else.

## Concepts, syntax, and terminology
### Data caching concepts
A cache key identifies the data, including relevant filters. Freshness is a policy, not proof that remote data cannot change. Distinguish pending from background refetching.

### TanStack Query concepts and practical examples
A QueryClientProvider supplies the cache. useQuery accepts queryKey and queryFn; the query function must reject on failure. staleTime controls freshness expectations.

### Optimistic updates
Show a likely change before confirmation, snapshot previous cache data, and roll back on failure. Cancel conflicting reads and invalidate afterward. Use this only when reconciliation is well defined.

### Trade-offs
Caching libraries remove repetitive async state code but introduce policies to understand. A single static fixture does not require a cache; the runnable query example exists to teach the behavior.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
const client = new QueryClient();
function Courses() {
  const query = useQuery({ queryKey: ['courses'], staleTime: 60000,
    queryFn: async ({ signal }) => {
      const r = await fetch(`${import.meta.env.BASE_URL}data/courses.json`, { signal });
      if (!r.ok) throw new Error('Course request failed'); return r.json();
    } });
  if (query.isPending) return <p>Loading…</p>;
  if (query.isError) return <button onClick={() => query.refetch()}>Retry</button>;
  return <p>{query.data.length} courses</p>;
}
export default function App() { return <QueryClientProvider client={client}><Courses /></QueryClientProvider>; }
```

## Expected output
A loading message followed by the local course count; repeated mounts can use the cache.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Waits for the Promise without blocking the browser event loop.
- Line 7: Rejects this invalid or failed path instead of silently continuing.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Returns the value or UI for this branch.
- Line 10: Returns the value or UI for this branch.
- Line 11: Returns the value or UI for this branch.
- Line 13: Returns the value or UI for this branch.

## Internal behavior and data flow
Query keys address cached results. The query function receives an AbortSignal; forwarding it allows the library to cancel its underlying fetch.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not create a new QueryClient inside every render or omit a filter from the query key.

## Practical use case
Use this concept when building digital clock. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a category to the query key. Independently sketch optimistic rollback for a renamed course and explain conflicting updates.

<details>
<summary>Hint</summary>

Caching libraries remove repetitive async state code but introduce policies to understand. A single static fixture does not require a cache; the runnable query example exists to teach the behavior.

</details>

## Exercise solution
```jsx
// A filter is part of identity:
// useQuery({ queryKey: ['courses', category], queryFn: ({ signal }) => loadCourses(category, signal) });
// After a confirmed mutation:
// queryClient.invalidateQueries({ queryKey: ['courses'] });
```

Query keys address cached results. The query function receives an AbortSignal; forwarding it allows the library to cancel its underlying fetch.

## Quiz
**What must be included in a query key when it changes the returned data?**

1. The relevant filter
2. A random number on each render
3. The JSX component tree

**Answer: 1.** The relevant filter. Query keys address cached results. The query function receives an AbortSignal; forwarding it allows the library to cancel its underlying fetch.

## Interview questions
- **Basic: What must be included in a query key when it changes the returned data?**
  The relevant filter
- **Intermediate: Explain the execution of the cache and update with tanstack query example.**
  Query keys address cached results. The query function receives an AbortSignal; forwarding it allows the library to cancel its underlying fetch.
- **Advanced: What mistake or trade-off would you watch for when applying cache and update with tanstack query in a larger application?**
  Do not create a new QueryClient inside every render or omit a filter from the query key.

## Summary
Caching coordinates repeated reads across views and provides explicit invalidation after writes. Query keys address cached results. The query function receives an AbortSignal; forwarding it allows the library to cancel its underlying fetch.

## Revision checklist
- [ ] Explain and apply data caching concepts.
- [ ] Explain and apply tanstack query concepts and practical examples.
- [ ] Explain and apply optimistic updates.
- [ ] Explain and apply trade-offs.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Cancel obsolete work and avoid races](../13-api-async/13-02-cancel-obsolete-work-and-avoid-races.md)

Next: [Build responsive layouts](../14-styling-ui/14-01-build-responsive-layouts.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `api-integration` `hooks` `useeffect` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [react.dev/reference/react/hooks](https://react.dev/reference/react/hooks)
- [tanstack.com/query/latest/docs/framework/react/quick-start](https://tanstack.com/query/latest/docs/framework/react/quick-start)
