import { useState } from 'react';
import examples from '../data/examples.json';
export default function ExamplesPage() {
  const [selected, setSelected] = useState(examples[0]);
  const [version, setVersion] = useState(0);
  return (
    <>
      <p className="eyebrow">SEE THE CONCEPT IN MOTION</p>
      <h1>A small example. A clear idea.</h1>
      <p className="lead">
        These are bundled, runnable React applications. Reset remounts the selected example;
        browser-persisted data remains unless you clear it inside the example.
      </p>
      <div className="example-controls">
        {examples.map((e) => (
          <button
            key={e.id}
            className={selected.id === e.id ? '' : 'secondary'}
            aria-pressed={selected.id === e.id}
            onClick={() => setSelected(e)}
          >
            {e.title}
          </button>
        ))}
      </div>
      <div className="section-heading section">
        <div>
          <h2 className="capitalize">{selected.title}</h2>
          <p>{selected.description}</p>
        </div>
        <div className="row">
          <button className="secondary" onClick={() => setVersion((v) => v + 1)}>
            Reset example
          </button>
          <a href={`${import.meta.env.BASE_URL}${selected.entry}`} target="_blank" rel="noreferrer">
            Open standalone ↗
          </a>
        </div>
      </div>
      <iframe
        key={`${selected.id}-${version}`}
        className="example-frame"
        title={`${selected.title} interactive example`}
        src={`${import.meta.env.BASE_URL}${selected.entry}`}
      />
    </>
  );
}
