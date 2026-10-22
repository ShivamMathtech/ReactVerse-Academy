# Choose controlled or uncontrolled input

> Chapter 08 · Forms and Validation · beginner-plus · 21 minutes

## Learning objectives
- Explain and apply controlled versus uncontrolled forms.
- Explain and apply input handling.
- Explain and apply form submission.

## Prerequisites
[Search and paginate derived views](../07-lists-conditional-ui/07-03-search-and-paginate-derived-views.md)

## Why this concept exists
The input model should match whether the UI needs every keystroke or only submitted values.

## A useful analogy
A form is a conversation: each field asks a clear question, and validation explains how to repair an answer.

## Concepts, syntax, and terminology
### Controlled versus uncontrolled forms
Controlled inputs use value and onChange; uncontrolled inputs use the DOM as the value source and are read with FormData or refs. Both can be appropriate.

### Input handling
Use checked for checkboxes and value for text/select controls. Radio buttons share a name and have distinct values. Convert numeric strings deliberately.

### Form submission
Use a real form and submit button. preventDefault keeps a client-only demo from navigating. Read named fields with FormData when live state is unnecessary.

## Small example
Static teaching snippet: React snippets belong in a Vite component module; JS snippets can run in the JavaScript lab unless they use browser DOM, modules, or network APIs. Multi-file fragments and test snippets require their named companion files. The Examples and Projects galleries provide complete runnable applications.

```jsx
import { useState } from 'react';
export default function App() {
  const [message, setMessage] = useState('');
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setMessage(`Hello, ${data.get('name')}`);
  }
  return <form onSubmit={submit}><label>Name <input name="name" required /></label>
    <button>Submit</button><p role="status">{message}</p></form>;
}
```

## Expected output
Submitting a nonempty name displays a greeting without navigating.

## Line-by-line walkthrough
- Line 1: Imports the named API or type from its module.
- Line 2: Defines a named operation; it runs when called or rendered.
- Line 3: Creates render state and its setter; the initial value is used on mount.
- Line 4: Defines a named operation; it runs when called or rendered.
- Line 5: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 6: Defines the named binding from the expression on the right.
- Line 7: Continues the surrounding expression or element; follow its opening statement for the data flow.
- Line 9: Returns the value or UI for this branch.
- Line 10: Continues the surrounding expression or element; follow its opening statement for the data flow.

## Internal behavior and data flow
FormData reads successful named controls. Disabled controls are omitted; unchecked checkboxes are absent rather than false.

The recurring flow is: input or props → pure render calculation → React commit → any external synchronization. Use the specific lifecycle described above; not every example needs an Effect.

## Common mistakes: incorrect versus correct
An input without a name is not included in FormData. Do not assume checkbox data is a JavaScript boolean.

## Practical use case
Use this concept when building counter application. Keep the ownership and failure behavior described above explicit.

## Guided exercise and independent challenge
Add a select for track and a checkbox for newsletter. Independently print only the submitted values without storing every keystroke.

<details>
<summary>Hint</summary>

Use a real form and submit button. preventDefault keeps a client-only demo from navigating. Read named fields with FormData when live state is unnecessary.

</details>

## Exercise solution
```jsx
function readForm(form) {
  const data = new FormData(form);
  return { track: data.get('track'), newsletter: data.has('newsletter') };
}
// Pass the submitted form element to readForm(event.currentTarget).
```

FormData reads successful named controls. Disabled controls are omitted; unchecked checkboxes are absent rather than false.

## Quiz
**Which field attribute is necessary for FormData inclusion?**

1. className
2. placeholder
3. name

**Answer: 3.** name. FormData reads successful named controls. Disabled controls are omitted; unchecked checkboxes are absent rather than false.

## Interview questions
- **Basic: Which field attribute is necessary for FormData inclusion?**
  name
- **Intermediate: Explain the execution of the choose controlled or uncontrolled input example.**
  FormData reads successful named controls. Disabled controls are omitted; unchecked checkboxes are absent rather than false.
- **Advanced: What mistake or trade-off would you watch for when applying choose controlled or uncontrolled input in a larger application?**
  An input without a name is not included in FormData. Do not assume checkbox data is a JavaScript boolean.

## Summary
The input model should match whether the UI needs every keystroke or only submitted values. FormData reads successful named controls. Disabled controls are omitted; unchecked checkboxes are absent rather than false.

## Revision checklist
- [ ] Explain and apply controlled versus uncontrolled forms.
- [ ] Explain and apply input handling.
- [ ] Explain and apply form submission.
- [ ] Predict the example output before running it.
- [ ] Explain and correct the documented mistake.
- [ ] Complete the challenge without copying the solution.

## Navigation
Previous: [Search and paginate derived views](../07-lists-conditional-ui/07-03-search-and-paginate-derived-views.md)

Next: [Validate and explain errors](../08-forms-validation/08-02-validate-and-explain-errors.md)

[Chapter index](README.md) · [Course index](../../README.md)

## Tags and study time
`beginner-plus` `react` `forms` `events` `accessibility` `theory` `code-example` `exercise` `quiz` `interview`

Estimated time: 21 minutes including guided practice; independent projects can take longer.

## Official references
- [react.dev/learn](https://react.dev/learn)
- [www.w3.org/WAI/tutorials/](https://www.w3.org/WAI/tutorials/)
