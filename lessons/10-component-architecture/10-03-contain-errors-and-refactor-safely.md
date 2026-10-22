# Contain errors and refactor safely

> Chapter 10 · Component Architecture · intermediate · 21 minutes

## Learning objectives
- Explain and apply error boundaries.
- Explain and apply feature-based folder structures.
- Explain and apply refactoring large components.

## Prerequisites
[Design controlled component APIs](../10-component-architecture/10-02-design-controlled-component-apis.md)

## Why this concept exists
An isolated failure should not necessarily erase the whole application.

## A useful analogy
Good component boundaries resemble departments with clear responsibilities and small, explicit handoffs.

## Concepts, syntax, and terminology
### Error boundaries
A boundary catches descendant render/lifecycle errors and renders fallback UI. It does not automatically catch event-handler errors or arbitrary async rejection. Catch those at their operation boundary.

### Feature-based folder structures
Group related UI, data logic, and tests by feature when a project grows. Shared folders should contain actual cross-feature contracts rather than every utility.

### Refactoring large components
Preserve behavior with tests, extract pure calculations first, then split UI and ownership. Change one boundary at a time.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { Component } from 'react';
export class Boundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? <p role="alert">This panel could not render.</p> : this.props.children;
  }
}
export default function App() { return <Boundary><p>Healthy panel</p></Boundary>; }
```

## Expected output
Healthy panel; a throwing descendant would instead show the fallback.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Returns the value or UI for this branch.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Returns the value or UI for this branch.
- Line 9: Returns the value or UI for this branch.

## Internal behavior and data flow
An error boundary participates in React render recovery. A Promise callback outside rendering has a different execution path and needs explicit rejection handling.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not promise that a boundary catches every error. Use try/catch in async operations and explicit validation at external boundaries.

## Practical use case
Use this concept when building interactive profile card. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Wrap a component that throws to test the fallback. Independently add a reset mechanism by remounting the boundary with a new key.

<details>
<summary>Hint</summary>

Preserve behavior with tests, extract pure calculations first, then split UI and ownership. Change one boundary at a time.

</details>

## Exercise solution
```jsx
function BrokenPanel() { throw new Error('Demonstration failure'); }
// Render <Boundary><BrokenPanel /></Boundary> to inspect fallback.
// A parent can change <Boundary key={retryVersion}> to reset its state.
```

An error boundary participates in React render recovery. A Promise callback outside rendering has a different execution path and needs explicit rejection handling.

## Quiz
**Which failure is not automatically caught by a React error boundary?**

1. An event-handler exception
2. A descendant render exception
3. A descendant constructor exception

**Answer: 1.** An event-handler exception. An error boundary participates in React render recovery. A Promise callback outside rendering has a different execution path and needs explicit rejection handling.

## Interview questions
- **Basic: Which failure is not automatically caught by a React error boundary?**
  An event-handler exception
- **Intermediate: Explain the execution of the contain errors and refactor safely example.**
  An error boundary participates in React render recovery. A Promise callback outside rendering has a different execution path and needs explicit rejection handling.
- **Advanced: What mistake or trade-off would you watch for when applying contain errors and refactor safely in a larger application?**
  Do not promise that a boundary catches every error. Use try/catch in async operations and explicit validation at external boundaries.

## Summary
An isolated failure should not necessarily erase the whole application. An error boundary participates in React render recovery. A Promise callback outside rendering has a different execution path and needs explicit rejection handling.

## Revision checklist
- [ ] Explain and apply error boundaries.
- [ ] Explain and apply feature-based folder structures.
- [ ] Explain and apply refactoring large components.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Design controlled component APIs](../10-component-architecture/10-02-design-controlled-component-apis.md)

Next: [Create routes and shared layouts](../11-routing/11-01-create-routes-and-shared-layouts.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `components` `props` `industry-practices` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
