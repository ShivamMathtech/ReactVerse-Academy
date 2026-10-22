import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
export default function App() {
  const [items, setItems, error] = useStored(
    'rv-todos',
    [],
    (v) =>
      Array.isArray(v) && v.every((x) => typeof x.id === 'string' && typeof x.title === 'string'),
  );
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('all');
  function add(e) {
    e.preventDefault();
    if (!title.trim()) return;
    setItems((a) => [...a, { id: uid(), title: title.trim(), done: false }]);
    setTitle('');
  }
  const visible = items.filter((x) => filter === 'all' || (filter === 'done' ? x.done : !x.done));
  return (
    <section>
      <form className="panel" onSubmit={add}>
        <label>
          New task
          <input
            value={title}
            maxLength={100}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <button>Add task</button>
      </form>
      {error && <p role="alert">{error}</p>}
      <label>
        Show
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All tasks</option>
          <option value="active">Active</option>
          <option value="done">Completed</option>
        </select>
      </label>
      <p>
        {items.filter((x) => x.done).length} of {items.length} complete
      </p>
      <ul className="clean">
        {visible.map((item) => (
          <li className={`item row between ${item.done ? 'done' : ''}`} key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() =>
                  setItems((a) => a.map((x) => (x.id === item.id ? { ...x, done: !x.done } : x)))
                }
              />
              <span className="title">{item.title}</span>
            </label>
            <button
              onClick={() => setItems((a) => a.filter((x) => x.id !== item.id))}
              aria-label={`Delete ${item.title}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {!visible.length && <p>No tasks in this view. Add a task or change the filter.</p>}
    </section>
  );
}
