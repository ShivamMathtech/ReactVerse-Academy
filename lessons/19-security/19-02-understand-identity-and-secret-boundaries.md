# Understand identity and secret boundaries

> Chapter 19 · Security and Reliability · advanced · 28 minutes

## Learning objectives
- Explain and apply secure authentication concepts.
- Explain and apply token storage trade-offs.
- Explain and apply environment-variable limitations and why vite_ variables are public.
- Explain and apply client-side authorization limitations.

## Prerequisites
[Render untrusted content safely](../19-security/19-01-render-untrusted-content-safely.md)

## Why this concept exists
Understanding trust boundaries prevents a polished interface from being mistaken for a secure service.

## A useful analogy
A browser is a public display case: anything shipped to it can be inspected and changed by its visitor.

## Concepts, syntax, and terminology
### Secure authentication concepts
Authentication establishes identity through a trusted service; authorization decides allowed operations. A frontend can present the result but cannot be the sole authority.

### Token storage trade-offs
JavaScript-accessible storage is exposed to XSS. HttpOnly cookies reduce script access but require careful CSRF, same-site, and deployment design. No one storage choice solves every threat.

### Environment-variable limitations and why VITE_ variables are public
Vite substitutes values into client code at build time. An .env filename does not encrypt anything. Private keys belong in trusted infrastructure.

### Client-side authorization limitations
Hiding a button or editing a route guard changes UX only. A server must check permissions on every protected request. This static course intentionally has no real login.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
const publicConfig = {
  appName: import.meta.env.VITE_APP_TITLE ?? 'ReactVerse Academy',
  // Only publish information safe for every visitor to inspect.
};
export default function App() { return <h1>{publicConfig.appName}</h1>; }
```

## Expected output
A public title is displayed; no authentication or secret is implied.

## Line-by-line walkthrough
- Line 1: Defines the named binding from the expression on the right.
- Line 2: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 3: Documents a usage boundary or related use case; it is not executed.
- Line 5: Returns the value or UI for this branch.

## Internal behavior and data flow
Users control their browser, localStorage, and network requests. Code shipped to that browser cannot prevent them from editing client state.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not store real credentials in demo forms or place a private service token in a VITE_ variable.

## Practical use case
Use this concept when building weather dashboard. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Inspect the built bundle for a public config value. Independently draw the trusted boundary for a hypothetical authenticated API.

<details>
<summary>Hint</summary>

Hiding a button or editing a route guard changes UX only. A server must check permissions on every protected request. This static course intentionally has no real login.

</details>

## Exercise solution
```jsx
const classification = {
  publicTitle: 'client bundle',
  privateServiceKey: 'trusted server secret store',
  authorizationDecision: 'trusted service on every request',
};
console.table(classification);
```

Users control their browser, localStorage, and network requests. Code shipped to that browser cannot prevent them from editing client state.

## Quiz
**Where must access to protected server data be enforced?**

1. Only in a React route guard
2. Only by hiding a button
3. On the trusted server

**Answer: 3.** On the trusted server. Users control their browser, localStorage, and network requests. Code shipped to that browser cannot prevent them from editing client state.

## Interview questions
- **Basic: Where must access to protected server data be enforced?**
  On the trusted server
- **Intermediate: Explain the execution of the understand identity and secret boundaries example.**
  Users control their browser, localStorage, and network requests. Code shipped to that browser cannot prevent them from editing client state.
- **Advanced: What mistake or trade-off would you watch for when applying understand identity and secret boundaries in a larger application?**
  Do not store real credentials in demo forms or place a private service token in a VITE_ variable.

## Summary
Understanding trust boundaries prevents a polished interface from being mistaken for a secure service. Users control their browser, localStorage, and network requests. Code shipped to that browser cannot prevent them from editing client state.

## Revision checklist
- [ ] Explain and apply secure authentication concepts.
- [ ] Explain and apply token storage trade-offs.
- [ ] Explain and apply environment-variable limitations and why vite_ variables are public.
- [ ] Explain and apply client-side authorization limitations.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Render untrusted content safely](../19-security/19-01-render-untrusted-content-safely.md)

Next: [Maintain dependencies and recover from failure](../19-security/19-03-maintain-dependencies-and-recover-from-failure.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`advanced` `react` `security` `api-integration` `production-ready` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 28 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [react.dev/reference/react-dom/components/common](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html)
- [developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
