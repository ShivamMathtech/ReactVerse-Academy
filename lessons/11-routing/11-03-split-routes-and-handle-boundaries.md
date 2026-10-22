# Split routes and handle boundaries

> Chapter 11 · Routing with React Router · intermediate · 28 minutes

## Learning objectives
- Explain and apply protected-route concepts.
- Explain and apply lazy-loaded routes.
- Explain and apply route-level error handling.
- Explain and apply routing trade-offs.

## Prerequisites
[Keep navigable state in the URL](../11-routing/11-02-keep-navigable-state-in-the-url.md)

## Why this concept exists
Route splitting reduces initial work for visitors who never open every page.

## A useful analogy
The URL is a shareable address for application state; nested routes are rooms inside a common building.

## Concepts, syntax, and terminology
### Protected-route concepts
A client guard can redirect or hide UI for convenience, but it cannot enforce server authorization. A static demo must not pretend a local flag is secure authentication.

### Lazy-loaded routes
React.lazy and Suspense defer downloading a page module until needed. Declare lazy components at module scope. The imported module must expose the expected default component.

### Route-level error handling
Data routers support route error boundaries for loader/action failures. Declarative routers can wrap page elements in a React boundary; handle fetch failures explicitly in page state.

### Routing trade-offs
Hash routing avoids static-host rewrite requirements; BrowserRouter provides clean paths with appropriate hosting support. Neither is universally better.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { lazy, Suspense } from 'react';
const Reports = lazy(() => import('./Reports.jsx'));
export default function ReportsPage() {
  return <Suspense fallback={<p role="status">Loading reports…</p>}><Reports /></Suspense>;
}
```

## Expected output
After creating Reports.jsx with a default export, the fallback appears until its module is available.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Returns the value or UI for this branch.

## Internal behavior and data flow
lazy caches its import Promise and result. A rejected module import needs an error boundary; Suspense handles waiting, not all failures.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not claim a protected route secures an API. Verify permissions in a trusted service before returning protected data.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Create Reports.jsx and observe its separate network request. Independently add an error boundary around the Suspense region.

<details>
<summary>Hint</summary>

Hash routing avoids static-host rewrite requirements; BrowserRouter provides clean paths with appropriate hosting support. Neither is universally better.

</details>

## Exercise solution
```jsx
// Reports.jsx
export default function Reports() { return <h1>Learning report</h1>; }
// Import it with lazy(() => import('./Reports.jsx')) in the parent module.
```

lazy caches its import Promise and result. A rejected module import needs an error boundary; Suspense handles waiting, not all failures.

## Quiz
**Does hiding an admin route prevent unauthorized API calls?**

1. Yes, if the route is lazy
2. No; the server must enforce authorization
3. Yes, if the link is hidden

**Answer: 2.** No; the server must enforce authorization. lazy caches its import Promise and result. A rejected module import needs an error boundary; Suspense handles waiting, not all failures.

## Interview questions
- **Basic: Does hiding an admin route prevent unauthorized API calls?**
  No; the server must enforce authorization
- **Intermediate: Explain the execution of the split routes and handle boundaries example.**
  lazy caches its import Promise and result. A rejected module import needs an error boundary; Suspense handles waiting, not all failures.
- **Advanced: What mistake or trade-off would you watch for when applying split routes and handle boundaries in a larger application?**
  Do not claim a protected route secures an API. Verify permissions in a trusted service before returning protected data.

## Summary
Route splitting reduces initial work for visitors who never open every page. lazy caches its import Promise and result. A rejected module import needs an error boundary; Suspense handles waiting, not all failures.

## Revision checklist
- [ ] Explain and apply protected-route concepts.
- [ ] Explain and apply lazy-loaded routes.
- [ ] Explain and apply route-level error handling.
- [ ] Explain and apply routing trade-offs.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Keep navigable state in the URL](../11-routing/11-02-keep-navigable-state-in-the-url.md)

Next: [Place state deliberately](../12-context-state-management/12-01-place-state-deliberately.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `react-router` `routing` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [reactrouter.com/start/declarative/installation](https://reactrouter.com/start/declarative/installation)
