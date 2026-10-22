import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
export default function App() {
  const [notes, setNotes, error] = useStored(
    'rv-notes',
    [],
    (v) =>
      Array.isArray(v) &&
      v.every(
        (x) =>
          typeof x.id === 'string' && typeof x.title === 'string' && typeof x.body === 'string',
      ),
  );
  const [draft, setDraft] = useState({ id: '', title: '', body: '' });
  const [q, setQ] = useState('');
  const [message, setMessage] = useState('');
  function save(e) {
    e.preventDefault();
    if (!draft.title.trim()) {
      setMessage('Enter a note title.');
      return;
    }
    const note = { ...draft, id: draft.id || uid(), title: draft.title.trim() };
    setNotes((a) => (draft.id ? a.map((x) => (x.id === draft.id ? note : x)) : [note, ...a]));
    setDraft({ id: '', title: '', body: '' });
    setMessage('Note saved locally.');
  }
  return (
    <div className="grid">
      <div>
        <label>
          Search notes
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        {notes
          .filter((x) => (x.title + ' ' + x.body).toLowerCase().includes(q.toLowerCase()))
          .map((x) => (
            <article className="panel" key={x.id}>
              <h2>{x.title}</h2>
              <p style={{ whiteSpace: 'pre-wrap' }}>{x.body}</p>
              <div className="row">
                <button onClick={() => setDraft(x)}>Edit {x.title}</button>
                <button
                  onClick={() => {
                    setNotes((a) => a.filter((n) => n.id !== x.id));
                    if (draft.id === x.id) setDraft({ id: '', title: '', body: '' });
                  }}
                >
                  Delete {x.title}
                </button>
              </div>
            </article>
          ))}
        {!notes.length && <p>No notes yet. Write your first one.</p>}
      </div>
      <form className="panel" onSubmit={save}>
        <h2>{draft.id ? 'Edit note' : 'New note'}</h2>
        <label>
          Title
          <input
            value={draft.title}
            maxLength={100}
            onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
          />
        </label>
        <label>
          Body
          <textarea
            value={draft.body}
            maxLength={5000}
            onChange={(e) => setDraft((d) => ({ ...d, body: e.target.value }))}
          />
        </label>
        <button>Save note</button>
        <button type="button" onClick={() => setDraft({ id: '', title: '', body: '' })}>
          New / cancel editing
        </button>
        <p role="status">{message}</p>
        {error && <p role="alert">{error}</p>}
      </form>
    </div>
  );
}
