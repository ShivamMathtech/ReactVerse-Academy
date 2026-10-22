# Search and paginate derived views

> Chapter 07 · Lists and Conditional UI · beginner-plus · 21 minutes

## Learning objectives
- Explain and apply searchable lists.
- Explain and apply pagination fundamentals.
- Explain and apply reusable list components.

## Prerequisites
[Represent every data state](../07-lists-conditional-ui/07-02-represent-every-data-state.md)

## Why this concept exists
Pagination makes large collections manageable without confusing the relationship between filtering and navigation.

## A useful analogy
A key is a student ID, not their seat number. Students can move seats without changing identity.

## Concepts, syntax, and terminology
### Searchable lists
Store the query and derive matching records. Normalize case for a simple local search; do not silently change the source records.

### Pagination fundamentals
Use an offset of (page - 1) * pageSize. Reset or clamp the page when filters reduce the result count. Disable unavailable directions.

### Reusable list components
Accept items and a renderItem callback, or children, when visual structure repeats. Avoid abstracting away useful semantics such as table headers.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```js
const students = ['Asha', 'Arun', 'Meera', 'Zoya'];
const query = 'a'; const page = 2; const pageSize = 2;
const matches = students.filter(name => name.toLowerCase().includes(query));
console.log(matches.slice((page - 1) * pageSize, page * pageSize));
```

## Expected output
["Meera", "Zoya"]

## Line-by-line walkthrough
- Line 1: Defines the named binding from the expression on the right.
- Line 2: Defines the named binding from the expression on the right.
- Line 3: Keeps only records that satisfy the predicate.
- Line 4: Prints the observable value so you can compare it with the expected output.

## Internal behavior and data flow
Filtering happens before slicing. Filtering only the current page would hide matching records on other pages.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
Do not leave page=8 when a filter produces one page. Reset page on query changes or clamp it to the available range.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Change pageSize to 3 and predict page two. Independently implement a function returning totalPages and the requested slice.

<details>
<summary>Hint</summary>

Accept items and a renderItem callback, or children, when visual structure repeats. Avoid abstracting away useful semantics such as table headers.

</details>

## Exercise solution
```js
function paginate(items, page, size) {
  const totalPages = Math.max(1, Math.ceil(items.length / size));
  const current = Math.min(Math.max(1, page), totalPages);
  return { totalPages, items: items.slice((current - 1) * size, current * size) };
}
console.log(paginate(['a', 'b', 'c'], 5, 2));
```

Filtering happens before slicing. Filtering only the current page would hide matching records on other pages.

## Quiz
**What should happen when a new filter makes the current page invalid?**

1. Reset or clamp the page
2. Keep showing a blank page
3. Delete matching records

**Answer: 1.** Reset or clamp the page. Filtering happens before slicing. Filtering only the current page would hide matching records on other pages.

## Interview questions
- **Basic: What should happen when a new filter makes the current page invalid?**
  Reset or clamp the page
- **Intermediate: Explain the execution of the search and paginate derived views example.**
  Filtering happens before slicing. Filtering only the current page would hide matching records on other pages.
- **Advanced: What mistake or trade-off would you watch for when applying search and paginate derived views in a larger application?**
  Do not leave page=8 when a filter produces one page. Reset page on query changes or clamp it to the available range.

## Summary
Pagination makes large collections manageable without confusing the relationship between filtering and navigation. Filtering happens before slicing. Filtering only the current page would hide matching records on other pages.

## Revision checklist
- [ ] Explain and apply searchable lists.
- [ ] Explain and apply pagination fundamentals.
- [ ] Explain and apply reusable list components.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Represent every data state](../07-lists-conditional-ui/07-02-represent-every-data-state.md)

Next: [Choose controlled or uncontrolled input](../08-forms-validation/08-01-choose-controlled-or-uncontrolled-input.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `rendering` `state` `jsx` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
