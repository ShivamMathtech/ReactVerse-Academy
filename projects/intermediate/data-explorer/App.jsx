import { useEffect, useState } from 'react';
import { students, mockRequest } from '../../shared/api';
export default function App() {
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [mode, setMode] = useState('success');
  const [retry, setRetry] = useState(0);
  const [result, setResult] = useState({ status: 'loading', rows: [] });
  useEffect(() => {
    const c = new AbortController();
    setResult({ status: 'loading', rows: [] });
    mockRequest(students, { mode, signal: c.signal })
      .then((rows) => setResult({ status: 'success', rows }))
      .catch((e) => {
        if (e.name !== 'AbortError') setResult({ status: 'error', rows: [] });
      });
    return () => c.abort();
  }, [mode, retry]);
  const rows = result.rows.filter((x) => x.name.toLowerCase().includes(q.toLowerCase()));
  const pages = Math.max(1, Math.ceil(rows.length / size));
  const current = Math.min(page, pages);
  return (
    <section className="panel">
      <p>Local simulated request.</p>
      <div className="row">
        <label>
          Search
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
          />
        </label>
        <label>
          Rows per page
          <select
            value={size}
            onChange={(e) => {
              setSize(Number(e.target.value));
              setPage(1);
            }}
          >
            {[5, 10, 20].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Response mode
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            {['success', 'empty', 'error'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>
      {result.status === 'loading' ? (
        <p role="status">Loading records…</p>
      ) : result.status === 'error' ? (
        <>
          <p role="alert">The simulated request failed.</p>
          <button onClick={() => setRetry((n) => n + 1)}>Retry</button>
        </>
      ) : (
        <>
          <ul>
            {rows.slice((current - 1) * size, current * size).map((x) => (
              <li key={x.id}>
                {x.name} · {x.track}
              </li>
            ))}
          </ul>
          {!rows.length && <p>No records match.</p>}
          <div className="row">
            <button disabled={current === 1} onClick={() => setPage(current - 1)}>
              Previous
            </button>
            <span>
              Page {current} of {pages}
            </span>
            <button disabled={current === pages} onClick={() => setPage(current + 1)}>
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}
