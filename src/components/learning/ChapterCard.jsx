import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { lessonById } from '../../data/curriculum';
import { useProgress } from '../../hooks/useProgress';
export default function ChapterCard({ chapter }) {
  const { completed } = useProgress();
  const done = chapter.lessonIds.filter((id) => completed.includes(id)).length;
  return (
    <Link className="chapter-card" to={`/chapters/${chapter.slug}`}>
      <div className="row between">
        <span className="chapter-number">{chapter.id}</span>
        <ArrowUpRight size={19} />
      </div>
      <span className="eyebrow">{chapter.difficulty.replaceAll('-', ' ')}</span>
      <h3>{chapter.title}</h3>
      <p>
        {chapter.lessonIds.length} lessons ·{' '}
        {chapter.lessonIds.reduce((sum, id) => sum + lessonById[id].estimatedDuration, 0)} min
      </p>
      <progress
        aria-label={`${chapter.title} completion`}
        value={done}
        max={chapter.lessonIds.length}
      />
    </Link>
  );
}
