# Release checklist

- [ ] Review the source and generated curriculum coverage for accuracy.
- [ ] Run `npm ci` from a clean checkout.
- [ ] Run `npm run verify` and `npm run format:check`.
- [ ] Review `npm audit` and document unresolved advisories or maintenance exceptions.
- [ ] Check navigation, lesson content, examples, projects, quiz retry, and progress persistence in a browser.
- [ ] Check narrow/wide layouts, visible focus, keyboard-only use, and both themes.
- [ ] Perform screen-reader and real-device testing before claiming accessibility conformance.
- [ ] Update CHANGELOG, version record, and implementation report with actual results.
- [ ] Package source, lockfile, documentation, and optional dist; exclude node_modules, credentials, and runtime user data.
- [ ] Publish only after choosing a repository/host; do not invent a GitHub URL or badge.
