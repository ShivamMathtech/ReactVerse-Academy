# Transform collections and modules

> Chapter 02 · Modern JavaScript for React · beginner-plus · 28 minutes

## Learning objectives
- Explain and apply map, filter, reduce, find, and some.
- Explain and apply destructuring and spread in collections.
- Explain and apply modules and imports/exports (es modules).
- Explain and apply essential javascript interview questions.

## Prerequisites
[Values, functions, and immutable data](../02-javascript-for-react/02-01-values-functions-and-immutable-data.md)

## Why this concept exists
Collection transformations let a list view remain a direct calculation from its source data.

## A useful analogy
A function is a small machine: inputs go in, a value comes out; a closure also remembers its surrounding workbench.

## Concepts, syntax, and terminology
### map, filter, reduce, find, and some
map returns one result per item; filter selects items; reduce accumulates; find returns the first match or undefined; some returns a boolean. Choose the operation matching the question.

### Destructuring and spread in collections
Destructure callback parameters for readability. Copy before a mutating sort, or use toSorted where supported. Never mutate a state array with push or sort in render.

### Modules and imports/exports (ES modules)
Named exports use matching import names; a default export has one primary value. Use explicit module boundaries to isolate pure data operations. Import declarations are resolved by the module graph.

### Essential JavaScript interview questions
Explain why map is not for side effects, why [] !== [], and why a shallow copy does not isolate nested objects. Demonstrate rather than memorize.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
const students = [{ id: 'a', score: 8 }, { id: 'b', score: 5 }];
const passing = students.filter(({ score }) => score >= 6);
console.log(passing.map(({ id }) => id));
console.log(students.reduce((sum, s) => sum + s.score, 0));
console.log(students.find(s => s.id === 'x'));
console.log(students.some(s => s.score === 8));
// React: passing.map(s => <li key={s.id}>{s.id}</li>)
```

## Expected output
["a"], 13, undefined, true

## Line-by-line walkthrough
- Line 1: Defines the named binding from the expression on the right.
- Line 2: Keeps only records that satisfy the predicate.
- Line 3: Prints the observable value so you can compare it with the expected output.
- Line 4: Prints the observable value so you can compare it with the expected output.
- Line 5: Prints the observable value so you can compare it with the expected output.
- Line 6: Prints the observable value so you can compare it with the expected output.
- Line 7: Documents a usage boundary or related use case; it is not executed.

## Internal behavior and data flow
These methods call your callback for each visited element. filter and map return new arrays, but their object elements can still be shared references.



## Common mistakes: incorrect versus correct
Incorrect: students.sort(...) on state mutates the source. Correct: [...students].sort(...) or students.toSorted(...).

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Return sorted IDs of students scoring at least 6. Independently export the function from selectors.js and import it in another module.

<details>
<summary>Hint</summary>

Explain why map is not for side effects, why [] !== [], and why a shallow copy does not isolate nested objects. Demonstrate rather than memorize.

</details>

## Exercise solution
```js
export function passingIds(students) {
  return students.filter(s => s.score >= 6)
    .map(s => s.id).sort();
}
console.log(passingIds([{ id: 'z', score: 9 }, { id: 'a', score: 7 }]));
```

These methods call your callback for each visited element. filter and map return new arrays, but their object elements can still be shared references.

## Quiz
**Which method returns a boolean about at least one matching item?**

1. some
2. find
3. map

**Answer: 1.** some. These methods call your callback for each visited element. filter and map return new arrays, but their object elements can still be shared references.

## Interview questions
- **Basic: Which method returns a boolean about at least one matching item?**
  some
- **Intermediate: Explain the execution of the transform collections and modules example.**
  These methods call your callback for each visited element. filter and map return new arrays, but their object elements can still be shared references.
- **Advanced: What mistake or trade-off would you watch for when applying transform collections and modules in a larger application?**
  Incorrect: students.sort(...) on state mutates the source. Correct: [...students].sort(...) or students.toSorted(...).

## Summary
Collection transformations let a list view remain a direct calculation from its source data. These methods call your callback for each visited element. filter and map return new arrays, but their object elements can still be shared references.

## Revision checklist
- [ ] Explain and apply map, filter, reduce, find, and some.
- [ ] Explain and apply destructuring and spread in collections.
- [ ] Explain and apply modules and imports/exports (es modules).
- [ ] Explain and apply essential javascript interview questions.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Values, functions, and immutable data](../02-javascript-for-react/02-01-values-functions-and-immutable-data.md)

Next: [Closures, callbacks, and async work](../02-javascript-for-react/02-03-closures-callbacks-and-async-work.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `javascript` `state` `rendering` `frontend-interview` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
