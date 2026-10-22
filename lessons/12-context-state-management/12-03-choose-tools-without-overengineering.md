# Choose tools without overengineering

> Chapter 12 · Context and State Management · intermediate · 56 minutes

## Learning objectives
- Explain and apply server state versus client state.
- Explain and apply redux toolkit concepts.
- Explain and apply lightweight state-management alternatives.
- Explain and apply choosing the right approach.

## Prerequisites
[Combine reducers and normalized state](../12-context-state-management/12-02-combine-reducers-and-normalized-state.md)

## Why this concept exists
Tools should solve observed coordination problems rather than add layers for their own sake.

## A useful analogy
Local state is a personal notebook; Context is a shared noticeboard; cached server data is a copy of an external record.

## Concepts, syntax, and terminology
### Server state versus client state
Remote data has freshness, retries, invalidation, and shared ownership concerns. A selected tab is client state. Treating both identically can create unnecessary cache logic.

### Redux Toolkit concepts
A store contains shared state; slices define reducers and actions. Redux Toolkit uses Immer for mutation-like reducer syntax, which is not permission to mutate ordinary React state. It is discussed here, not installed.

### Lightweight state-management alternatives
Context plus useReducer, useSyncExternalStore-based stores, and libraries such as Zustand offer different subscription and tooling trade-offs. Evaluate requirements before adding dependencies.

### Choosing the right approach
Begin local, lift when needed, add Context for distribution, and use a server-state library for real caching requirements. Team debugging needs and update frequency matter.

### Beginner explanation
Start by keeping state where it is used. Share it only when more than one part of the UI needs coordinated access.

### Intermediate explanation
Context distributes a value; it does not supply request caching or automatically select a tiny part of a large state object. Server data also has freshness and invalidation needs.

### Advanced explanation
Subscription granularity, write frequency, debugging tools, and team conventions influence store choice. Normalized entity state and a query cache may coexist, but define which is authoritative.

### Practical scenario and trade-off
A theme fits Context; an input draft usually stays local; a remote paginated catalog fits a cache keyed by filters. Extra libraries are useful only when their policy replaces real complexity.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
const statePlan = {
  draftTitle: 'local component state',
  selectedTaskId: 'URL or nearest shared parent',
  theme: 'context and local preference storage',
  remoteCourses: 'query cache with freshness policy',
};
console.table(statePlan);
```

## Expected output
A table mapping each kind of value to a suitable owner.

## Line-by-line walkthrough
- Line 1: Defines the named binding from the expression on the right.
- Line 2: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 7: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
Context distributes a value; Redux-style stores coordinate transitions and subscriptions; query libraries also model asynchronous cache lifecycles. These are overlapping, not identical, responsibilities.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not store the same remote record in several independent client stores without a clear synchronization policy.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Classify five values in your capstone by ownership. Independently explain when introducing a global store would reduce complexity.

<details>
<summary>Hint</summary>

A theme fits Context; an input draft usually stays local; a remote paginated catalog fits a cache keyed by filters. Extra libraries are useful only when their policy replaces real complexity.

</details>

## Exercise solution
```js
const cart = { owner: 'shared reducer', persistence: 'browser-local demo' };
const catalog = { owner: 'query cache', invalidation: 'after server mutation' };
console.log(cart, catalog);
```

Context distributes a value; Redux-style stores coordinate transitions and subscriptions; query libraries also model asynchronous cache lifecycles. These are overlapping, not identical, responsibilities.

## Quiz
**Which concern is characteristic of server state?**

1. Which tooltip is open
2. The current input focus
3. Freshness and cache invalidation

**Answer: 3.** Freshness and cache invalidation. Context distributes a value; Redux-style stores coordinate transitions and subscriptions; query libraries also model asynchronous cache lifecycles. These are overlapping, not identical, responsibilities.

## Interview questions
- **Basic: Which concern is characteristic of server state?**
  Freshness and cache invalidation
- **Intermediate: Explain the execution of the choose tools without overengineering example.**
  Context distributes a value; Redux-style stores coordinate transitions and subscriptions; query libraries also model asynchronous cache lifecycles. These are overlapping, not identical, responsibilities.
- **Advanced: What mistake or trade-off would you watch for when applying choose tools without overengineering in a larger application?**
  Do not store the same remote record in several independent client stores without a clear synchronization policy.

## Summary
Tools should solve observed coordination problems rather than add layers for their own sake. Context distributes a value; Redux-style stores coordinate transitions and subscriptions; query libraries also model asynchronous cache lifecycles. These are overlapping, not identical, responsibilities.

## Revision checklist
- [ ] Explain and apply server state versus client state.
- [ ] Explain and apply redux toolkit concepts.
- [ ] Explain and apply lightweight state-management alternatives.
- [ ] Explain and apply choosing the right approach.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Combine reducers and normalized state](../12-context-state-management/12-02-combine-reducers-and-normalized-state.md)

Next: [Build a reliable fetch boundary](../13-api-async/13-01-build-a-reliable-fetch-boundary.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `state` `usecontext` `usereducer` `industry-practices` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [redux-toolkit.js.org/introduction/getting-started](https://redux-toolkit.js.org/introduction/getting-started)
