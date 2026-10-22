# Validate and explain errors

> Chapter 08 · Forms and Validation · beginner-plus · 28 minutes

## Learning objectives
- Explain and apply required fields.
- Explain and apply validation and error messages.
- Explain and apply accessible forms.
- Explain and apply form state.

## Prerequisites
[Choose controlled or uncontrolled input](../08-forms-validation/08-01-choose-controlled-or-uncontrolled-input.md)

## Why this concept exists
A pure validation function is easier to test than error logic scattered across event handlers.

## A useful analogy
A form is a conversation: each field asks a clear question, and validation explains how to repair an answer.

## Concepts, syntax, and terminology
### Required fields
Native required, minLength, and type=email offer useful baseline checks. Client validation improves feedback but does not replace validation by a trusted server.

### Validation and error messages
Validate meaningful domain rules and place specific errors near fields. A user should know both what failed and how to correct it.

### Accessible forms
Associate label and input, use aria-describedby for help, and aria-invalid when invalid. Focus the first invalid field after a custom validation failure.

### Form state
Keep field values and submitted/touched state separate. Derive validity from values; avoid duplicating each validity result in independent state.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
export function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter an email such as name@example.com.';
  return errors;
}
console.log(validate({ name: '', email: 'wrong' }));
```

## Expected output
An object containing name and email errors. The email pattern is a practical demo check, not a complete email standard parser.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Chooses whether the guarded branch should run.
- Line 4: Chooses whether the guarded branch should run.
- Line 5: Returns the value or UI for this branch.
- Line 7: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
Validation computes a result from values. The UI decides when to show that result and where to move focus.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not communicate errors only through red borders. Include text and a programmatic association with the input.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Test blank, whitespace-only, and valid names. Independently add a minimum age rule using explicit numeric conversion.

<details>
<summary>Hint</summary>

Keep field values and submitted/touched state separate. Derive validity from values; avoid duplicating each validity result in independent state.

</details>

## Exercise solution
```js
export function validateAge(raw) {
  if (raw.trim() === '') return 'Enter your age.';
  const age = Number(raw);
  return Number.isInteger(age) && age >= 16 ? '' : 'Enter a whole age of at least 16.';
}
console.log(validateAge(''), validateAge('18'));
```

Validation computes a result from values. The UI decides when to show that result and where to move focus.

## Quiz
**Does client validation make an API input trustworthy?**

1. No; validate on the trusted server too
2. Yes, if using React
3. Yes, if required is set

**Answer: 1.** No; validate on the trusted server too. Validation computes a result from values. The UI decides when to show that result and where to move focus.

## Interview questions
- **Basic: Does client validation make an API input trustworthy?**
  No; validate on the trusted server too
- **Intermediate: Explain the execution of the validate and explain errors example.**
  Validation computes a result from values. The UI decides when to show that result and where to move focus.
- **Advanced: What mistake or trade-off would you watch for when applying validate and explain errors in a larger application?**
  Do not communicate errors only through red borders. Include text and a programmatic association with the input.

## Summary
A pure validation function is easier to test than error logic scattered across event handlers. Validation computes a result from values. The UI decides when to show that result and where to move focus.

## Revision checklist
- [ ] Explain and apply required fields.
- [ ] Explain and apply validation and error messages.
- [ ] Explain and apply accessible forms.
- [ ] Explain and apply form state.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Choose controlled or uncontrolled input](../08-forms-validation/08-01-choose-controlled-or-uncontrolled-input.md)

Next: [Design a registration workflow](../08-forms-validation/08-03-design-a-registration-workflow.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `forms` `events` `accessibility` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
