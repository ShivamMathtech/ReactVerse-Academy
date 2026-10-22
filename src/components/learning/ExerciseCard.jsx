import { useState } from 'react';
import CodeExample from './CodeExample';
export default function ExerciseCard({ lesson }) {
  const [hint, setHint] = useState(false);
  const [solution, setSolution] = useState(false);
  return (
    <section className="exercise-card">
      <p className="eyebrow">PUT IT INTO PRACTICE · {lesson.difficulty}</p>
      <h3>{lesson.title}</h3>
      <p>{lesson.exercise.problem}</p>
      <div className="row">
        <button className="secondary" aria-expanded={hint} onClick={() => setHint((v) => !v)}>
          {hint ? 'Hide hint' : 'Show hint'}
        </button>
        <button
          className="secondary"
          aria-expanded={solution}
          onClick={() => setSolution((v) => !v)}
        >
          {solution ? 'Hide solution' : 'Reveal solution'}
        </button>
      </div>
      {hint && <p className="callout">{lesson.exercise.hint}</p>}
      {solution && (
        <>
          <CodeExample text={lesson.exercise.solution} language={lesson.language} />
          <p>{lesson.exercise.explanation}</p>
        </>
      )}
    </section>
  );
}
