# Install and run on Windows

> Chapter 03 · React and Vite Setup · beginner · 21 minutes

## Learning objectives
- Explain and apply node.js and npm prerequisites.
- Explain and apply create a project with vite.
- Explain and apply windows powershell setup instructions.

## Prerequisites
[Closures, callbacks, and async work](../02-javascript-for-react/02-03-closures-callbacks-and-async-work.md)

## Why this concept exists
A reproducible environment removes many problems that look like React mistakes but originate in installation.

## A useful analogy
The source folder is your workshop; dist is the packaged product you deliver.

## Concepts, syntax, and terminology
### Node.js and npm prerequisites
Use Node 24 LTS or Node >=22.12. npm is bundled with Node. Confirm both in a fresh terminal after installation. The repository pins exact direct dependencies and a lockfile.

### Create a project with Vite
For a separate practice app, npm create vite@latest my-app -- --template react creates JavaScript React files. For this repository, use npm ci instead of scaffolding over it.

### Windows PowerShell setup instructions
Extract the ZIP, cd into react-vite-complete-course, and run npm.cmd ci then npm.cmd run dev. npm.cmd avoids PowerShell script-policy errors without relaxing machine policy.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```powershell
node --version
npm.cmd --version
cd react-vite-complete-course
npm.cmd ci
npm.cmd run dev
```

## Expected output
Node prints a compatible version; Vite prints a local development URL.

## Line-by-line walkthrough
- Line 1: `node --version` runs the named command or sets the documented public configuration.
- Line 2: `npm.cmd --version` runs the named command or sets the documented public configuration.
- Line 3: `cd react-vite-complete-course` runs the named command or sets the documented public configuration.
- Line 4: `npm.cmd ci` runs the named command or sets the documented public configuration.
- Line 5: `npm.cmd run dev` runs the named command or sets the documented public configuration.

## Internal behavior and data flow
npm ci installs from package-lock.json and fails when package.json disagrees. Native optional packages are selected for your operating system.



## Common mistakes: incorrect versus correct
Do not copy Linux node_modules onto Windows. Extract source and run npm ci locally; keep optional dependencies enabled.

## Practical use case
Use this concept when building a maintainable learning interface. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Install from the ZIP and open the printed URL. Independently stop the server with Ctrl+C and restart it.

<details>
<summary>Hint</summary>

Extract the ZIP, cd into react-vite-complete-course, and run npm.cmd ci then npm.cmd run dev. npm.cmd avoids PowerShell script-policy errors without relaxing machine policy.

</details>

## Exercise solution
```powershell
npm.cmd ci
npm.cmd run dev
# Ctrl+C stops the foreground server.
# If the port is busy: npm.cmd run dev -- --port 5174
```

npm ci installs from package-lock.json and fails when package.json disagrees. Native optional packages are selected for your operating system.

## Quiz
**Which command uses the committed lockfile for a clean installation?**

1. npm ci
2. npm update
3. npm init

**Answer: 1.** npm ci. npm ci installs from package-lock.json and fails when package.json disagrees. Native optional packages are selected for your operating system.

## Interview questions
- **Basic: Which command uses the committed lockfile for a clean installation?**
  npm ci
- **Intermediate: Explain the execution of the install and run on windows example.**
  npm ci installs from package-lock.json and fails when package.json disagrees. Native optional packages are selected for your operating system.
- **Advanced: What mistake or trade-off would you watch for when applying install and run on windows in a larger application?**
  Do not copy Linux node_modules onto Windows. Extract source and run npm ci locally; keep optional dependencies enabled.

## Summary
A reproducible environment removes many problems that look like React mistakes but originate in installation. npm ci installs from package-lock.json and fails when package.json disagrees. Native optional packages are selected for your operating system.

## Revision checklist
- [ ] Explain and apply node.js and npm prerequisites.
- [ ] Explain and apply create a project with vite.
- [ ] Explain and apply windows powershell setup instructions.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Closures, callbacks, and async work](../02-javascript-for-react/02-03-closures-callbacks-and-async-work.md)

Next: [Read the application entry point](../03-react-vite-setup/03-02-read-the-application-entry-point.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `deployment` `debugging` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
- [vite.dev/guide/static-deploy.html](https://vite.dev/guide/static-deploy.html)
