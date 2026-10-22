# Combine reducers and normalized state

> Chapter 12 · Context and State Management · intermediate · 21 minutes

## Learning objectives
- Explain and apply usereducer with context.
- Explain and apply state normalization.
- Explain and apply reducer design.

## Prerequisites
[Place state deliberately](../12-context-state-management/12-01-place-state-deliberately.md)

## Why this concept exists
Named transitions make a growing workflow inspectable and testable.

## A useful analogy
Local state is a personal notebook; Context is a shared noticeboard; cached server data is a copy of an external record.

## Concepts, syntax, and terminology
### useReducer with Context
A provider can own a reducer and expose state plus dispatch. Separate contexts for state and dispatch can avoid forcing dispatch-only consumers to subscribe to state.

### State normalization
Store entities by ID and reference them by ID from lists. Updating one record then changes one canonical object instead of several inconsistent copies.

### Reducer design
Actions describe domain events such as task/completed. A reducer returns the next value from state and action and performs no network or storage side effects.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
export function reducer(state, action) {
  if (action.type !== 'task/completed') return state;
  const task = state.byId[action.id];
  if (!task) return state;
  return { ...state, byId: { ...state.byId,
    [action.id]: { ...task, done: true } } };
}
const state = { ids: ['a'], byId: { a: { id: 'a', done: false } } };
console.log(reducer(state, { type: 'task/completed', id: 'a' }).byId.a.done);
```

## Expected output
true; the original task remains unchanged.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Returns the value or UI for this branch.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Returns the value or UI for this branch.
- Line 5: Returns the value or UI for this branch.
- Line 6: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Defines the named binding from the expression on the right.
- Line 9: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
A reducer computes new references along changed paths and preserves unaffected references. Normalization makes the location of a record unambiguous.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not call fetch or localStorage.setItem inside the reducer. Perform effects outside and dispatch their outcomes.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add task/renamed with a title payload. Independently reject an empty title without changing the original state.

<details>
<summary>Hint</summary>

Actions describe domain events such as task/completed. A reducer returns the next value from state and action and performs no network or storage side effects.

</details>

## Exercise solution
```js
export function rename(state, id, title) {
  if (!state.byId[id] || !title.trim()) return state;
  return { ...state, byId: { ...state.byId, [id]: { ...state.byId[id], title: title.trim() } } };
}
```

A reducer computes new references along changed paths and preserves unaffected references. Normalization makes the location of a record unambiguous.

## Quiz
**Which operation belongs outside a reducer?**

1. Returning unchanged state
2. Sending an HTTP request
3. Calculating a new array

**Answer: 2.** Sending an HTTP request. A reducer computes new references along changed paths and preserves unaffected references. Normalization makes the location of a record unambiguous.

## Interview questions
- **Basic: Which operation belongs outside a reducer?**
  Sending an HTTP request
- **Intermediate: Explain the execution of the combine reducers and normalized state example.**
  A reducer computes new references along changed paths and preserves unaffected references. Normalization makes the location of a record unambiguous.
- **Advanced: What mistake or trade-off would you watch for when applying combine reducers and normalized state in a larger application?**
  Do not call fetch or localStorage.setItem inside the reducer. Perform effects outside and dispatch their outcomes.

## Summary
Named transitions make a growing workflow inspectable and testable. A reducer computes new references along changed paths and preserves unaffected references. Normalization makes the location of a record unambiguous.

## Revision checklist
- [ ] Explain and apply usereducer with context.
- [ ] Explain and apply state normalization.
- [ ] Explain and apply reducer design.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Place state deliberately](../12-context-state-management/12-01-place-state-deliberately.md)

Next: [Choose tools without overengineering](../12-context-state-management/12-03-choose-tools-without-overengineering.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `state` `usecontext` `usereducer` `industry-practices` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [redux-toolkit.js.org/introduction/getting-started](https://redux-toolkit.js.org/introduction/getting-started)
