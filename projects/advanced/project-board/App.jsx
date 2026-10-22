import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
const statuses = ['Backlog', 'Doing', 'Done'];
export default function App() {
  const [tasks, setTasks, error] = useStored(
    'rv-board',
    [{ id: 'seed', title: 'Plan the first feature', status: 'Backlog' }],
    (v) =>
      Array.isArray(v) &&
      v.every((x) => typeof x.title === 'string' && statuses.includes(x.status)),
  );
  const [q, setQ] = useState('');
  function add(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const title = String(new FormData(form).get('title')).trim();
    if (!title) return;
    setTasks((a) => [...a, { id: uid(), title, status: 'Backlog' }]);
    form.reset();
  }
  return (
    <>
      <form className="panel" onSubmit={add}>
        <label>
          New task
          <input name="title" required maxLength={120} />
        </label>
        <button>Add to backlog</button>
      </form>
      <label>
        Filter tasks
        <input value={q} onChange={(e) => setQ(e.target.value)} />
      </label>
      {error && <p role="alert">{error}</p>}
      <div className="kanban toolbar">
        {statuses.map((status) => (
          <section className="board-column" key={status}>
            <h2>
              {status} ({tasks.filter((t) => t.status === status).length})
            </h2>
            {tasks
              .filter((t) => t.status === status && t.title.toLowerCase().includes(q.toLowerCase()))
              .map((t) => (
                <article className="panel" key={t.id}>
                  <h3>{t.title}</h3>
                  <label>
                    Move {t.title}
                    <select
                      value={t.status}
                      onChange={(e) =>
                        setTasks((a) =>
                          a.map((x) => (x.id === t.id ? { ...x, status: e.target.value } : x)),
                        )
                      }
                    >
                      {statuses.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </label>
                  <button onClick={() => setTasks((a) => a.filter((x) => x.id !== t.id))}>
                    Delete {t.title}
                  </button>
                </article>
              ))}
          </section>
        ))}
      </div>
      <p>Moves use native selects so the complete board works with a keyboard.</p>
    </>
  );
}
