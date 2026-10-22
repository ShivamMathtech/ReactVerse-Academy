import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from 'react-router';
import { PlannerProvider, usePlanner } from './store';
import { createTaskId, validateTask } from './model';
import type { Task } from './model';
import { loadCourses } from './api';
import type { Course } from './api';
import '../../../src/styles/projects.css';
const empty: Task = { id: '', title: '', course: '', due: '', done: false };
function Shell() {
  const { storageError } = usePlanner();
  return (
    <div className="demo-layout">
      <header>
        <a href={`${import.meta.env.BASE_URL}#/projects`}>← ReactVerse Academy</a>
        <span>STUDYFLOW · CAPSTONE</span>
      </header>
      <main>
        <p className="eyebrow">YOUR LEARNING, IN FOCUS</p>
        <h1>Make room for progress.</h1>
        <nav aria-label="StudyFlow">
          <NavLink to="/" end>
            Overview
          </NavLink>
          <NavLink to="/planner">Study planner</NavLink>
          <NavLink to="/courses">Course catalog</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
        {storageError && <p role="alert">{storageError}</p>}
        <Outlet />
      </main>
      <footer>
        Browser-local learning planner · JavaScript and TypeScript variants share local tasks
      </footer>
    </div>
  );
}
function Overview() {
  const { tasks } = usePlanner();
  const completed = tasks.filter((t) => t.done).length;
  return (
    <>
      <div className="grid">
        <div className="stat">
          <span>Planned tasks</span>
          <strong>{tasks.length}</strong>
        </div>
        <div className="stat">
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>
        <div className="stat">
          <span>Completion</span>
          <strong>{tasks.length ? Math.round((completed / tasks.length) * 100) : 0}%</strong>
        </div>
      </div>
      <section className="panel">
        <h2>Your next small step</h2>
        {tasks.find((t) => !t.done) ? (
          <p>{tasks.find((t) => !t.done)?.title}</p>
        ) : (
          <p>Add a study task or explore the course catalog to get started.</p>
        )}
        <Link to="/planner">Open your planner →</Link>
      </section>
    </>
  );
}
function Planner() {
  const { tasks, dispatch } = usePlanner();
  const [params, setParams] = useSearchParams();
  const [draft, setDraft] = useState<Task>(empty);
  const [message, setMessage] = useState('');
  const input = useRef<HTMLInputElement>(null);
  const q = params.get('q') || '';
  const status = params.get('status') || 'all';
  const visible = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(q.toLowerCase()) &&
      (status === 'all' || (status === 'done' ? t.done : !t.done)),
  );
  function setFilter(key: string, value: string) {
    const next = new URLSearchParams(params);
    next.set(key, value);
    setParams(next, { replace: true });
  }
  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = validateTask(draft);
    if (error) {
      setMessage(error);
      input.current?.focus();
      return;
    }
    const task = { ...draft, title: draft.title.trim(), id: draft.id || createTaskId() };
    dispatch({ type: draft.id ? 'update' : 'add', task });
    setDraft(empty);
    setMessage('Task saved locally.');
  }
  return (
    <div className="grid">
      <section>
        <div className="row toolbar">
          <label>
            Search tasks
            <input value={q} onChange={(e) => setFilter('q', e.target.value)} />
          </label>
          <label>
            Status
            <select value={status} onChange={(e) => setFilter('status', e.target.value)}>
              <option value="all">All tasks</option>
              <option value="active">Active</option>
              <option value="done">Completed</option>
            </select>
          </label>
        </div>
        <ul className="clean">
          {visible.map((t) => (
            <li className="panel" key={t.id}>
              <label>
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => dispatch({ type: 'toggle', id: t.id })}
                />
                {t.title}
              </label>
              <p>
                {t.course || 'Independent study'}
                {t.due && ` · Due ${t.due}`}
              </p>
              <div className="row">
                <button
                  onClick={() => {
                    setDraft(t);
                    setMessage('');
                    input.current?.focus();
                  }}
                >
                  Edit {t.title}
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: 'remove', id: t.id });
                    if (draft.id === t.id) setDraft(empty);
                  }}
                >
                  Delete {t.title}
                </button>
              </div>
            </li>
          ))}
        </ul>
        {!visible.length && <p>No tasks match this view. Add a task or clear your filters.</p>}
      </section>
      <form className="panel" onSubmit={save} noValidate>
        <h2>{draft.id ? 'Edit task' : 'Plan a study session'}</h2>
        <label>
          Task title
          <input
            ref={input}
            value={draft.title}
            maxLength={100}
            onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
            aria-describedby="task-feedback"
          />
        </label>
        <label>
          Course or topic
          <input
            value={draft.course}
            maxLength={80}
            onChange={(e) => setDraft((d) => ({ ...d, course: e.target.value }))}
          />
        </label>
        <label>
          Due date (optional)
          <input
            type="date"
            value={draft.due}
            onChange={(e) => setDraft((d) => ({ ...d, due: e.target.value }))}
          />
        </label>
        <button>Save task</button>
        {draft.id && (
          <button
            type="button"
            onClick={() => {
              setDraft(empty);
              setMessage('Editing canceled.');
            }}
          >
            Cancel editing
          </button>
        )}
        <p id="task-feedback" role="status">
          {message}
        </p>
      </form>
    </div>
  );
}
type LoadState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; rows: Course[] };
function useCourses(mode: string, retry: number) {
  const [result, setResult] = useState<LoadState>({ status: 'loading' });
  useEffect(() => {
    let active = true;
    const c = new AbortController();
    setResult({ status: 'loading' });
    loadCourses(c.signal, mode)
      .then((rows) => {
        if (active) setResult({ status: 'success', rows });
      })
      .catch((error: unknown) => {
        if (active && !(error instanceof DOMException && error.name === 'AbortError'))
          setResult({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown request failure',
          });
      });
    return () => {
      active = false;
      c.abort();
    };
  }, [mode, retry]);
  return result;
}
function Courses() {
  const [mode, setMode] = useState('success');
  const [retry, setRetry] = useState(0);
  const [q, setQ] = useState('');
  const result = useCourses(mode, retry);
  return (
    <section>
      <div className="panel row">
        <label>
          Search courses
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <label>
          API demo mode
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option>success</option>
            <option>empty</option>
            <option>error</option>
          </select>
        </label>
      </div>
      <p>Bundled JSON fixture read through the Fetch API; failure modes are simulated.</p>
      {result.status === 'loading' ? (
        <p role="status">Loading courses…</p>
      ) : result.status === 'error' ? (
        <div className="panel">
          <p role="alert">{result.message}</p>
          <button onClick={() => setRetry((n) => n + 1)}>Retry courses</button>
        </div>
      ) : (
        <div className="grid">
          {result.rows
            .filter((c) => c.title.toLowerCase().includes(q.toLowerCase()))
            .map((c) => (
              <article className="panel" key={c.id}>
                <span className="tag">{c.category}</span>
                <h2>{c.title}</h2>
                <p>{c.minutes} minutes</p>
                <Link to={`/courses/${c.id}`}>View course →</Link>
              </article>
            ))}
          {!result.rows.filter((c) => c.title.toLowerCase().includes(q.toLowerCase())).length && (
            <p>No courses match. Clear the filter or choose success mode.</p>
          )}
        </div>
      )}
    </section>
  );
}
function CourseDetail() {
  const { id } = useParams();
  const result = useCourses('success', 0);
  const { dispatch } = usePlanner();
  const [message, setMessage] = useState('');
  if (result.status === 'loading') return <p role="status">Loading course…</p>;
  if (result.status === 'error')
    return (
      <p role="alert">
        {result.message} <Link to="/courses">Return to catalog</Link>
      </p>
    );
  const course = result.rows.find((c) => c.id === id);
  if (!course)
    return (
      <p>
        Course not found. <Link to="/courses">View catalog</Link>
      </p>
    );
  return (
    <article className="panel">
      <h2>{course.title}</h2>
      <p>
        A {course.minutes}-minute practice session in {course.category}. Read the related Academy
        lessons, run an example, and explain what you learned.
      </p>
      <button
        onClick={() => {
          dispatch({
            type: 'add',
            task: {
              id: createTaskId(),
              title: `Practice ${course.title}`,
              course: course.title,
              due: '',
              done: false,
            },
          });
          setMessage('Study task added to your planner.');
        }}
      >
        Plan this course
      </button>
      <p role="status">{message}</p>
      <Link to="/planner">Open planner</Link>
    </article>
  );
}
function Settings() {
  const { tasks, dispatch } = usePlanner();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  function exportTasks() {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(tasks, null, 2)], { type: 'application/json' }),
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = 'studyflow-tasks.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <section className="panel">
      <h2>Your data</h2>
      <p>
        Tasks stay in this browser and origin. There is no account, cloud sync, or real enrollment.
        Export a backup before clearing.
      </p>
      <div className="row">
        <button onClick={exportTasks}>Export tasks as JSON</button>
        <button ref={trigger} onClick={() => dialog.current?.showModal()}>
          Reset planner
        </button>
      </div>
      <dialog ref={dialog} aria-labelledby="reset-title" onClose={() => trigger.current?.focus()}>
        <h2 id="reset-title">Clear all local tasks?</h2>
        <p>This removes {tasks.length} tasks from this browser.</p>
        <div className="row">
          <button onClick={() => dialog.current?.close()}>Keep tasks</button>
          <button
            onClick={() => {
              dispatch({ type: 'clear' });
              dialog.current?.close();
            }}
          >
            Clear all tasks
          </button>
        </div>
      </dialog>
    </section>
  );
}
export default function App() {
  return (
    <PlannerProvider>
      <HashRouter>
        <Routes>
          <Route element={<Shell />}>
            <Route index element={<Overview />} />
            <Route path="planner" element={<Planner />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:id" element={<CourseDetail />} />
            <Route path="settings" element={<Settings />} />
            <Route
              path="*"
              element={
                <p>
                  Page not found. <Link to="/">Return to overview</Link>
                </p>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </PlannerProvider>
  );
}
