# Choose an owner for changing data

> Chapter 05 · Props and Data Flow · beginner · 21 minutes

## Learning objectives
- Explain and apply props versus state.
- Explain and apply common mistakes.
- Explain and apply data-flow design.

## Prerequisites
[Use children for flexible composition](../05-props-data-flow/05-02-use-children-for-flexible-composition.md)

## Why this concept exists
A single source of truth prevents multiple copies of the same information drifting apart.

## A useful analogy
Props are a delivery envelope from a parent; the receiving component reads it without rewriting its contents.

## Concepts, syntax, and terminology
### Props versus state
Props arrive from a parent; state belongs to the component that owns the changing value. A child may derive display values from props without storing another copy.

### Common mistakes
Copying a prop into state only initializes it; later prop changes do not automatically synchronize that state. Use a controlled API or a deliberate reset when needed.

### Data-flow design
Keep the smallest authoritative state. For a selected product, store its ID and derive the product from the current list; this avoids stale duplicate records.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
function Price({ cents, quantity }) {
  const total = (cents * quantity / 100).toFixed(2);
  return <output>₹{total}</output>;
}
export default function App() { return <Price cents={12500} quantity={2} />; }
```

## Expected output
₹250.00

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Returns the value or UI for this branch.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
Derived values recalculate during render. There is no need for an Effect to multiply two props or a second state value for the total.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Incorrect: store total independently and update it in several handlers. Correct: calculate total from price and quantity.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a discountPercent prop and derive the final amount. Independently explain which component should own a cart quantity shared by two views.

<details>
<summary>Hint</summary>

Keep the smallest authoritative state. For a selected product, store its ID and derive the product from the current list; this avoids stale duplicate records.

</details>

## Exercise solution
```jsx
function Price({ cents, quantity, discountPercent = 0 }) {
  const total = cents * quantity * (1 - discountPercent / 100);
  return <output>₹{(total / 100).toFixed(2)}</output>;
}
export default function App() { return <Price cents={10000} quantity={2} discountPercent={10} />; }
```

Derived values recalculate during render. There is no need for an Effect to multiply two props or a second state value for the total.

## Quiz
**Which value usually does not need its own state?**

1. The selected tab
2. A total calculated from current props
3. User-entered search text

**Answer: 2.** A total calculated from current props. Derived values recalculate during render. There is no need for an Effect to multiply two props or a second state value for the total.

## Interview questions
- **Basic: Which value usually does not need its own state?**
  A total calculated from current props
- **Intermediate: Explain the execution of the choose an owner for changing data example.**
  Derived values recalculate during render. There is no need for an Effect to multiply two props or a second state value for the total.
- **Advanced: What mistake or trade-off would you watch for when applying choose an owner for changing data in a larger application?**
  Incorrect: store total independently and update it in several handlers. Correct: calculate total from price and quantity.

## Summary
A single source of truth prevents multiple copies of the same information drifting apart. Derived values recalculate during render. There is no need for an Effect to multiply two props or a second state value for the total.

## Revision checklist
- [ ] Explain and apply props versus state.
- [ ] Explain and apply common mistakes.
- [ ] Explain and apply data-flow design.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Use children for flexible composition](../05-props-data-flow/05-02-use-children-for-flexible-composition.md)

Next: [Respond to events with state](../06-state-events/06-01-respond-to-events-with-state.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `props` `components` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
