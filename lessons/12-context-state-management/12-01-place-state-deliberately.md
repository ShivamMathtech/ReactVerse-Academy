# Place state deliberately

> Chapter 12 · Context and State Management · intermediate · 28 minutes

## Learning objectives
- Explain and apply prop drilling.
- Explain and apply context api.
- Explain and apply when context is appropriate.
- Explain and apply local versus shared state.

## Prerequisites
[Split routes and handle boundaries](../11-routing/11-03-split-routes-and-handle-boundaries.md)

## Why this concept exists
Context solves distribution, while careful ownership still determines how values change.

## A useful analogy
Local state is a personal notebook; Context is a shared noticeboard; cached server data is a copy of an external record.

## Concepts, syntax, and terminology
### Prop drilling
Passing a value through many unrelated components can obscure intent. Before adding Context, consider composition that passes the needed content directly.

### Context API
createContext defines a channel; a provider supplies a value and useContext reads the closest provider. Default values apply when no provider exists.

### When Context is appropriate
Use it for a theme, locale, or shared feature state needed across a subtree. High-frequency broad updates may benefit from finer subscriptions.

### Local versus shared state
Keep a field draft local unless another view must coordinate with it. Lifting everything globally increases coupling.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { createContext, useContext } from 'react';
const ThemeContext = createContext('light');
function Badge() { return <p>Theme: {useContext(ThemeContext)}</p>; }
export default function App() {
  return <ThemeContext.Provider value="dark"><Badge /></ThemeContext.Provider>;
}
```

## Expected output
Theme: dark

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Returns the value or UI for this branch.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
React finds the nearest matching provider. When its value changes, consumers reading that context can render again even if unrelated props are memoized.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not create a Context inside render; that creates a different channel each time. Define it at module scope.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a nested light provider and compare two badges. Independently keep a search draft outside the theme context.

<details>
<summary>Hint</summary>

Keep a field draft local unless another view must coordinate with it. Lifting everything globally increases coupling.

</details>

## Exercise solution
```jsx
// Using ThemeContext and Badge from the example:
// <ThemeContext.Provider value="dark">
//   <Badge />
//   <ThemeContext.Provider value="light"><Badge /></ThemeContext.Provider>
// </ThemeContext.Provider>
```

React finds the nearest matching provider. When its value changes, consumers reading that context can render again even if unrelated props are memoized.

## Quiz
**Which provider value does a consumer read?**

1. The nearest matching provider
2. Always the outermost
3. A random provider

**Answer: 1.** The nearest matching provider. React finds the nearest matching provider. When its value changes, consumers reading that context can render again even if unrelated props are memoized.

## Interview questions
- **Basic: Which provider value does a consumer read?**
  The nearest matching provider
- **Intermediate: Explain the execution of the place state deliberately example.**
  React finds the nearest matching provider. When its value changes, consumers reading that context can render again even if unrelated props are memoized.
- **Advanced: What mistake or trade-off would you watch for when applying place state deliberately in a larger application?**
  Do not create a Context inside render; that creates a different channel each time. Define it at module scope.

## Summary
Context solves distribution, while careful ownership still determines how values change. React finds the nearest matching provider. When its value changes, consumers reading that context can render again even if unrelated props are memoized.

## Revision checklist
- [ ] Explain and apply prop drilling.
- [ ] Explain and apply context api.
- [ ] Explain and apply when context is appropriate.
- [ ] Explain and apply local versus shared state.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Split routes and handle boundaries](../11-routing/11-03-split-routes-and-handle-boundaries.md)

Next: [Combine reducers and normalized state](../12-context-state-management/12-02-combine-reducers-and-normalized-state.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `state` `usecontext` `usereducer` `industry-practices` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [redux-toolkit.js.org/introduction/getting-started](https://redux-toolkit.js.org/introduction/getting-started)
