import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import projects from '../data/projects.json';
import Markdown from '../components/learning/Markdown';
import CodeExample from '../components/learning/CodeExample';
import NotFoundPage from './NotFoundPage';
const readmes = import.meta.glob('../../projects/*/*/README.md', {
  query: '?raw',
  import: 'default',
});
const sources = import.meta.glob('../../projects/*/*/App.jsx', {
  query: '?raw',
  import: 'default',
});
export default function ProjectsPage() {
  const { id } = useParams();
  const [params, setParams] = useSearchParams();
  const [loaded, setLoaded] = useState({ id: '', readme: '', source: '', error: false });
  const project = projects.find((p) => p.id === id);
  useEffect(() => {
    if (!project) return;
    let active = true;
    Promise.all(
      [readmes[`../../${project.path}/README.md`](), sources[`../../${project.path}/App.jsx`]].map(
        (x) => (typeof x === 'function' ? x() : x),
      ),
    )
      .then(([readme, source]) => {
        if (active) setLoaded({ id, readme, source, error: false });
      })
      .catch(() => {
        if (active) setLoaded({ id, readme: '', source: '', error: true });
      });
    return () => {
      active = false;
    };
  }, [project, id]);
  if (id && !project) return <NotFoundPage />;
  if (project)
    return (
      <>
        <div className="breadcrumbs">
          <Link to="/projects">Projects</Link>
          <span>/</span>
          {project.title}
        </div>
        <p className="eyebrow">{project.level} · FULL SOURCE INCLUDED</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.summary}</p>
        <div className="row">
          <a
            className="button"
            href={`${import.meta.env.BASE_URL}${project.entry}`}
            target="_blank"
            rel="noreferrer"
          >
            Run project <ArrowUpRight size={18} />
          </a>
          {id === 'studyflow' && (
            <a
              className="button secondary"
              href={`${import.meta.env.BASE_URL}projects/advanced/studyflow-typescript/index.html`}
              target="_blank"
              rel="noreferrer"
            >
              Run TypeScript edition ↗
            </a>
          )}
        </div>
        {loaded.id !== id ? (
          <p role="status">Loading project guide…</p>
        ) : loaded.error ? (
          <p role="alert">Guide could not load. The runnable project is still linked above.</p>
        ) : (
          <>
            <Markdown>{loaded.readme}</Markdown>
            <details className="panel">
              <summary>Read the complete App source</summary>
              <CodeExample language="jsx" text={loaded.source} />
            </details>
          </>
        )}
      </>
    );
  const level = params.get('level') || '';
  const q = params.get('q') || '';
  const visible = projects.filter(
    (p) =>
      (!level || p.level === level) &&
      `${p.title} ${p.summary}`.toLowerCase().includes(q.toLowerCase()),
  );
  function set(key, value) {
    const next = new URLSearchParams(params);
    next.set(key, value);
    setParams(next, { replace: true });
  }
  return (
    <>
      <p className="eyebrow">BUILD SOMETHING THAT CLICKS</p>
      <h1>From concepts to confidence.</h1>
      <p className="lead">
        {projects.length} complete educational projects. Every one has runnable source, a feature
        contract, implementation guidance, and extension ideas.
      </p>
      <div className="filter-panel row">
        <label>
          Search projects
          <input value={q} onChange={(e) => set('q', e.target.value)} />
        </label>
        <label>
          Level
          <select value={level} onChange={(e) => set('level', e.target.value)}>
            <option value="">All levels</option>
            {['beginner', 'intermediate', 'advanced'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="project-grid">
        {visible.map((p, i) => (
          <Link className="project-card" key={p.id} to={`/projects/${p.id}`}>
            <div className={`project-art art-${i % 4}`}>
              <span>
                {p.id === 'studyflow'
                  ? '↗'
                  : p.level === 'beginner'
                    ? '{ }'
                    : p.level === 'intermediate'
                      ? '</>'
                      : '▤'}
              </span>
              <small>{p.id === 'studyflow' ? 'THE CAPSTONE' : 'PROJECT LAB'}</small>
            </div>
            <div className="project-card-body">
              <span className="eyebrow">{p.level}</span>
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <span className="text-link">
                Explore & run <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {!visible.length && <div className="empty">No projects match these filters.</div>}
    </>
  );
}
