# Keep navigable state in the URL

> Chapter 11 · Routing with React Router · intermediate · 28 minutes

## Learning objectives
- Explain and apply route parameters.
- Explain and apply search parameters.
- Explain and apply not-found pages.
- Explain and apply url-driven application state.

## Prerequisites
[Create routes and shared layouts](../11-routing/11-01-create-routes-and-shared-layouts.md)

## Why this concept exists
A copied URL should reproduce the same meaningful filtered view.

## A useful analogy
The URL is a shareable address for application state; nested routes are rooms inside a common building.

## Concepts, syntax, and terminology
### Route parameters
A segment such as lessons/:lessonId supplies a string via useParams. Validate it and show a useful not-found state when the record does not exist.

### Search parameters
useSearchParams reads and updates query values. Store shareable filters and page numbers here, while transient input focus belongs locally.

### Not-found pages
A wildcard route handles unmatched paths. A matched route with a missing record still needs its own missing-record branch.

### URL-driven application state
Use one source of truth. Derive filters from search params and update those params rather than maintaining a second divergent state.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useSearchParams } from 'react-router';
export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  return <label>Search <input value={query} onChange={e => {
    const next = new URLSearchParams(params);
    next.set('q', e.target.value); next.delete('page');
    setParams(next, { replace: true });
  }} /></label>;
}
```

## Expected output
Within a router, typing updates the q parameter and removes a stale page parameter.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Returns the value or UI for this branch.
- Line 6: Defines the named binding from the expression on the right.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Search params are strings. Parse numeric values defensively and clamp invalid pages instead of trusting arbitrary query text.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not replace all parameters when editing one filter unless intentionally clearing the others. Clone and update the current URLSearchParams.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a technology parameter while retaining q. Independently handle a non-numeric page parameter as page 1.

<details>
<summary>Hint</summary>

Use one source of truth. Derive filters from search params and update those params rather than maintaining a second divergent state.

</details>

## Exercise solution
```jsx
const params = new URLSearchParams('?q=hooks&page=wrong');
const parsed = Number(params.get('page') ?? 1);
const page = Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
params.set('technology', 'react');
console.log(page, params.toString());
```

Search params are strings. Parse numeric values defensively and clamp invalid pages instead of trusting arbitrary query text.

## Quiz
**Which state belongs naturally in a shareable URL?**

1. Search filters and page number
2. A secret access token
3. The currently focused DOM node

**Answer: 1.** Search filters and page number. Search params are strings. Parse numeric values defensively and clamp invalid pages instead of trusting arbitrary query text.

## Interview questions
- **Basic: Which state belongs naturally in a shareable URL?**
  Search filters and page number
- **Intermediate: Explain the execution of the keep navigable state in the url example.**
  Search params are strings. Parse numeric values defensively and clamp invalid pages instead of trusting arbitrary query text.
- **Advanced: What mistake or trade-off would you watch for when applying keep navigable state in the url in a larger application?**
  Do not replace all parameters when editing one filter unless intentionally clearing the others. Clone and update the current URLSearchParams.

## Summary
A copied URL should reproduce the same meaningful filtered view. Search params are strings. Parse numeric values defensively and clamp invalid pages instead of trusting arbitrary query text.

## Revision checklist
- [ ] Explain and apply route parameters.
- [ ] Explain and apply search parameters.
- [ ] Explain and apply not-found pages.
- [ ] Explain and apply url-driven application state.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Create routes and shared layouts](../11-routing/11-01-create-routes-and-shared-layouts.md)

Next: [Split routes and handle boundaries](../11-routing/11-03-split-routes-and-handle-boundaries.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `react-router` `routing` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [reactrouter.com/start/declarative/installation](https://reactrouter.com/start/declarative/installation)
