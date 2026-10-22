# Test components through their UI

> Chapter 15 · Testing and Debugging · intermediate · 28 minutes

## Learning objectives
- Explain and apply component testing and react testing library.
- Explain and apply user-centric assertions.
- Explain and apply forms and accessible interaction.
- Explain and apply integration testing.

## Prerequisites
[Debug and test pure behavior](../15-testing/15-01-debug-and-test-pure-behavior.md)

## Why this concept exists
The test remains valid if component internals are refactored while the user behavior stays the same.

## A useful analogy
A good test is a rehearsal of an observable promise to a user, not a photograph of private implementation details.

## Concepts, syntax, and terminology
### Component testing and React Testing Library
Render a component, find controls by role and accessible name, and interact with userEvent. Assert visible outcomes instead of internal Hook state.

### User-centric assertions
Prefer getByRole for present elements, queryByRole for absence, and findByRole for eventual appearance. Do not add test IDs when a meaningful label exists.

### Forms and accessible interaction
A test locating a field by label also verifies that a usable label association exists. Test invalid submission and recovery, not just the happy path.

### Integration testing
Render a small working route/provider tree to verify collaborating components and state ownership.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import Counter from './Counter';
test('increments through the button', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  await user.click(screen.getByRole('button', { name: 'Count: 0' }));
  expect(screen.getByRole('button', { name: 'Count: 1' })).toBeVisible();
});
```

## Expected output
The test passes with the matching Counter implementation and jest-dom setup.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Imports the named API or type from its module.
- Line 4: Imports the named API or type from its module.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Defines the named binding from the expression on the right.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 8: Waits for the Promise without blocking the browser event loop.
- Line 9: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
userEvent schedules realistic input sequences. Await its asynchronous operations so assertions observe the completed interaction.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not query a CSS class just because it is convenient. A role and name make both intent and accessibility clearer.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Write a form test for an empty email. Independently use keyboard interaction to complete the same valid submission.

<details>
<summary>Hint</summary>

Render a small working route/provider tree to verify collaborating components and state ownership.

</details>

## Exercise solution
```jsx
// With a rendered labeled email form:
// await user.type(screen.getByRole('textbox', { name: 'Email' }), 'a@example.com');
// await user.click(screen.getByRole('button', { name: 'Submit' }));
// expect(await screen.findByRole('status')).toHaveTextContent('Saved');
```

userEvent schedules realistic input sequences. Await its asynchronous operations so assertions observe the completed interaction.

## Quiz
**Which query waits for an element to appear?**

1. queryByRole
2. findByRole
3. getByRole

**Answer: 2.** findByRole. userEvent schedules realistic input sequences. Await its asynchronous operations so assertions observe the completed interaction.

## Interview questions
- **Basic: Which query waits for an element to appear?**
  findByRole
- **Intermediate: Explain the execution of the test components through their ui example.**
  userEvent schedules realistic input sequences. Await its asynchronous operations so assertions observe the completed interaction.
- **Advanced: What mistake or trade-off would you watch for when applying test components through their ui in a larger application?**
  Do not query a CSS class just because it is convenient. A role and name make both intent and accessibility clearer.

## Summary
The test remains valid if component internals are refactored while the user behavior stays the same. userEvent schedules realistic input sequences. Await its asynchronous operations so assertions observe the completed interaction.

## Revision checklist
- [ ] Explain and apply component testing and react testing library.
- [ ] Explain and apply user-centric assertions.
- [ ] Explain and apply forms and accessible interaction.
- [ ] Explain and apply integration testing.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Debug and test pure behavior](../15-testing/15-01-debug-and-test-pure-behavior.md)

Next: [Cover async states and real-browser limits](../15-testing/15-03-cover-async-states-and-real-browser-limits.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `vitest` `react-testing-library` `testing` `debugging` `accessibility` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [vitest.dev/guide/](https://vitest.dev/guide/)
- [testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
