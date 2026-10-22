import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { lessons, chapters, lessonBySlug, lessonById } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import Markdown from '../components/learning/Markdown';
import Quiz from '../components/learning/Quiz';
import ExerciseCard from '../components/learning/ExerciseCard';
import NotFoundPage from './NotFoundPage';
const files = import.meta.glob('../../lessons/*/*.md', { query: '?raw', import: 'default' });
export default function LessonPage() {
  const { slug } = useParams();
  const lesson = lessonBySlug[slug];
  const { completed, toggle } = useProgress();
  const [content, setContent] = useState({ slug: '', text: '', error: false });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!lesson) return;
    let active = true;
    const loader = files[`../../${lesson.sourcePath}`];
    if (loader)
      loader()
        .then((text) => {
          if (active) setContent({ slug, text, error: false });
        })
        .catch(() => {
          if (active) setContent({ slug, text: '', error: true });
        });
    else setContent({ slug, text: '', error: true });
    return () => {
      active = false;
    };
  }, [lesson, slug, attempt]);
  if (!lesson) return <NotFoundPage />;
  const chapter = chapters.find((c) => c.id === lesson.chapterId);
  const related = lessons
    .filter((l) => l.id !== lesson.id && l.conceptTags.some((t) => lesson.conceptTags.includes(t)))
    .slice(0, 3);
  const body = content.text.split('## Guided exercise')[0].replace(/^# .+\n/, '');
  const ending = content.text.slice(content.text.indexOf('## Summary'));
  return (
    <article className="lesson-page">
      <div className="breadcrumbs">
        <Link to="/curriculum">Curriculum</Link>
        <span>/</span>
        <Link to={`/chapters/${chapter.slug}`}>
          {chapter.id} · {chapter.title}
        </Link>
      </div>
      <p className="eyebrow">
        LESSON {lesson.id} · {lesson.estimatedDuration} MINUTES
      </p>
      <h1>{lesson.title}</h1>
      <p className="lead">{lesson.description}</p>
      <div className="row between">
        <div className="tags">
          {lesson.conceptTags.map((t) => (
            <Link className="tag" to={`/tags/${t}`} key={t}>
              #{t}
            </Link>
          ))}
        </div>
        <button
          className={completed.includes(lesson.id) ? 'secondary completed-button' : 'button'}
          onClick={() => toggle(lesson.id)}
        >
          <Check size={16} />
          {completed.includes(lesson.id) ? 'Completed · mark incomplete' : 'Mark lesson complete'}
        </button>
      </div>
      {content.slug !== slug ? (
        <p role="status">Loading lesson…</p>
      ) : content.error ? (
        <div className="empty">
          <p role="alert">The lesson could not load.</p>
          <button onClick={() => setAttempt((n) => n + 1)}>Retry lesson</button>
        </div>
      ) : (
        <>
          <Markdown>{body}</Markdown>
          <ExerciseCard key={`exercise-${slug}`} lesson={lesson} />
          <Quiz key={`quiz-${slug}`} questions={[lesson.quiz]} />
          <details className="panel">
            <summary>Interview discussion</summary>
            {lesson.interview.map((q) => (
              <section key={q.level}>
                <h3>
                  {q.level}: {q.question}
                </h3>
                <p>{q.answer}</p>
              </section>
            ))}
          </details>
          <Markdown>{ending}</Markdown>
        </>
      )}
      <nav className="lesson-pagination" aria-label="Lesson navigation">
        {lesson.previous ? (
          <Link to={`/lessons/${lessonById[lesson.previous].slug}`}>
            <ArrowLeft size={18} />
            <span>
              <small>PREVIOUS LESSON</small>
              {lessonById[lesson.previous].title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {lesson.next && (
          <Link to={`/lessons/${lessonById[lesson.next].slug}`}>
            <span>
              <small>NEXT LESSON</small>
              {lessonById[lesson.next].title}
            </span>
            <ArrowRight size={18} />
          </Link>
        )}
      </nav>
      {related.length > 0 && (
        <section className="section">
          <h2>Keep connecting the dots.</h2>
          <div className="related-grid">
            {related.map((l) => (
              <Link key={l.id} to={`/lessons/${l.slug}`}>
                {l.title}
                <span>→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
