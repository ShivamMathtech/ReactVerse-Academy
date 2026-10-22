# Dependency and compatibility record

Verified 2026-10-21 via npm registry metadata and installation. Runtime used for validation: v24.19.0.

## runtime

| Package               | Exact version |
| --------------------- | ------------- |
| @tanstack/react-query | 5.104.5       |
| lucide-react          | 1.60.0        |
| react                 | 19.3.1        |
| react-dom             | 19.3.1        |
| react-markdown        | 10.1.0        |
| react-router          | 8.5.0         |
| rehype-highlight      | 7.0.2         |
| remark-gfm            | 4.0.1         |

## tooling

| Package                     | Exact version |
| --------------------------- | ------------- |
| @eslint/js                  | 9.39.5        |
| @testing-library/jest-dom   | 7.0.1         |
| @testing-library/react      | 16.3.3        |
| @testing-library/user-event | 14.6.8        |
| @types/react                | 19.3.0        |
| @types/react-dom            | 19.3.0        |
| @vitejs/plugin-react        | 6.1.2         |
| eslint                      | 9.39.5        |
| eslint-plugin-jsx-a11y      | 6.10.2        |
| eslint-plugin-react         | 7.37.5        |
| eslint-plugin-react-hooks   | 7.1.1         |
| globals                     | 17.13.0       |
| jsdom                       | 30.1.3        |
| prettier                    | 3.9.10        |
| typescript                  | 7.0.2         |
| vite                        | 8.3.4         |
| vitest                      | 5.0.5         |

## Compatibility decisions

- Node >=22.12 is the repository minimum; Node 24 LTS is the documented choice.
- React 19.3.1 and React DOM 19.3.1 are matched. React 19.3 behavior is distinguished from earlier releases in chapter 20.
- Vite 8.3.4 and @vitejs/plugin-react 6.1.2 were installed together without peer resolution overrides.
- Vitest 5.0.5 is executed against the installed Vite.
- TypeScript 7.0.2 provides the compiler CLI; the capstone sync deliberately uses the CLI instead of the removed legacy transpileModule API.
- eslint-plugin-jsx-a11y 6.10.2 declares ESLint through v9. ESLint 9.39.5 is pinned for that compatibility; npm reports that ESLint release line as unsupported. Upgrade when the accessibility plugin supports a maintained ESLint line, and rerun checks. No --force or --legacy-peer-deps is required.
- JSX beginner code stays JavaScript. Strict TypeScript checks apply to the dedicated examples and capstone.

## References

- [React versions](https://react.dev/versions)
- [React 19.3 release](https://react.dev/blog/2026/09/09/react-19-3)
- [Vite prerequisites](https://vite.dev/guide/)
- [Vitest requirements](https://vitest.dev/guide/)
- [React Router declarative installation](https://reactrouter.com/start/declarative/installation)

Pinned versions describe this archive, not a promise that the same versions remain latest after the verification date.
