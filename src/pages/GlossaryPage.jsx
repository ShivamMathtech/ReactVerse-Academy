import { useSearchParams, Link } from 'react-router';
import glossary from '../data/glossary.json';
import { lessons } from '../data/curriculum';
export default function GlossaryPage() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  const matches = glossary
    .filter((t) => `${t.term} ${t.definition}`.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => a.term.localeCompare(b.term));
  return (
    <>
      <p className="eyebrow">PLAIN WORDS FOR IMPORTANT IDEAS</p>
      <h1>The developer’s glossary.</h1>
      <p className="lead">
        {glossary.length} concepts explained simply, with an example and a path back to the lesson.
      </p>
      <label className="compact-filter">
        Search glossary
        <input
          value={q}
          onChange={(e) => setParams({ q: e.target.value }, { replace: true })}
          placeholder="What does reconciliation mean?"
        />
      </label>
      <p role="status">{matches.length} terms</p>
      <div className="glossary-grid">
        {matches.map((t) => (
          <article className="panel" key={t.term}>
            <h2>{t.term}</h2>
            <p>{t.definition}</p>
            <code>{t.example}</code>
            <Link to={`/lessons/${lessons.find((l) => l.chapterId === t.chapterId).slug}`}>
              Explore the concept →
            </Link>
          </article>
        ))}
      </div>
      {!matches.length && <p>No matching terms. Try another spelling.</p>}
    </>
  );
}
