import { Link, useParams } from 'react-router';
import { chapters, lessonById } from '../data/curriculum';
import { useProgress } from '../hooks/useProgress';
import ProgressIndicator from '../components/learning/ProgressIndicator';
import NotFoundPage from './NotFoundPage';
export default function ChapterPage() {
  const { slug } = useParams();
  const chapter = chapters.find((c) => c.slug === slug);
  const { completed } = useProgress();
  if (!chapter) return <NotFoundPage />;
  return (
    <>
      <div className="breadcrumbs">
        <Link to="/curriculum">Curriculum</Link>
        <span>/</span>Chapter {chapter.id}
      </div>
      <p className="eyebrow">{chapter.phaseTitle}</p>
      <h1>{chapter.title}</h1>
      <div className="tags">
        {chapter.tags.map((t) => (
          <Link className="tag" key={t} to={`/tags/${t}`}>
            #{t}
          </Link>
        ))}
      </div>
      <div className="panel section">
        <ProgressIndicator
          value={chapter.lessonIds.filter((id) => completed.includes(id)).length}
          total={chapter.lessonIds.length}
          label="Chapter progress"
        />
      </div>
      <div className="lesson-list">
        {chapter.lessonIds.map((id, i) => {
          const l = lessonById[id];
          return (
            <Link key={id} className="lesson-row" to={`/lessons/${l.slug}`}>
              <span className="lesson-order">{completed.includes(id) ? '✓' : i + 1}</span>
              <div>
                <h2>{l.title}</h2>
                <p>{l.description}</p>
                <span>{l.estimatedDuration} minutes · exercise + quiz</span>
              </div>
            </Link>
          );
        })}
      </div>
      <Link className="button section" to={`/quizzes?chapter=${chapter.id}`}>
        Take the chapter quiz →
      </Link>
    </>
  );
}
