# Create routes and shared layouts

> Chapter 11 · Routing with React Router · intermediate · 28 minutes

## Learning objectives
- Explain and apply client-side routing.
- Explain and apply browserrouter and route definitions.
- Explain and apply navigation links.
- Explain and apply nested layouts.

## Prerequisites
[Contain errors and refactor safely](../10-component-architecture/10-03-contain-errors-and-refactor-safely.md)

## Why this concept exists
Routing makes views addressable, reloadable, and understandable through browser history.

## A useful analogy
The URL is a shareable address for application state; nested routes are rooms inside a common building.

## Concepts, syntax, and terminology
### Client-side routing
A router maps a URL to UI without a full document navigation for each internal link. A static host still needs a fallback for browser-history URLs.

### BrowserRouter and route definitions
Wrap declarative Routes in BrowserRouter for pathname navigation. This repository defaults to HashRouter for portable static hosting; examples explain both.

### Navigation links
Link navigates internally; NavLink can expose active styling and aria-current. Use ordinary anchors for external sites.

### Nested layouts
A parent route renders Outlet where child content belongs. Shared navigation can remain mounted as the child route changes.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router';
function Layout() { return <><nav><Link to="/">Home</Link> <Link to="/about">About</Link></nav><Outlet /></>; }
export default function App() {
  return <BrowserRouter><Routes><Route element={<Layout />}>
    <Route index element={<h1>Home</h1>} />
    <Route path="about" element={<h1>About</h1>} />
  </Route></Routes></BrowserRouter>;
}
```

## Expected output
Home and About share navigation; clicking a Link changes the rendered page.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Returns the value or UI for this branch.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Returns the value or UI for this branch.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
The router observes history changes, matches route definitions, and renders the selected branch. Outlet marks the insertion point for nested routes.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not mount another BrowserRouter inside a component already under a router. A standalone example may own one; an embedded panel should use the existing router.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a Contact child route. Independently configure a server fallback and reload /about directly.

<details>
<summary>Hint</summary>

A parent route renders Outlet where child content belongs. Shared navigation can remain mounted as the child route changes.

</details>

## Exercise solution
```jsx
// Inside the existing parent route:
// <Route path="contact" element={<h1>Contact</h1>} />
// Inside navigation:
// <Link to="/contact">Contact</Link>
```

The router observes history changes, matches route definitions, and renders the selected branch. Outlet marks the insertion point for nested routes.

## Quiz
**What renders a nested route inside its parent layout?**

1. Fragment
2. useState
3. Outlet

**Answer: 3.** Outlet. The router observes history changes, matches route definitions, and renders the selected branch. Outlet marks the insertion point for nested routes.

## Interview questions
- **Basic: What renders a nested route inside its parent layout?**
  Outlet
- **Intermediate: Explain the execution of the create routes and shared layouts example.**
  The router observes history changes, matches route definitions, and renders the selected branch. Outlet marks the insertion point for nested routes.
- **Advanced: What mistake or trade-off would you watch for when applying create routes and shared layouts in a larger application?**
  Do not mount another BrowserRouter inside a component already under a router. A standalone example may own one; an embedded panel should use the existing router.

## Summary
Routing makes views addressable, reloadable, and understandable through browser history. The router observes history changes, matches route definitions, and renders the selected branch. Outlet marks the insertion point for nested routes.

## Revision checklist
- [ ] Explain and apply client-side routing.
- [ ] Explain and apply browserrouter and route definitions.
- [ ] Explain and apply navigation links.
- [ ] Explain and apply nested layouts.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Contain errors and refactor safely](../10-component-architecture/10-03-contain-errors-and-refactor-safely.md)

Next: [Keep navigable state in the URL](../11-routing/11-02-keep-navigable-state-in-the-url.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `react-router` `routing` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [reactrouter.com/start/declarative/installation](https://reactrouter.com/start/declarative/installation)
