# Contributing to ReactVerse Academy

Contributions should make a concept more accurate, an explanation clearer, or a learner workflow more useful. Keep changes focused and respectful.

1. Reproduce the issue or state the teaching gap. Check the curriculum order and the official docs for the pinned dependency versions.
2. Create a branch for one change. Do not include unrelated formatting or dependency updates.
3. For lessons 00–22, edit `curriculum/source.json`. For project contracts edit `curriculum/projects.json`; runnable project source lives under `projects/`.
4. For the capstone, edit the TypeScript edition and run `npm run capstone:sync` to update the JavaScript edition. Review both outputs.
5. Run `npm run format`, then `npm run content:generate`. Format generated project wrappers if changed, and verify with `npm run format:check`.
6. Run `npm run verify`. Add a meaningful regression test when changing behavior; avoid tests that simply restate implementation.
7. Manually test the changed interaction with keyboard and narrow-screen layout. Document checks you could not perform.
8. Open a pull request using the template. Include the problem, resulting behavior, evidence, and remaining trade-offs.

A lesson needs stable metadata, specific objectives, correct code, expected output, a useful exercise/solution, and an explained quiz. Keep generated files committed so the repository is immediately usable without an authoring step. IDs remain stable so browser-local progress stays meaningful. Use lowercase hyphenated tags from `docs/TAGS.md`.

Do not add fake statistics, unverified test claims, secrets, copied copyrighted course text, paid API dependencies for the default experience, or buttons without behavior. Describe mock data as mock data. Use official technical references and explain framework-specific features explicitly.

By contributing, you agree that your contribution may be distributed under the MIT License. Report security concerns privately to the repository owner through their GitHub security reporting channel when configured. Do not post credentials or personal information in public issues.
