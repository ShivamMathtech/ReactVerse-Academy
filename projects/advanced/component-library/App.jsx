import { useRef, useState } from 'react';
const panels = [
  ['Overview', 'A component contract includes behavior, names, and focus rules.'],
  ['Keyboard', 'Use Left/Right, Home, and End to move between these tabs.'],
  ['Testing', 'Verify the selected panel, keyboard interaction, and restored dialog focus.'],
];
export default function App() {
  const [tab, setTab] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const tabs = useRef([]);
  const dialog = useRef(null);
  const trigger = useRef(null);
  function move(e) {
    const next =
      e.key === 'ArrowRight'
        ? (tab + 1) % 3
        : e.key === 'ArrowLeft'
          ? (tab + 2) % 3
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? 2
              : null;
    if (next === null) return;
    e.preventDefault();
    setTab(next);
    tabs.current[next]?.focus();
  }
  return (
    <section className="panel">
      <div role="tablist" aria-label="Component guide" className="row tabs">
        {panels.map((p, i) => (
          <button
            key={p[0]}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`tab-${i}`}
            role="tab"
            tabIndex={tab === i ? 0 : -1}
            aria-selected={tab === i}
            aria-controls={`panel-${i}`}
            onKeyDown={move}
            onClick={() => setTab(i)}
          >
            {p[0]}
          </button>
        ))}
      </div>
      {panels.map((p, i) => (
        <div
          key={p[0]}
          id={`panel-${i}`}
          role="tabpanel"
          aria-labelledby={`tab-${i}`}
          hidden={i !== tab}
          tabIndex={0}
        >
          <h2>{p[0]}</h2>
          <p>{p[1]}</p>
        </div>
      ))}
      <details>
        <summary>Why use native disclosure?</summary>
        <p>The browser provides toggle semantics and keyboard support.</p>
      </details>
      <p>
        <label>
          <input
            role="switch"
            type="checkbox"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          Email digest {enabled ? 'on' : 'off'}
        </label>
      </p>
      <button ref={trigger} onClick={() => dialog.current.showModal()}>
        Open example dialog
      </button>
      <dialog
        ref={dialog}
        aria-labelledby="dialog-heading"
        onClose={() => trigger.current?.focus()}
      >
        <h2 id="dialog-heading">A focused conversation</h2>
        <p>Escape or Close returns you to the trigger. This dialog stores no data.</p>
        <button onClick={() => dialog.current.close()}>Close dialog</button>
      </dialog>
    </section>
  );
}
