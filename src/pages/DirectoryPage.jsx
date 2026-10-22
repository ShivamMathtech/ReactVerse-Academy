import { Link, useSearchParams, useParams } from 'react-router';
import { Search, ArrowUpRight } from 'lucide-react';
import { chapters, lessons, categories, filterLessons } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
export default function DirectoryPage() {
  const [params, setParams] = useSearchParams();
  const { tag: routeTag } = useParams();
  const { completed } = useProgress();
  const filters = Object.fromEntries(params);
  if (routeTag) filters.tag = routeTag;
  const results = filterLessons(lessons, filters);
  function set(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  }
  return (
    <>
      <p className="eyebrow">FIND YOUR NEXT BREAKTHROUGH</p>
      <h1>{routeTag ? `Explore #${routeTag}` : 'Every lesson. Within reach.'}</h1>
      <p className="lead">
        Search actual lesson titles, descriptions, and tags. Your filters live in the URL, ready to
        bookmark or share.
      </p>
      <div className="filter-panel">
        <label className="search-field">
          <Search size={18} />
          <input
            aria-label="Search lessons"
            placeholder="Search components, Hooks, testing…"
            value={filters.q || ''}
            onChange={(e) => set('q', e.target.value)}
          />
        </label>
        <div className="filter-grid">
          {[
            ['difficulty', 'Difficulty', categories.difficulty],
            ['technology', 'Technology', categories.technology],
            ['chapter', 'Chapter', chapters.map((c) => [c.id, `${c.id} · ${c.title}`])],
            [
              'sort',
              'Sort by',
              [
                ['curriculum', 'Curriculum order'],
                ['title', 'Title A–Z'],
                ['duration', 'Shortest first'],
              ],
            ],
          ].map(([key, label, values]) => (
            <label key={key}>
              {label}
              <select
                value={filters[key] || (key === 'sort' ? 'curriculum' : '')}
                onChange={(e) => set(key, e.target.value)}
              >
                {key !== 'sort' && (
                  <option value="">
                    {
                      {
                        difficulty: 'All levels',
                        technology: 'All technologies',
                        chapter: 'All chapters',
                      }[key]
                    }
                  </option>
                )}
                {values.map((v) => (
                  <option value={Array.isArray(v) ? v[0] : v} key={Array.isArray(v) ? v[0] : v}>
                    {Array.isArray(v) ? v[1] : v}
                  </option>
                ))}
              </select>
            </label>
          ))}
          <button className="secondary" onClick={() => setParams({})}>
            Clear filters
          </button>
        </div>
      </div>
      <div className="row between result-count">
        <p role="status">
          {results.length} {results.length === 1 ? 'lesson' : 'lessons'} found
        </p>
        {filters.tag && <span className="tag">#{filters.tag}</span>}
      </div>
      <div className="lesson-list">
        {results.map((l) => (
          <Link key={l.id} className="lesson-row" to={`/lessons/${l.slug}`}>
            <span className="lesson-order">{completed.includes(l.id) ? '✓' : l.id}</span>
            <div>
              <span className="eyebrow">
                {l.difficulty} · {l.estimatedDuration} MIN
              </span>
              <h2>{l.title}</h2>
              <p>{l.description}</p>
              <div className="tags">
                {l.conceptTags.slice(0, 3).map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>
            </div>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </div>
      {!results.length && (
        <div className="empty">
          <h2>No lessons match yet.</h2>
          <p>Try a shorter search or remove a filter.</p>
          <button onClick={() => setParams({})}>Reset search</button>
          {routeTag && <Link to="/lessons">Browse all lessons</Link>}
        </div>
      )}
    </>
  );
}
