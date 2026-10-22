# Migrate with strict checking

> Chapter 16 · TypeScript with React · advanced · 28 minutes

## Learning objectives
- Explain and apply form types.
- Explain and apply strict mode.
- Explain and apply gradual migration from javascript.
- Explain and apply typescript variant.

## Prerequisites
[Model state and generic collections](../16-typescript/16-02-model-state-and-generic-collections.md)

## Why this concept exists
Migration works best when each type addition clarifies a boundary and keeps the application runnable.

## A useful analogy
Types are a design-time contract; runtime data must still show identification at the door.

## Concepts, syntax, and terminology
### Form types
Define raw form values separately from validated domain values. An HTML number input supplies a string until you parse it.

### Strict mode
TypeScript strict enables stronger checks such as strictNullChecks. It is unrelated to React StrictMode, which performs development runtime checks.

### Gradual migration from JavaScript
Convert a small pure module, then its callers, then one feature. Keep behavior tests while adding types. allowJs can support a temporary mixed tree.

### TypeScript variant
The StudyFlow capstone includes a strict TypeScript implementation alongside JavaScript. Both consume the same local API contract and support the same main workflow.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```tsx
type RawValues = { seats: string };
type Booking = { seats: number };
export function parseBooking(raw: RawValues): Booking {
  const seats = Number(raw.seats);
  if (!raw.seats.trim() || !Number.isInteger(seats) || seats < 1) throw new Error('Seats must be a positive whole number');
  return { seats };
}
```

## Expected output
"2" becomes { seats: 2 }; blank, fractional, or negative values throw.

## Line-by-line walkthrough
- Line 1: Describes a static TypeScript contract or union alternative.
- Line 2: Describes a static TypeScript contract or union alternative.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Defines the named binding from the expression on the right.
- Line 5: Rejects this invalid or failed path instead of silently continuing.
- Line 6: Returns the value or UI for this branch.

## Internal behavior and data flow
A runtime guard rejects bad values. The return type communicates the valid shape to downstream code after the check.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not confuse as Booking with conversion or validation. Assertions instruct the checker; they do not transform or inspect input.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Test blank and fractional seat values. Independently migrate a reducer action union without changing behavior.

<details>
<summary>Hint</summary>

The StudyFlow capstone includes a strict TypeScript implementation alongside JavaScript. Both consume the same local API contract and support the same main workflow.

</details>

## Exercise solution
```tsx
type Action = { type: 'add'; title: string } | { type: 'remove'; id: string };
export function describe(action: Action): string {
  return action.type === 'add' ? `Add ${action.title}` : `Remove ${action.id}`;
}
```

A runtime guard rejects bad values. The return type communicates the valid shape to downstream code after the check.

## Quiz
**Are TypeScript strict and React StrictMode the same feature?**

1. No, one is static checking and one is runtime development checking
2. Yes
3. Only in TSX

**Answer: 1.** No, one is static checking and one is runtime development checking. A runtime guard rejects bad values. The return type communicates the valid shape to downstream code after the check.

## Interview questions
- **Basic: Are TypeScript strict and React StrictMode the same feature?**
  No, one is static checking and one is runtime development checking
- **Intermediate: Explain the execution of the migrate with strict checking example.**
  A runtime guard rejects bad values. The return type communicates the valid shape to downstream code after the check.
- **Advanced: What mistake or trade-off would you watch for when applying migrate with strict checking in a larger application?**
  Do not confuse as Booking with conversion or validation. Assertions instruct the checker; they do not transform or inspect input.

## Summary
Migration works best when each type addition clarifies a boundary and keeps the application runnable. A runtime guard rejects bad values. The return type communicates the valid shape to downstream code after the check.

## Revision checklist
- [ ] Explain and apply form types.
- [ ] Explain and apply strict mode.
- [ ] Explain and apply gradual migration from javascript.
- [ ] Explain and apply typescript variant.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Model state and generic collections](../16-typescript/16-02-model-state-and-generic-collections.md)

Next: [Measure rendering and place state](../17-performance/17-01-measure-rendering-and-place-state.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `typescript` `react` `forms` `state` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- [react.dev/learn](https://react.dev/learn)
