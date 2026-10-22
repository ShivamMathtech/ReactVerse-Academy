import { useState } from 'react';
import { useStored } from '../../shared/storage';
const movies = [
  { id: 'm1', title: 'Beyond the Compiler', genre: 'Adventure', rating: 8.2, year: 2025 },
  { id: 'm2', title: 'The Last Variable', genre: 'Mystery', rating: 7.9, year: 2024 },
  { id: 'm3', title: 'A Weekend in Dehradun', genre: 'Drama', rating: 8.4, year: 2026 },
  { id: 'm4', title: 'Debugging Tomorrow', genre: 'Adventure', rating: 7.5, year: 2023 },
  { id: 'm5', title: 'The Missing Semicolon', genre: 'Mystery', rating: 8.8, year: 2026 },
];
export default function App() {
  const [q, setQ] = useState('');
  const [genre, setGenre] = useState('');
  const [only, setOnly] = useState(false);
  const [saved, setSaved, error] = useStored(
    'rv-watchlist',
    [],
    (v) => Array.isArray(v) && v.every((x) => typeof x === 'string'),
  );
  const rows = movies
    .filter(
      (x) =>
        x.title.toLowerCase().includes(q.toLowerCase()) &&
        (!genre || x.genre === genre) &&
        (!only || saved.includes(x.id)),
    )
    .sort((a, b) => b.rating - a.rating);
  return (
    <>
      <p>Fictional catalog and sample ratings, provided for learning.</p>
      <div className="panel row">
        <label>
          Movie title
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <label>
          Genre
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">All genres</option>
            {['Adventure', 'Mystery', 'Drama'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          <input type="checkbox" checked={only} onChange={(e) => setOnly(e.target.checked)} />
          Watchlist only
        </label>
      </div>
      {error && <p role="alert">{error}</p>}
      <div className="grid">
        {rows.map((x) => (
          <article className="panel" key={x.id}>
            <div className="catalog-art" aria-hidden="true">
              ▶
            </div>
            <h2>{x.title}</h2>
            <p>
              {x.genre} · {x.year} · {x.rating}/10
            </p>
            <button
              aria-pressed={saved.includes(x.id)}
              onClick={() =>
                setSaved((a) => (a.includes(x.id) ? a.filter((id) => id !== x.id) : [...a, x.id]))
              }
            >
              {saved.includes(x.id) ? 'Remove from watchlist' : 'Add to watchlist'}
            </button>
          </article>
        ))}
      </div>
      {!rows.length && <p>No movies match these filters.</p>}
    </>
  );
}
