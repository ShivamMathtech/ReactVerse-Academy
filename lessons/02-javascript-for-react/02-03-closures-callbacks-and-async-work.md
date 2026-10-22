# Closures, callbacks, and async work

> Chapter 02 · Modern JavaScript for React · beginner-plus · 35 minutes

## Learning objectives
- Explain and apply closures and lexical scope.
- Explain and apply callbacks.
- Explain and apply promises and async/await.
- Explain and apply fetch api and error handling.

## Prerequisites
[Transform collections and modules](../02-javascript-for-react/02-02-transform-collections-and-modules.md)

## Why this concept exists
Closures connect JavaScript function behavior to stale-state bugs in React.

## A useful analogy
A function is a small machine: inputs go in, a value comes out; a closure also remembers its surrounding workbench.

## Concepts, syntax, and terminology
### Closures and lexical scope
A function can access bindings from where it was created. React event handlers and Effects close over a particular render; they do not magically read later state.

### Callbacks
Passing a function lets another operation call it later. Passing save is different from invoking save(). Error-first callbacks and Promise callbacks have different contracts.

### Promises and async/await
A Promise represents eventual settlement. async functions always return Promises. try/catch around an awaited call handles rejection. Parallel independent requests can use Promise.all.

### Fetch API and error handling
Check response.ok, parse JSON, then validate the shape. Cancel irrelevant work with AbortController. A successful HTTP response can still contain invalid data.

### Immutability and React use case
Use a functional state updater when delayed work needs the latest previous value. Avoid closing over an old count when queueing increments.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
console.log(next(), next());
const getValue = async () => 42;
getValue().then(value => console.log(value));
// React: setCount(previous => previous + 1)
```

## Expected output
1 2, followed asynchronously by 42.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 3: Returns cleanup to release the external resource.
- Line 5: Defines the named binding from the expression on the right.
- Line 6: Prints the observable value so you can compare it with the expected output.
- Line 7: Defines the named binding from the expression on the right.
- Line 8: Prints the observable value so you can compare it with the expected output.
- Line 9: Documents a usage boundary or related use case; it is not executed.

## Internal behavior and data flow
The returned function retains access to the lexical count binding. Promise callbacks run after the current synchronous stack finishes.



## Common mistakes: incorrect versus correct
A try/catch cannot catch a Promise rejection if you forget to await or return the Promise within that chain.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Create two counters and prove their state is independent. Independently wrap a rejecting async function in try/catch.

<details>
<summary>Hint</summary>

Use a functional state updater when delayed work needs the latest previous value. Avoid closing over an old count when queueing increments.

</details>

## Exercise solution
```js
function makeCounter() { let n = 0; return () => ++n; }
const a = makeCounter(); const b = makeCounter();
console.log(a(), a(), b());
async function demo() {
  try { await Promise.reject(new Error('Offline')); }
  catch (error) { console.log(error.message); }
}
demo();
```

The returned function retains access to the lexical count binding. Promise callbacks run after the current synchronous stack finishes.

## Quiz
**What does an async function return?**

1. A DOM node
2. A Promise
3. Always a plain number

**Answer: 2.** A Promise. The returned function retains access to the lexical count binding. Promise callbacks run after the current synchronous stack finishes.

## Interview questions
- **Basic: What does an async function return?**
  A Promise
- **Intermediate: Explain the execution of the closures, callbacks, and async work example.**
  The returned function retains access to the lexical count binding. Promise callbacks run after the current synchronous stack finishes.
- **Advanced: What mistake or trade-off would you watch for when applying closures, callbacks, and async work in a larger application?**
  A try/catch cannot catch a Promise rejection if you forget to await or return the Promise within that chain.

## Summary
Closures connect JavaScript function behavior to stale-state bugs in React. The returned function retains access to the lexical count binding. Promise callbacks run after the current synchronous stack finishes.

## Revision checklist
- [ ] Explain and apply closures and lexical scope.
- [ ] Explain and apply callbacks.
- [ ] Explain and apply promises and async/await.
- [ ] Explain and apply fetch api and error handling.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Transform collections and modules](../02-javascript-for-react/02-02-transform-collections-and-modules.md)

Next: [Install and run on Windows](../03-react-vite-setup/03-01-install-and-run-on-windows.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `javascript` `state` `rendering` `frontend-interview` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 35 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
