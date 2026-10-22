# Registration system

## Problem statement

Complete a two-step locally simulated enrollment with accessible validation.

## Feature contract

- Field-level validation and focus
- Review and back navigation
- Local submission confirmation

## Prerequisites

Complete chapter 13 and use the root Node/npm installation. Review forms, accessibility, state.

## Run

From the repository root: `npm ci`, then `npm run dev`. Open `/projects/intermediate/registration-form/index.html` at the printed development origin. For production run `npm run build` and `npm run preview`; the same entry is emitted in dist. No nested package installation is needed.

## Architecture and actual folder structure

- [App.jsx](App.jsx): complete feature implementation.
- [main.jsx](main.jsx): React mounting and shared project shell.
- [index.html](index.html): independently runnable Vite entry.
- [Shared helpers](../../shared): UI, storage, mock request, and sample records used by explicit imports.

## Implementation walkthrough

1. Read the imports to identify shared contracts.
2. Locate state initialization and list the authoritative values.
3. Trace each labeled control to its event handler.
4. Follow the immutable update into derived output.
5. Exercise empty and invalid input before adding functionality.
6. Inspect cleanup for any timer/request and the storage-failure branch if present.

## Complete runnable code

The linked files above are the solution, not pseudocode. All supporting imports are included in this archive. Study the smallest relevant state transition before reading the whole component.

## Testing strategy

Root `npm test` includes project render smoke tests and targeted interaction tests for counter, todo, registration, cart, component patterns, async states, and the capstone. Not every extension has a dedicated test. Manually verify keyboard flow, narrow layout, and reload behavior in a real browser.

## Extensions

Add undo to one reversible action; preserve a clear ownership model and test the restored result. For a real backend, replace the data boundary and add server-side validation/authorization rather than treating browser storage as trusted.

## Interview discussion

- Which values are source state and which are derived?
- How do identity and immutable updates affect this workflow?
- Which failure or cancellation path matters most?
- What would change if multiple users edited the same record?

## Scope

This is a complete educational frontend for the feature contract above. External authentication, payments, email, and multi-user synchronization are not implemented or implied.
