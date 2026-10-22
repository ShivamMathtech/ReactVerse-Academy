# Read the application entry point

> Chapter 03 · React and Vite Setup · beginner · 21 minutes

## Learning objectives
- Explain and apply project structure.
- Explain and apply package.json and scripts.
- Explain and apply development server.

## Prerequisites
[Install and run on Windows](../03-react-vite-setup/03-01-install-and-run-on-windows.md)

## Why this concept exists
Knowing the entry point helps trace how source files become visible UI.

## A useful analogy
The source folder is your workshop; dist is the packaged product you deliver.

## Concepts, syntax, and terminology
### Project structure
index.html contains the root element and module entry. src/main.jsx creates the React root; app components describe content. public assets are copied without module transformation.

### package.json and scripts
Scripts name local tool commands. Dependencies are runtime imports; devDependencies support builds and tests. Both are needed when building from source.

### Development server
Vite serves source modules and updates edited modules during development. StrictMode may repeat development work to expose missing cleanup and impure renders.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
function App() { return <h1>ReactVerse Academy</h1>; }
createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
);
```

## Expected output
A heading appears inside the element with id="root" in index.html.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Imports the named API or type from its module.
- Line 3: Returns the value or UI for this branch.
- Line 4: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
createRoot manages one DOM container. Calling root.render schedules React rendering; StrictMode checks only development behavior.



## Common mistakes: incorrect versus correct
Do not create a new root on each state update. Create it once and let component state drive updates.

## Practical use case
Use this concept when building a maintainable learning interface. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Trace index.html to main.jsx to App. Independently change the title and observe the development update.

<details>
<summary>Hint</summary>

Vite serves source modules and updates edited modules during development. StrictMode may repeat development work to expose missing cleanup and impure renders.

</details>

## Exercise solution
```jsx
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<h1>My learning studio</h1>);
```

createRoot manages one DOM container. Calling root.render schedules React rendering; StrictMode checks only development behavior.

## Quiz
**Which file provides the DOM container in a standard Vite app?**

1. README.md
2. index.html
3. package-lock.json

**Answer: 2.** index.html. createRoot manages one DOM container. Calling root.render schedules React rendering; StrictMode checks only development behavior.

## Interview questions
- **Basic: Which file provides the DOM container in a standard Vite app?**
  index.html
- **Intermediate: Explain the execution of the read the application entry point example.**
  createRoot manages one DOM container. Calling root.render schedules React rendering; StrictMode checks only development behavior.
- **Advanced: What mistake or trade-off would you watch for when applying read the application entry point in a larger application?**
  Do not create a new root on each state update. Create it once and let component state drive updates.

## Summary
Knowing the entry point helps trace how source files become visible UI. createRoot manages one DOM container. Calling root.render schedules React rendering; StrictMode checks only development behavior.

## Revision checklist
- [ ] Explain and apply project structure.
- [ ] Explain and apply package.json and scripts.
- [ ] Explain and apply development server.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Install and run on Windows](../03-react-vite-setup/03-01-install-and-run-on-windows.md)

Next: [Build, configure, and diagnose](../03-react-vite-setup/03-03-build-configure-and-diagnose.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner` `react` `vite` `deployment` `debugging` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [vite.dev/guide/](https://vite.dev/guide/)
- [vite.dev/guide/static-deploy.html](https://vite.dev/guide/static-deploy.html)
