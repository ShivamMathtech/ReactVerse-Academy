# Inspect and collaborate

> Chapter 01 · Web Development Foundations · beginner · 21 minutes

## Learning objectives
- Explain and apply browser developer tools.
- Explain and apply git and github basics.
- Explain and apply debugging workflow.

## Prerequisites
[Connect browser and server](../01-web-foundations/01-02-connect-browser-and-server.md)

## Why this concept exists
Small inspectable changes make it easier to understand both bugs and contributions.

## A useful analogy
HTML is the structure of a classroom, CSS arranges it, and JavaScript responds when someone interacts.

## Concepts, syntax, and terminology
### Browser developer tools
Use Elements for DOM/CSS, Console for errors, Network for requests, and Sources for breakpoints. Inspect the first meaningful error before changing unrelated code.

### Git and GitHub basics
Git records local snapshots; GitHub hosts repositories and review workflows. Stage intentional changes, inspect the diff, commit a focused change, and propose it through a pull request.

### Debugging workflow
Reproduce a failure, reduce the inputs, inspect values, make one correction, and retest the original case. Version control preserves a known working state.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```bash
git init
git status
git add README.md
git diff --staged
git commit -m "Document local setup
```

## Expected output
Git creates a local commit containing the staged README after your name and email are configured.

## Line-by-line walkthrough
- Line 1: `git init` runs the named command or sets the documented public configuration.
- Line 2: `git status` runs the named command or sets the documented public configuration.
- Line 3: `git add README.md` runs the named command or sets the documented public configuration.
- Line 4: `git diff --staged` runs the named command or sets the documented public configuration.
- Line 5: `git commit -m "Document local setup` runs the named command or sets the documented public configuration.

## Internal behavior and data flow
The working tree, staging area, and commit history are separate. git add stages the current file content; later edits need staging again.



## Common mistakes: incorrect versus correct
Do not commit .env files with credentials or node_modules. Review the staged diff instead of blindly adding every file.

## Practical use case
Use this concept when building registration system. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Initialize a practice repository and commit a README. Independently create a branch and add installation instructions.

<details>
<summary>Hint</summary>

Reproduce a failure, reduce the inputs, inspect values, make one correction, and retest the original case. Version control preserves a known working state.

</details>

## Exercise solution
```bash
git switch -c docs/setup
# Edit README.md before staging.
git add README.md
git diff --staged
git commit -m "Explain installation
```

The working tree, staging area, and commit history are separate. git add stages the current file content; later edits need staging again.

## Quiz
**What does git add prepare?**

1. A snapshot for the next commit
2. A remote deployment
3. A dependency installation

**Answer: 1.** A snapshot for the next commit. The working tree, staging area, and commit history are separate. git add stages the current file content; later edits need staging again.

## Interview questions
- **Basic: What does git add prepare?**
  A snapshot for the next commit
- **Intermediate: Explain the execution of the inspect and collaborate example.**
  The working tree, staging area, and commit history are separate. git add stages the current file content; later edits need staging again.
- **Advanced: What mistake or trade-off would you watch for when applying inspect and collaborate in a larger application?**
  Do not commit .env files with credentials or node_modules. Review the staged diff instead of blindly adding every file.

## Summary
Small inspectable changes make it easier to understand both bugs and contributions. The working tree, staging area, and commit history are separate. git add stages the current file content; later edits need staging again.

## Revision checklist
- [ ] Explain and apply browser developer tools.
- [ ] Explain and apply git and github basics.
- [ ] Explain and apply debugging workflow.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Connect browser and server](../01-web-foundations/01-02-connect-browser-and-server.md)

Next: [Values, functions, and immutable data](../02-javascript-for-react/02-01-values-functions-and-immutable-data.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `html` `css` `javascript` `accessibility` `frontend-fundamentals` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [developer.mozilla.org/en-US/docs/Web/JavaScript/Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
