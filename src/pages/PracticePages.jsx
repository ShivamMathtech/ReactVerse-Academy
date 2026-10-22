import { useSearchParams, Link } from 'react-router';
import { chapters, lessons } from '../data/curriculum';
import Quiz from '../components/learning/Quiz';
import ExerciseCard from '../components/learning/ExerciseCard';
function Selector({ value, onChange, all = false }) {
  return (
    <label className="compact-filter">
      Choose a chapter
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {all && <option value="">All chapters</option>}
        {chapters.map((c) => (
          <option key={c.id} value={c.id}>
            {c.id} · {c.title}
          </option>
        ))}
      </select>
    </label>
  );
}
export function QuizPage() {
  const [params, setParams] = useSearchParams();
  const chapter = chapters.some((c) => c.id === params.get('chapter'))
    ? params.get('chapter')
    : '00';
  const questions = lessons.filter((l) => l.chapterId === chapter).map((l) => l.quiz);
  return (
    <>
      <p className="eyebrow">CHECK YOUR UNDERSTANDING</p>
      <h1>Make it stick.</h1>
      <p className="lead">
        Choose a chapter, answer each question, and learn from the explanation. Retry as often as
        you need.
      </p>
      <Selector value={chapter} onChange={(c) => setParams({ chapter: c })} />
      <Quiz key={chapter} questions={questions} />
      <p className="muted">
        Scores are for practice and are not stored. Lesson completion is tracked separately.
      </p>
    </>
  );
}
export function ExercisesPage() {
  const [params, setParams] = useSearchParams();
  const chapter = params.get('chapter') || '00';
  const items = lessons.filter((l) => l.chapterId === chapter);
  return (
    <>
      <p className="eyebrow">THINK. TRY. DEBUG. REPEAT.</p>
      <h1>Your practice bench.</h1>
      <p className="lead">
        Try the challenge before revealing a solution. The source repository includes these
        exercises as Markdown files.
      </p>
      <Selector value={chapter} onChange={(c) => setParams({ chapter: c })} />
      {items.map((l) => (
        <div className="section" key={l.id}>
          <Link to={`/lessons/${l.slug}`}>Read lesson {l.id} →</Link>
          <ExerciseCard lesson={l} />
        </div>
      ))}
    </>
  );
}
export function InterviewPage() {
  const [params, setParams] = useSearchParams();
  const q = (params.get('q') || '').toLowerCase();
  const level = params.get('level') || '';
  const questions = lessons
    .flatMap((l) => l.interview.map((i) => ({ ...i, lesson: l })))
    .filter(
      (i) =>
        (!level || i.level === level) &&
        `${i.question} ${i.answer} ${i.lesson.title}`.toLowerCase().includes(q),
    );
  function set(key, value) {
    const next = new URLSearchParams(params);
    next.set(key, value);
    setParams(next, { replace: true });
  }
  return (
    <>
      <p className="eyebrow">EXPLAIN THE WHY</p>
      <h1>Interview-ready thinking.</h1>
      <p className="lead">
        {lessons.length * 3} discussion prompts. Practice with a small example and describe the
        trade-off, rather than memorizing a phrase.
      </p>
      <div className="filter-panel row">
        <label>
          Search questions
          <input value={params.get('q') || ''} onChange={(e) => set('q', e.target.value)} />
        </label>
        <label>
          Level
          <select value={level} onChange={(e) => set('level', e.target.value)}>
            <option value="">All levels</option>
            {['Basic', 'Intermediate', 'Advanced'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>
      <p role="status">{questions.length} prompts</p>
      {questions.map((i) => (
        <details className="panel interview-card" key={`${i.lesson.id}-${i.level}`}>
          <summary>
            <span className="eyebrow">
              {i.level} · {i.lesson.id}
            </span>
            <strong>{i.question}</strong>
          </summary>
          <p>{i.answer}</p>
          <Link to={`/lessons/${i.lesson.slug}`}>Review {i.lesson.title} →</Link>
        </details>
      ))}
      {!questions.length && <p>No matching questions. Try another term.</p>}
    </>
  );
}
