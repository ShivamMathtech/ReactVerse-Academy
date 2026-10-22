import { useRef } from 'react';
import { Link } from 'react-router';
import { chapters, lessons } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import ProgressIndicator from '../components/learning/ProgressIndicator';
import ChapterCard from '../components/learning/ChapterCard';
export default function ProgressPage({ dashboard = false }) {
  const { completed, reset, storageError } = useProgress();
  const dialog = useRef(null);
  const trigger = useRef(null);
  const next = lessons.find((l) => !completed.includes(l.id)) || lessons[0];
  return (
    <>
      <p className="eyebrow">YOUR OWN PACE. YOUR OWN PATH.</p>
      <h1>{dashboard ? 'Welcome to your learning space.' : 'Look how far you’ve come.'}</h1>
      <p className="lead">
        Progress is stored in this browser, on this device and site address. There is no account or
        cloud synchronization. Completion records practice, not a certification.
      </p>
      {storageError && (
        <p role="alert" className="callout">
          {storageError}
        </p>
      )}
      <div className="dashboard-grid">
        <section className="panel">
          <ProgressIndicator value={completed.length} total={lessons.length} />
          <p>
            {lessons
              .filter((l) => completed.includes(l.id))
              .reduce((sum, l) => sum + l.estimatedDuration, 0)}{' '}
            estimated lesson minutes completed
          </p>
        </section>
        <section className="continue-card">
          <p className="eyebrow">YOUR NEXT STEP</p>
          <h2>{next.title}</h2>
          <p>
            {next.estimatedDuration} minutes · {next.difficulty}
          </p>
          <Link className="button" to={`/lessons/${next.slug}`}>
            Continue learning →
          </Link>
        </section>
      </div>
      <div className="section-heading section">
        <h2>Progress by chapter</h2>
        <button className="secondary" ref={trigger} onClick={() => dialog.current.showModal()}>
          Reset progress
        </button>
      </div>
      <div className="chapter-grid">
        {chapters.map((c) => (
          <ChapterCard key={c.id} chapter={c} />
        ))}
      </div>
      <dialog
        ref={dialog}
        aria-labelledby="progress-reset-title"
        onClose={() => trigger.current?.focus()}
      >
        <h2 id="progress-reset-title">Reset course progress?</h2>
        <p>This will clear {completed.length} completed lessons from this browser.</p>
        <div className="row">
          <button className="secondary" onClick={() => dialog.current.close()}>
            Keep my progress
          </button>
          <button
            onClick={() => {
              reset();
              dialog.current.close();
            }}
          >
            Clear completed lessons
          </button>
        </div>
      </dialog>
    </>
  );
}
