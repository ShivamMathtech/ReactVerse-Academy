import { useState } from 'react';
import { students } from '../../shared/api';
export default function App() {
  const [q, setQ] = useState('');
  const [track, setTrack] = useState('');
  const [sort, setSort] = useState('name');
  const rows = students
    .filter((x) => x.name.toLowerCase().includes(q.toLowerCase()) && (!track || x.track === track))
    .sort((a, b) => (sort === 'name' ? a.name.localeCompare(b.name) : b.score - a.score));
  return (
    <>
      <div className="panel row">
        <label>
          Search students
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <label>
          Track
          <select value={track} onChange={(e) => setTrack(e.target.value)}>
            <option value="">All tracks</option>
            {['React', 'JavaScript', 'TypeScript'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Sort
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="name">Name</option>
            <option value="score">Highest score</option>
          </select>
        </label>
      </div>
      <p role="status">{rows.length} students</p>
      <div className="grid">
        {rows.map((x) => (
          <article className="panel" key={x.id}>
            <h2>{x.name}</h2>
            <p>{x.track}</p>
            <strong>{x.score}/100</strong>
          </article>
        ))}
      </div>
      {!rows.length && <p>No students match. Try another name or track.</p>}
    </>
  );
}
