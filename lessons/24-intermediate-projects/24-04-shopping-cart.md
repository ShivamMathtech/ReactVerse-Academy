# Shopping cart

> Chapter 24 · Intermediate Projects · intermediate · 90 minutes

## Learning objectives
- Explain and apply problem statement.
- Explain and apply feature contract.
- Explain and apply architecture and folder structure.
- Explain and apply implementation steps.

## Prerequisites
[Notes application](../24-intermediate-projects/24-03-notes-application.md)

## Why this concept exists
This project connects usereducer, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss.

## A useful analogy
A project is an integration rehearsal: each small feature must cooperate with the others and survive a changed input.

## Concepts, syntax, and terminology
### Problem statement
Manage quantities and derived totals for a local product catalog.

### Feature contract
Add products. Update quantity and remove. Integer-cent totals.

### Architecture and folder structure
projects/intermediate/shopping-cart/App.jsx owns the feature UI. main.jsx mounts it and index.html is its standalone Vite entry. Shared project styles and validated persistence/API helpers live in projects/shared. The root package and lockfile supply dependencies; no nested install is required.

### Implementation steps
Read the existing state shape and identify its authoritative owner. Trace an input handler through the update and render path. Run each feature in the contract, then test an empty, invalid, and repeated operation. Change one requirement and rerun the affected test.

### Testing strategy
Render Shopping cart and drive its labeled controls using userEvent. Assert visible outcomes for add products. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

## Small example
This is a source excerpt. The **complete runnable code** is in [the project directory](../../projects/intermediate/shopping-cart/README.md).

```jsx
import { useReducer } from 'react';
import { products, money } from '../../shared/api';
export function cartReducer(state, action) {
  if (action.type === 'clear') return {};
  if (action.type === 'add')
    return { ...state, [action.id]: Math.min(99, (state[action.id] || 0) + 1) };
  if (action.type === 'quantity') {
    const next = { ...state };
    if (action.quantity <= 0) delete next[action.id];
    else next[action.id] = Math.min(99, action.quantity);
    return next;
  }
  return state;
}
export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, {});
  const total = products.reduce((sum, p) => sum + p.cents * (cart[p.id] || 0), 0);
  return (
    <div className="grid">
      <section>
        <h2>Products</h2>
        {products.map((p) => (
          <article className="panel row between" key={p.id}>
            <span>
```

## Expected output
Open projects/intermediate/shopping-cart/index.html using the root Vite server. The complete executable implementation is included at projects/intermediate/shopping-cart; its documented controls implement: Add products, Update quantity and remove, Integer-cent totals.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Returns the value or UI for this branch.
- Line 5: Chooses whether the guarded branch should run.
- Line 6: Returns the value or UI for this branch.
- Line 7: Chooses whether the guarded branch should run.
- Line 8: Defines the named binding from the expression on the right.
- Line 9: Chooses whether the guarded branch should run.
- Line 10: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 11: Returns the value or UI for this branch.
- Line 13: Returns the value or UI for this branch.
- Line 15: Defines a named operation; it runs when called or rendered.
- Line 16: Defines the named binding from the expression on the right.
- Line 17: Defines the named binding from the expression on the right.
- Line 18: Returns the value or UI for this branch.
- Line 19: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 20: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 21: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 22: Transforms each matching item into a new value or element.
- Line 23: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 24: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.



## Common mistakes: incorrect versus correct
Do not treat the shopping cart as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Practical use case
Manage quantities and derived totals for a local product catalog.

## Guided exercise and independent challenge
Run the project and demonstrate add products. Then independently extend it with undo for one reversible action, including a visible confirmation and a test.

<details>
<summary>Hint</summary>

Render Shopping cart and drive its labeled controls using userEvent. Assert visible outcomes for add products. Test failure and recovery before judging the feature complete; use a real browser for layout and platform APIs.

</details>

## Exercise solution
```jsx
// Full solution is included in projects/intermediate/shopping-cart/App.jsx.
// Follow the module imports for its shared helpers.
// Run from the root: npm run dev
// Open: /projects/intermediate/shopping-cart/index.html
```

Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Quiz
**Where should the cart subtotal come from?**

1. Product prices multiplied by current quantities
2. An independently incremented display number
3. The number of DOM rows

**Answer: 1.** Product prices multiplied by current quantities. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Interview questions
- **Basic: Where should the cart subtotal come from?**
  Product prices multiplied by current quantities
- **Intermediate: Explain the execution of the shopping cart example.**
  Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.
- **Advanced: What mistake or trade-off would you watch for when applying shopping cart in a larger application?**
  Do not treat the shopping cart as a hosted service. Its data is local or explicitly simulated; inspect shared helpers before extending persistence or network behavior.

## Summary
This project connects usereducer, state in one executable workflow. Building it from memory exposes gaps that isolated syntax examples may miss. Follow the owning state through event handlers and derived rendering. External timers, requests, and storage are kept at explicit boundaries so they can be canceled, validated, or replaced in tests.

## Revision checklist
- [ ] Explain and apply problem statement.
- [ ] Explain and apply feature contract.
- [ ] Explain and apply architecture and folder structure.
- [ ] Explain and apply implementation steps.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Notes application](../24-intermediate-projects/24-03-notes-application.md)

Next: [React Router dashboard](../24-intermediate-projects/24-05-react-router-dashboard.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `react` `vite` `hands-on` `portfolio-project` `mini-project` `usereducer` `state` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 90 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
