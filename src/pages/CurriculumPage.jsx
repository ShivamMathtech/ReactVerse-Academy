import { chapters, phases } from '../data/curriculum';
import ChapterCard from '../components/learning/ChapterCard';
export default function CurriculumPage() {
  return (
    <>
      <p className="eyebrow">THE COMPLETE ROADMAP</p>
      <h1>One chapter at a time.</h1>
      <p className="lead">
        A deliberate path from web foundations to production decisions. Each chapter includes
        examples, practice, and a knowledge check.
      </p>
      {phases.map((phase, index) => (
        <section className="section" key={phase}>
          <div className="section-heading">
            <h2>
              <span className="phase-number">0{index}</span>
              {phase}
            </h2>
            <span>{chapters.filter((c) => c.phase === index).length} chapters</span>
          </div>
          <div className="chapter-grid">
            {chapters
              .filter((c) => c.phase === index)
              .map((c) => (
                <ChapterCard key={c.id} chapter={c} />
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
