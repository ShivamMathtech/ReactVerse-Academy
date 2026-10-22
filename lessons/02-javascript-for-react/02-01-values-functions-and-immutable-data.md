# Values, functions, and immutable data

> Chapter 02 · Modern JavaScript for React · beginner-plus · 35 minutes

## Learning objectives
- Explain and apply let, const, and scope.
- Explain and apply primitive and reference values.
- Explain and apply functions and arrow functions.
- Explain and apply arrays and objects.

## Prerequisites
[Inspect and collaborate](../01-web-foundations/01-03-inspect-and-collaborate.md)

## Why this concept exists
React relies on clear inputs and new values for predictable updates; JavaScript identity rules explain why mutation is risky.

## A useful analogy
A function is a small machine: inputs go in, a value comes out; a closure also remembers its surrounding workbench.

## Concepts, syntax, and terminology
### let, const, and scope
let and const are block-scoped. const prevents rebinding, not object mutation. Use const by default and let when the binding changes.

### Primitive and reference values
Primitives compare by value. Objects compare by identity; two identical object literals are different references. This matters when React compares dependencies.

### Functions and arrow functions
Functions accept parameters and return results. Arrow functions capture lexical this; they do not create their own this binding. Keep rendering calculations pure.

### Arrays and objects
Arrays represent ordered collections; objects group named fields. Destructuring extracts values. Spread copies one level; rest collects remaining values. Nested data still needs explicit copies.

### Template literals, optional chaining, and nullish coalescing
Backticks interpolate expressions. ?. stops property access for null/undefined. ?? defaults only null/undefined, preserving valid 0 and empty strings.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
const learner = { name: 'Maya', score: 0 };
const { name, ...rest } = learner;
const updated = { ...learner, score: 5 };
const label = value => `${value.name}: ${value.score ?? 10}`;
console.log(label(learner), label(updated), rest.score);
// React use case: setLearner(previous => ({ ...previous, score: 5 }));
```

## Expected output
Maya: 0 Maya: 5 0

## Line-by-line walkthrough
- Line 1: Defines the named binding from the expression on the right.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Prints the observable value so you can compare it with the expected output.
- Line 6: Documents a usage boundary or related use case; it is not executed.

## Internal behavior and data flow
Spread allocates a new outer object. Properties still point at the same nested references unless copied. ?? tests absence, not truthiness.



## Common mistakes: incorrect versus correct
Incorrect: const next = learner; next.score = 5 changes the original. Correct: create a new object with a copied spread.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Update an address.city without mutating the learner. Independently write a function that formats a missing score as Not graded while keeping 0.

<details>
<summary>Hint</summary>

Backticks interpolate expressions. ?. stops property access for null/undefined. ?? defaults only null/undefined, preserving valid 0 and empty strings.

</details>

## Exercise solution
```js
const learner = { address: { city: 'Dehradun' }, score: 0 };
const next = { ...learner, address: { ...learner.address, city: 'Delhi' } };
const format = value => `Score: ${value.score ?? 'Not graded'}`;
console.log(learner.address.city, next.address.city, format(learner));
```

Spread allocates a new outer object. Properties still point at the same nested references unless copied. ?? tests absence, not truthiness.

## Quiz
**What does const prevent?**

1. Changing any property
2. Creating an object
3. Reassigning the binding

**Answer: 3.** Reassigning the binding. Spread allocates a new outer object. Properties still point at the same nested references unless copied. ?? tests absence, not truthiness.

## Interview questions
- **Basic: What does const prevent?**
  Reassigning the binding
- **Intermediate: Explain the execution of the values, functions, and immutable data example.**
  Spread allocates a new outer object. Properties still point at the same nested references unless copied. ?? tests absence, not truthiness.
- **Advanced: What mistake or trade-off would you watch for when applying values, functions, and immutable data in a larger application?**
  Incorrect: const next = learner; next.score = 5 changes the original. Correct: create a new object with a copied spread.

## Summary
React relies on clear inputs and new values for predictable updates; JavaScript identity rules explain why mutation is risky. Spread allocates a new outer object. Properties still point at the same nested references unless copied. ?? tests absence, not truthiness.

## Revision checklist
- [ ] Explain and apply let, const, and scope.
- [ ] Explain and apply primitive and reference values.
- [ ] Explain and apply functions and arrow functions.
- [ ] Explain and apply arrays and objects.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Inspect and collaborate](../01-web-foundations/01-03-inspect-and-collaborate.md)

Next: [Transform collections and modules](../02-javascript-for-react/02-02-transform-collections-and-modules.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `javascript` `state` `rendering` `frontend-interview` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 35 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
