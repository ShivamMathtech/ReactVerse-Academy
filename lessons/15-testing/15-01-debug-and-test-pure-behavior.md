# Debug and test pure behavior

> Chapter 15 · Testing and Debugging · intermediate · 28 minutes

## Learning objectives
- Explain and apply browser debugging and react devtools.
- Explain and apply unit testing.
- Explain and apply vitest.
- Explain and apply continuous integration.

## Prerequisites
[Choose a UI system and navigation](../14-styling-ui/14-03-choose-a-ui-system-and-navigation.md)

## Why this concept exists
Fast targeted tests expose regressions before manual browser testing becomes expensive.

## A useful analogy
A good test is a rehearsal of an observable promise to a user, not a photograph of private implementation details.

## Concepts, syntax, and terminology
### Browser debugging and React DevTools
Use breakpoints and inspect state/props at the failure. DevTools can reveal unexpected owners and renders. Record the reproduction before changing code.

### Unit testing
Test pure calculations with boundary inputs. Avoid reimplementing the same algorithm inside the expected value.

### Vitest
Tests use test/expect and can share Vite transforms. npm test in this repo runs once; test:watch provides an interactive development loop.

### Continuous integration
CI installs the lockfile, checks content, lints, tests, typechecks, and builds. A passing local run is evidence for the tested cases, not universal correctness.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
import { expect, test } from 'vitest';
function total(cents, quantity) { return cents * quantity; }
test('zero quantity has no cost', () => { expect(total(1299, 0)).toBe(0); });
test('three items preserve integer cents', () => { expect(total(1299, 3)).toBe(3897); });
```

## Expected output
Two tests pass when run in a *.test.js file.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Returns the value or UI for this branch.
- Line 3: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
Vitest executes test modules and records assertion failures. Isolated pure functions need no DOM; interaction tests use a DOM environment.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not assert total(...) equals a second copy of the same implementation. Choose independently reasoned expected values.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Test negative quantities according to a documented validation rule. Independently reproduce and fix one failure using a breakpoint.

<details>
<summary>Hint</summary>

CI installs the lockfile, checks content, lints, tests, typechecks, and builds. A passing local run is evidence for the tested cases, not universal correctness.

</details>

## Exercise solution
```js
import { expect, test } from 'vitest';
function checkedTotal(cents, quantity) {
  if (!Number.isInteger(quantity) || quantity < 0) throw new Error('Invalid quantity');
  return cents * quantity;
}
test('rejects negative quantities', () => expect(() => checkedTotal(100, -1)).toThrow('Invalid quantity'));
```

Vitest executes test modules and records assertion failures. Isolated pure functions need no DOM; interaction tests use a DOM environment.

## Quiz
**Which assertion is most meaningful?**

1. A boundary input with an independently known result
2. The same formula copied into expected
3. Only that a function exists

**Answer: 1.** A boundary input with an independently known result. Vitest executes test modules and records assertion failures. Isolated pure functions need no DOM; interaction tests use a DOM environment.

## Interview questions
- **Basic: Which assertion is most meaningful?**
  A boundary input with an independently known result
- **Intermediate: Explain the execution of the debug and test pure behavior example.**
  Vitest executes test modules and records assertion failures. Isolated pure functions need no DOM; interaction tests use a DOM environment.
- **Advanced: What mistake or trade-off would you watch for when applying debug and test pure behavior in a larger application?**
  Do not assert total(...) equals a second copy of the same implementation. Choose independently reasoned expected values.

## Summary
Fast targeted tests expose regressions before manual browser testing becomes expensive. Vitest executes test modules and records assertion failures. Isolated pure functions need no DOM; interaction tests use a DOM environment.

## Revision checklist
- [ ] Explain and apply browser debugging and react devtools.
- [ ] Explain and apply unit testing.
- [ ] Explain and apply vitest.
- [ ] Explain and apply continuous integration.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Choose a UI system and navigation](../14-styling-ui/14-03-choose-a-ui-system-and-navigation.md)

Next: [Test components through their UI](../15-testing/15-02-test-components-through-their-ui.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`intermediate` `vitest` `react-testing-library` `testing` `debugging` `accessibility` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [vitest.dev/guide/](https://vitest.dev/guide/)
- [testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
