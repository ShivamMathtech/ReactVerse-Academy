# Type props and events

> Chapter 16 · TypeScript with React · advanced · 28 minutes

## Learning objectives
- Explain and apply typescript prerequisites.
- Explain and apply typing component props, interfaces, and type aliases.
- Explain and apply event types.
- Explain and apply children and composition.

## Prerequisites
[Cover async states and real-browser limits](../15-testing/15-03-cover-async-states-and-real-browser-limits.md)

## Why this concept exists
Types make component contracts visible to both teammates and tooling before a user reaches the broken path.

## A useful analogy
Types are a design-time contract; runtime data must still show identification at the door.

## Concepts, syntax, and terminology
### TypeScript prerequisites
Understand JavaScript before adding static types. Type annotations disappear from the generated JavaScript. Use .tsx for files containing JSX.

### Typing component props, interfaces, and type aliases
Both interface and type can describe object props. Use a union when alternatives differ. Prefer a focused public contract over any.

### Event types
React.ChangeEvent<HTMLInputElement> describes a change event; FormEvent<HTMLFormElement> describes submission. Inline handlers often infer the correct event type.

### Children and composition
ReactNode is appropriate for arbitrary renderable children. A single required element may use ReactElement when that stronger constraint is intended.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```tsx
import type { ReactNode, ChangeEvent } from 'react';
type FieldProps = { value: string; onChange: (value: string) => void; children: ReactNode };
export function Field({ value, onChange, children }: FieldProps) {
  function change(event: ChangeEvent<HTMLInputElement>) { onChange(event.target.value); }
  return <label>{children}<input value={value} onChange={change} /></label>;
}
```

## Expected output
A typed reusable labeled field; passing a number as value is a compile-time error.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Describes a static TypeScript contract or union alternative.
- Line 3: Defines a named operation; it runs when called or rendered.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
Vite strips TypeScript syntax, but stripping alone is not a full typecheck. This repository runs tsc --noEmit before its build.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not use any to silence a misunderstood event type. Narrow or infer the value you actually need.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add optional disabled support. Independently type an onSubmit callback receiving validated form values.

<details>
<summary>Hint</summary>

ReactNode is appropriate for arbitrary renderable children. A single required element may use ReactElement when that stronger constraint is intended.

</details>

## Exercise solution
```tsx
type Values = { email: string; track: 'react' | 'javascript' };
type FormProps = { onSubmit: (values: Values) => void; disabled?: boolean };
export type { Values, FormProps };
```

Vite strips TypeScript syntax, but stripping alone is not a full typecheck. This repository runs tsc --noEmit before its build.

## Quiz
**Does a TypeScript type validate downloaded JSON at runtime?**

1. Only in production
2. No
3. Yes, always

**Answer: 2.** No. Vite strips TypeScript syntax, but stripping alone is not a full typecheck. This repository runs tsc --noEmit before its build.

## Interview questions
- **Basic: Does a TypeScript type validate downloaded JSON at runtime?**
  No
- **Intermediate: Explain the execution of the type props and events example.**
  Vite strips TypeScript syntax, but stripping alone is not a full typecheck. This repository runs tsc --noEmit before its build.
- **Advanced: What mistake or trade-off would you watch for when applying type props and events in a larger application?**
  Do not use any to silence a misunderstood event type. Narrow or infer the value you actually need.

## Summary
Types make component contracts visible to both teammates and tooling before a user reaches the broken path. Vite strips TypeScript syntax, but stripping alone is not a full typecheck. This repository runs tsc --noEmit before its build.

## Revision checklist
- [ ] Explain and apply typescript prerequisites.
- [ ] Explain and apply typing component props, interfaces, and type aliases.
- [ ] Explain and apply event types.
- [ ] Explain and apply children and composition.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Cover async states and real-browser limits](../15-testing/15-03-cover-async-states-and-real-browser-limits.md)

Next: [Model state and generic collections](../16-typescript/16-02-model-state-and-generic-collections.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `typescript` `react` `forms` `state` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- [react.dev/learn](https://react.dev/learn)
