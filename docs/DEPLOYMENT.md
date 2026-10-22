# Static deployment

The default app is a client-only Vite build. All examples and projects are separate HTML entry points in the same `dist` output. Do not deploy `src` or `node_modules` as the site.

## Local production check

```bash
npm ci
npm run verify
npm run preview
```

Use the printed URL and open a lesson, a project, and the TypeScript capstone. Reload the URLs. A production build is included in the release ZIP for convenience; rebuilding is the source of truth.

## Routing and base paths

The Academy defaults to HashRouter (`/#/lessons/...`), so the fragment is handled entirely in the browser. This avoids SPA fallback requirements on GitHub Pages. Project routers also use hashes inside their own HTML entry.

For clean paths, set `VITE_ROUTER_MODE=browser` before building and configure your host to return the root `index.html` for application routes. Keep real `/assets`, `/data`, `/projects`, and `/examples` files intact. The repository includes Netlify and Vercel rewrites. BrowserRouter uses Vite's base as its basename.

For subpath hosting, set `VITE_BASE_PATH=/repository-name/` at build time. It controls Vite asset paths and the application's project/example links. It is independent of the router choice.

## Netlify

Choose the extracted repository root. Build command: `npm run build`. Publish directory: `dist`. Node version: 24. `netlify.toml` declares these values; `public/_redirects` is copied into the build and serves the Academy for unmatched application paths. Existing files take precedence.

## Vercel

Import the repository as a Vite project. Use the repository root, `npm ci`, `npm run build`, and output directory `dist`. `vercel.json` keeps filesystem routes before the Academy fallback. Keep the default hash router unless clean paths are required. No server function is needed.

## GitHub Pages

The workflow is manually triggered so uploading source does not silently publish it. Create a GitHub repository, push the source and lockfile, set Settings → Pages → Source to GitHub Actions, then run the Pages workflow. It builds with `VITE_BASE_PATH=/<repository-name>/`; for a user/organization root site, it uses `/`.

The regular CI workflow only validates source. No workflow run or hosted deployment has been claimed as executed from this archive.

## Public configuration

Copy `.env.example` to `.env.local` only if you need overrides. `VITE_REPOSITORY_URL` enables a real GitHub contribution link after you publish your source. Every VITE_ value is public client configuration. Store private service credentials only in trusted server infrastructure if you later add a backend.

## Common problems

- **PowerShell blocks npm.ps1:** use `npm.cmd`; do not weaken machine execution policy for this course.
- **vite not recognized:** run `npm ci` from the directory containing this package.json.
- **Native package platform error:** remove the old node_modules, retain the lockfile, and run `npm ci` on the target OS with optional dependencies enabled.
- **Unsupported engine:** install a compatible Node version and open a new terminal.
- **404 on a clean-path reload:** use hash mode or add the host's SPA fallback.
- **Missing assets under Pages:** build with the correct repository base path.
- **Blank iframe after opening index.html with file://:** run the HTTP dev/preview server; module applications are not designed for direct file URLs.
