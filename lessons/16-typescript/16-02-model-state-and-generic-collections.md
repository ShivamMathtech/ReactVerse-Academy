# Model state and generic collections

> Chapter 16 · TypeScript with React · advanced · 56 minutes

## Learning objectives
- Explain and apply typed hooks.
- Explain and apply generic components.
- Explain and apply discriminated unions.
- Explain and apply api response types.

## Prerequisites
[Type props and events](../16-typescript/16-01-type-props-and-events.md)

## Why this concept exists
A state model should prevent invalid combinations instead of asking every component to remember which booleans agree.

## A useful analogy
Types are a design-time contract; runtime data must still show identification at the door.

## Concepts, syntax, and terminology
### Typed Hooks
useState often infers from its initial value. Provide an explicit union or array element type when null or [] is insufficient. Type reducer actions as discriminated unions.

### Generic components
A type parameter lets a list preserve the relationship between items, keys, and renderItem. Do not use generics when a concrete domain type is simpler.

### Discriminated unions
Represent mutually exclusive states with a literal status field. Narrowing by status exposes only valid fields and avoids impossible combinations.

### API response types
Treat external JSON as unknown until runtime checks establish its shape; a type assertion alone does not inspect data.

### Beginner explanation
A union says a value can have one of several known shapes. A status field tells you which shape is present.

### Intermediate explanation
Narrow status before reading fields that exist only on one branch. A loading state should not have to invent data just to satisfy a broad object type.

### Advanced explanation
Static types model code assumptions. At a network boundary, data is unknown until validated; a discriminated union only becomes trustworthy after runtime checks produce it.

### Practical scenario and trade-off
Model a request as loading, error with message, or success with data. More explicit types add initial typing work but reduce impossible combinations throughout the UI.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```tsx
type Result<T> =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: T };
export function ResultLabel({ result }: { result: Result<string[]> }) {
  if (result.status === 'loading') return <p>Loading…</p>;
  if (result.status === 'error') return <p>{result.message}</p>;
  return <p>{result.data.length} items</p>;
}
```

## Expected output
The success branch can safely read data; the error branch can safely read message.

## Line-by-line walkthrough
- Line 1: Describes a static TypeScript contract or union alternative.
- Line 2: Describes a static TypeScript contract or union alternative.
- Line 3: Describes a static TypeScript contract or union alternative.
- Line 4: Describes a static TypeScript contract or union alternative.
- Line 5: Defines a named operation; it runs when called or rendered.
- Line 6: Returns the value or UI for this branch.
- Line 7: Returns the value or UI for this branch.
- Line 8: Returns the value or UI for this branch.

## Internal behavior and data flow
TypeScript narrows the union after a literal equality check. This is static reasoning about control flow, not runtime validation.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Avoid { loading: boolean, error?: string, data?: T } when a union can express exactly one state.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add an empty state to the union. Independently write a generic keyed list with getKey and renderItem props.

<details>
<summary>Hint</summary>

Model a request as loading, error with message, or success with data. More explicit types add initial typing work but reduce impossible combinations throughout the UI.

</details>

## Exercise solution
```tsx
import type { ReactNode, Key } from 'react';
export function List<T>({ items, getKey, renderItem }: {
  items: T[]; getKey: (item: T) => Key; renderItem: (item: T) => ReactNode;
}) { return <ul>{items.map(item => <li key={getKey(item)}>{renderItem(item)}</li>)}</ul>; }
```

TypeScript narrows the union after a literal equality check. This is static reasoning about control flow, not runtime validation.

## Quiz
**What enables narrowing in a discriminated union?**

1. A CSS class
2. Using any
3. A shared literal-valued discriminator

**Answer: 3.** A shared literal-valued discriminator. TypeScript narrows the union after a literal equality check. This is static reasoning about control flow, not runtime validation.

## Interview questions
- **Basic: What enables narrowing in a discriminated union?**
  A shared literal-valued discriminator
- **Intermediate: Explain the execution of the model state and generic collections example.**
  TypeScript narrows the union after a literal equality check. This is static reasoning about control flow, not runtime validation.
- **Advanced: What mistake or trade-off would you watch for when applying model state and generic collections in a larger application?**
  Avoid { loading: boolean, error?: string, data?: T } when a union can express exactly one state.

## Summary
A state model should prevent invalid combinations instead of asking every component to remember which booleans agree. TypeScript narrows the union after a literal equality check. This is static reasoning about control flow, not runtime validation.

## Revision checklist
- [ ] Explain and apply typed hooks.
- [ ] Explain and apply generic components.
- [ ] Explain and apply discriminated unions.
- [ ] Explain and apply api response types.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Type props and events](../16-typescript/16-01-type-props-and-events.md)

Next: [Migrate with strict checking](../16-typescript/16-03-migrate-with-strict-checking.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `typescript` `react` `forms` `state` `testing` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 56 minutes including guided practice; independent projects can take longer.

## Official references
- [www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- [react.dev/learn](https://react.dev/learn)
