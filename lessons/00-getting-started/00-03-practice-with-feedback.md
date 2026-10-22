# Practice with feedback

> Chapter 00 · Course Introduction · beginner · 21 minutes

## Learning objectives
- Explain and apply how to practice effectively.
- Explain and apply study workflow.
- Explain and apply self-assessment.

## Prerequisites
[Understand the toolchain](../00-getting-started/00-02-understand-the-toolchain.md)

## Why this concept exists
A short feedback loop reveals which mental model needs correction before you build on it.

## A useful analogy
A component is a reusable recipe; props are its ingredients and state is the changing order ticket.

## Concepts, syntax, and terminology
### How to practice effectively
Predict output before running an example. Change one input, explain the result, then rebuild from memory. Debugging your own mistake teaches more than copying a finished component.

### Study workflow
Read objectives, run the small example, complete the guided task, solve the independent challenge, and answer the quiz. Mark complete only after explaining the behavior aloud.

### Self-assessment
Browser progress records completion, not mastery. Revisit missed questions and build a project without looking at its solution. Keep notes about what you misunderstood.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
const sessions = [25, 30, 20];
const minutes = sessions.reduce((sum, value) => sum + value, 0);
console.log(minutes);
```

## Expected output
75

## Line-by-line walkthrough
- Line 1: Defines the named binding from the expression on the right.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
reduce visits array elements in order. The initial 0 establishes the accumulator; the callback returns the next value each time.



## Common mistakes: incorrect versus correct
Watching a video is not the same as reproducing its behavior. Check understanding with a changed input and an explanation.

## Practical use case
Use this concept when building a maintainable learning interface. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Predict the sum after adding a 15-minute session. Independently calculate how many sessions were at least 25 minutes.

<details>
<summary>Hint</summary>

Browser progress records completion, not mastery. Revisit missed questions and build a project without looking at its solution. Keep notes about what you misunderstood.

</details>

## Exercise solution
```js
const sessions = [25, 30, 20, 15];
console.log(sessions.reduce((sum, value) => sum + value, 0));
console.log(sessions.filter(value => value >= 25).length);
```

reduce visits array elements in order. The initial 0 establishes the accumulator; the callback returns the next value each time.

## Quiz
**Which practice best checks transfer of understanding?**

1. Only reread the solution
2. Mark every lesson complete
3. Rebuild with a changed requirement

**Answer: 3.** Rebuild with a changed requirement. reduce visits array elements in order. The initial 0 establishes the accumulator; the callback returns the next value each time.

## Interview questions
- **Basic: Which practice best checks transfer of understanding?**
  Rebuild with a changed requirement
- **Intermediate: Explain the execution of the practice with feedback example.**
  reduce visits array elements in order. The initial 0 establishes the accumulator; the callback returns the next value each time.
- **Advanced: What mistake or trade-off would you watch for when applying practice with feedback in a larger application?**
  Watching a video is not the same as reproducing its behavior. Check understanding with a changed input and an explanation.

## Summary
A short feedback loop reveals which mental model needs correction before you build on it. reduce visits array elements in order. The initial 0 establishes the accumulator; the callback returns the next value each time.

## Revision checklist
- [ ] Explain and apply how to practice effectively.
- [ ] Explain and apply study workflow.
- [ ] Explain and apply self-assessment.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Understand the toolchain](../00-getting-started/00-02-understand-the-toolchain.md)

Next: [Build a meaningful document](../01-web-foundations/01-01-build-a-meaningful-document.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `javascript` `frontend-fundamentals` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
