# Maintain dependencies and recover from failure

> Chapter 19 · Security and Reliability · advanced · 28 minutes

## Learning objectives
- Explain and apply dependency hygiene.
- Explain and apply error handling.
- Explain and apply avoiding secret exposure.
- Explain and apply reliability.

## Prerequisites
[Understand identity and secret boundaries](../19-security/19-02-understand-identity-and-secret-boundaries.md)

## Why this concept exists
Failures are routine conditions, so recovery needs to be part of the design.

## A useful analogy
A browser is a public display case: anything shipped to it can be inspected and changed by its visitor.

## Concepts, syntax, and terminology
### Dependency hygiene
Pin direct versions and retain the lockfile, inspect install changes, audit dependencies, and update deliberately. Audit output is advisory evidence, not proof of safety.

### Error handling
Catch errors at meaningful boundaries and present recovery actions. Avoid swallowing failures silently or logging sensitive request payloads.

### Avoiding secret exposure
Ignore private .env files, review diffs, and rotate exposed credentials. Removing a key from the latest commit does not erase prior exposure.

### Reliability
Handle unavailable storage, malformed persisted data, failed requests, and missing records. Keep user work when a recoverable operation fails.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
export function readSaved(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch { return fallback; }
}
```

## Expected output
Returns saved JSON when readable, otherwise a safe fallback. Validate the parsed shape before trusting it.

## Line-by-line walkthrough
- Line 1: Defines a named operation; it runs when called or rendered.
- Line 2: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 3: Defines the named binding from the expression on the right.
- Line 4: Returns the value or UI for this branch.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
Storage access can throw because of browser policy or capacity. JSON parsing can fail independently; a successful parse can still have the wrong schema.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not assume try/catch plus JSON.parse validates the content. Check expected types and allowed IDs after reading.

## Practical use case
Use this concept when building weather dashboard. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Corrupt a saved progress value and verify recovery. Independently show an in-memory-only notice when writes fail.

<details>
<summary>Hint</summary>

Handle unavailable storage, malformed persisted data, failed requests, and missing records. Keep user work when a recoverable operation fails.

</details>

## Exercise solution
```js
export function validIds(value, allowed) {
  return Array.isArray(value) ? [...new Set(value.filter(id => typeof id === 'string' && allowed.has(id)))] : [];
}
```

Storage access can throw because of browser policy or capacity. JSON parsing can fail independently; a successful parse can still have the wrong schema.

## Quiz
**Does a clean dependency audit guarantee an application is secure?**

1. No
2. Yes
3. Only for static sites

**Answer: 1.** No. Storage access can throw because of browser policy or capacity. JSON parsing can fail independently; a successful parse can still have the wrong schema.

## Interview questions
- **Basic: Does a clean dependency audit guarantee an application is secure?**
  No
- **Intermediate: Explain the execution of the maintain dependencies and recover from failure example.**
  Storage access can throw because of browser policy or capacity. JSON parsing can fail independently; a successful parse can still have the wrong schema.
- **Advanced: What mistake or trade-off would you watch for when applying maintain dependencies and recover from failure in a larger application?**
  Do not assume try/catch plus JSON.parse validates the content. Check expected types and allowed IDs after reading.

## Summary
Failures are routine conditions, so recovery needs to be part of the design. Storage access can throw because of browser policy or capacity. JSON parsing can fail independently; a successful parse can still have the wrong schema.

## Revision checklist
- [ ] Explain and apply dependency hygiene.
- [ ] Explain and apply error handling.
- [ ] Explain and apply avoiding secret exposure.
- [ ] Explain and apply reliability.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Understand identity and secret boundaries](../19-security/19-02-understand-identity-and-secret-boundaries.md)

Next: [Understand identity and concurrent work](../20-advanced-react/20-01-understand-identity-and-concurrent-work.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `security` `api-integration` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
- [developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
