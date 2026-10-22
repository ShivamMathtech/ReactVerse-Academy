import { Link } from 'react-router';
import { chapters, lessons } from '../data/curriculum';
export default function AboutPage({ contribute = false }) {
  const repository = import.meta.env.VITE_REPOSITORY_URL;
  const validRepo = repository?.startsWith('https://github.com/');
  return (
    <article className="prose">
      <p className="eyebrow">OPEN SOURCE. OPEN POSSIBILITIES.</p>
      <h1>{contribute ? 'Make the next lesson better.' : 'A place to understand React.'}</h1>
      {contribute ? (
        <>
          <p>
            Good contributions make a concept easier to understand or a workflow more reliable.
            Start with a focused correction, reproduction, or accessible interaction improvement.
          </p>
          <h2>Contribution workflow</h2>
          <ol>
            <li>Read CONTRIBUTING.md and CODE_OF_CONDUCT.md in the source repository.</li>
            <li>Create a focused branch and explain the problem you are solving.</li>
            <li>
              Edit curriculum/source.json for core lesson content, then run npm run
              content:generate.
            </li>
            <li>
              Run npm run verify and npm run format:check. Report the commands actually executed.
            </li>
            <li>
              Open a pull request describing the behavior change, evidence, and remaining limits.
            </li>
          </ol>
          {validRepo ? (
            <a className="button" href={repository}>
              Open the GitHub repository ↗
            </a>
          ) : (
            <p>
              This download is GitHub-ready but has not been published to a GitHub repository. Set
              the public VITE_REPOSITORY_URL to your repository after uploading it.
            </p>
          )}
          <p>
            <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests">
              Read GitHub’s pull request guide ↗
            </a>
          </p>
        </>
      ) : (
        <>
          <p>
            ReactVerse Academy combines a structured course, executable projects, and practical
            reference material. Its {chapters.length} chapters and {lessons.length} lessons are
            written for deliberate practice, from first principles to industry decisions.
          </p>
          <h2>How to learn here</h2>
          <p>
            Predict the example, run it, change an input, and explain the result. Try an exercise
            before opening its solution. A completed checkbox is a reminder of practice, not a
            certification.
          </p>
          <h2>What stays local</h2>
          <p>
            Lesson progress, theme preferences, and selected project data remain in your browser. No
            account, paid API, or remote database is required. Mock data and simulated operations
            are labeled throughout.
          </p>
          <h2>Version assumptions</h2>
          <p>
            The repository pins React 19.3.1 and Vite 8.3.4 with an npm lockfile. See
            docs/VERSIONS.md for the full dependency set and verification notes. Server rendering,
            Server Components, payments, authentication, and real-time transports require additional
            infrastructure and are taught with those boundaries.
          </p>
          <h2>License and ownership</h2>
          <p>
            Source and original course materials are provided under the MIT License. React, Vite,
            and other dependency names belong to their respective projects. This is an independent
            educational repository.
          </p>
          <Link to="/contribute">Help improve the course →</Link>
        </>
      )}
    </article>
  );
}
