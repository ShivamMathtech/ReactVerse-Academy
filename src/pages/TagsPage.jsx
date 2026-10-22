import { useState } from 'react';
import { Link } from 'react-router';
import { lessons, categories } from '../data/curriculum';
export default function TagsPage() {
  const [q, setQ] = useState('');
  return (
    <>
      <p className="eyebrow">FOLLOW THE CONNECTIONS</p>
      <h1>Explore by topic.</h1>
      <p className="lead">
        A shared vocabulary across lessons, exercises, interviews, and projects.
      </p>
      <label className="compact-filter">
        Find a tag
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Try hooks or accessibility"
        />
      </label>
      {Object.entries(categories).map(([category, tags]) => (
        <section className="section" key={category}>
          <h2 className="capitalize">{category}</h2>
          <div className="tag-directory">
            {tags
              .filter((t) => t.includes(q.toLowerCase()))
              .map((t) => (
                <Link key={t} to={`/tags/${t}`}>
                  <strong>#{t}</strong>
                  <span>{lessons.filter((l) => l.tags.includes(t)).length} lessons →</span>
                </Link>
              ))}
          </div>
        </section>
      ))}
      {!Object.values(categories)
        .flat()
        .some((t) => t.includes(q.toLowerCase())) && <p>No tags match. Try a shorter term.</p>}
    </>
  );
}
