import { Link } from 'react-router';
import { ArrowRight, ArrowUpRight, Check, Code2, Layers, Terminal, BookOpen } from 'lucide-react';
import { chapters, lessons } from '../data/curriculum';
import projects from '../data/projects.json';
import ChapterCard from '../components/learning/ChapterCard';
export default function HomePage() {
  return (
    <>
      <div className="page-kicker">
        <span>THE OPEN LEARNING REPOSITORY</span>
        <span className="version-pill">
          <i />
          React 19.3 · Vite 8
        </span>
      </div>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">A CLEAR PATH. REAL UNDERSTANDING.</span>
          <h1>
            Small steps.
            <br />
            Big <em>React</em> energy.
          </h1>
          <p className="hero-tagline">Learn React from Zero to Production.</p>
          <p className="hero-description">
            Go from your first component to applications you're proud to ship. One thoughtful
            lesson, one working example, one breakthrough at a time.
          </p>
          <div className="hero-actions">
            <Link className="button" to={`/lessons/${lessons[0].slug}`}>
              Start learning <ArrowRight size={18} />
            </Link>
            <Link className="text-link" to="/curriculum">
              Explore the curriculum <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-assurances">
            <span>
              <Check size={14} />
              Free & open source
            </span>
            <span>
              <Check size={14} />
              Learn at your pace
            </span>
            <span>
              <Check size={14} />
              No API keys
            </span>
          </div>
        </div>
        <div className="hero-visual" aria-label="A path from your first component to production">
          <div className="visual-label">
            <span className="tiny-dot" /> YOUR NEXT CHAPTER STARTS HERE
          </div>
          <div className="code-window">
            <div className="code-window-top">
              <span>● ● ●</span>
              <span>your-first-component.jsx</span>
            </div>
            <div className="code-lines">
              <p>
                <span>01</span>
                <b>function</b> <strong>YourNextChapter</strong>() {'{'}
              </p>
              <p>
                <span>02</span>&nbsp; <b>return</b> (
              </p>
              <p>
                <span>03</span>&nbsp;&nbsp; &lt;<strong>Curiosity</strong>&gt;
              </p>
              <p>
                <span>04</span>&nbsp;&nbsp;&nbsp; learn. build. repeat.
              </p>
              <p>
                <span>05</span>&nbsp;&nbsp; &lt;/<strong>Curiosity</strong>&gt;
              </p>
              <p>
                <span>06</span>&nbsp; );
              </p>
              <p>
                <span>07</span>
                {'}'}
              </p>
            </div>
            <div className="code-window-footer">
              <i />
              Ideas become interfaces.
            </div>
          </div>
          <div className="visual-path">
            <span>
              <Code2 size={16} />
              Foundations
            </span>
            <span>→</span>
            <span>
              <Layers size={16} />
              Real projects
            </span>
          </div>
          <div className="little-note">
            You don't need to know it all.
            <br />
            <strong>Just take the next step.</strong>
            <span>↗</span>
          </div>
        </div>
      </section>
      <div className="course-stats">
        {[
          [chapters.length, 'guided chapters'],
          [lessons.length, 'practical lessons'],
          [projects.length, 'runnable projects'],
          ['100%', 'browser-local progress'],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A LITTLE STRUCTURE GOES A LONG WAY</p>
            <h2>A path for every starting point.</h2>
          </div>
          <Link to="/curriculum">
            View the full roadmap <ArrowRight size={16} />
          </Link>
        </div>
        <div className="track-grid">
          {[
            {
              n: '01',
              title: 'Find your footing',
              level: 'beginner',
              text: 'Web foundations, JavaScript, and the joy of your first component.',
              icon: BookOpen,
              label: 'BEGINNER',
            },
            {
              n: '02',
              title: 'Connect the pieces',
              level: 'intermediate',
              text: 'Hooks, routing, APIs, and interfaces that respond to real needs.',
              icon: Layers,
              label: 'INTERMEDIATE',
            },
            {
              n: '03',
              title: 'Build with confidence',
              level: 'advanced',
              text: 'Types, tests, accessibility, performance, and a production mindset.',
              icon: Terminal,
              label: 'ADVANCED',
            },
          ].map((t) => (
            <Link className="track-card" key={t.n} to={`/lessons?difficulty=${t.level}`}>
              <div className="row between">
                <t.icon size={24} />
                <span>{t.n}</span>
              </div>
              <p className="eyebrow">{t.label}</p>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <span className="text-link">
                Explore track <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">START WITH SOMETHING SMALL</p>
            <h2>Your first chapters.</h2>
          </div>
          <Link to="/curriculum">
            All chapters <ArrowRight size={16} />
          </Link>
        </div>
        <div className="chapter-grid">
          {chapters.slice(0, 4).map((c) => (
            <ChapterCard key={c.id} chapter={c} />
          ))}
        </div>
      </section>
      <section className="build-banner">
        <div>
          <p className="eyebrow">LESS WATCHING. MORE MAKING.</p>
          <h2>Put your learning to work.</h2>
          <p>A todo app today. A complete study planner tomorrow.</p>
          <Link className="button" to="/projects">
            Find your next project <ArrowRight size={16} />
          </Link>
        </div>
        <div className="project-stack">
          {[projects[3], projects[17], projects[22]].map((p, i) => (
            <Link to={`/projects/${p.id}`} key={p.id}>
              <span className="project-icon">{['✓', '▤', '↗'][i]}</span>
              <div>
                <strong>{p.title}</strong>
                <small>{p.level} · full source included</small>
              </div>
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </div>
      </section>
      <section className="section topic-strip">
        <h2>Follow your curiosity.</h2>
        <div className="tags">
          {[
            'hooks',
            'state',
            'forms',
            'routing',
            'typescript',
            'accessibility',
            'testing',
            'performance',
          ].map((t) => (
            <Link className="tag" key={t} to={`/tags/${t}`}>
              #{t}
            </Link>
          ))}
        </div>
      </section>
      <section className="quickstart">
        <div>
          <p className="eyebrow">YOUR LOCAL LEARNING SPACE</p>
          <h2>Three commands. You're in.</h2>
          <p>
            Install Node 24 LTS, extract this repository, and open a terminal in its folder. On
            PowerShell, use npm.cmd if script policy blocks npm.
          </p>
          <Link to={`/lessons/${lessons.find((l) => l.chapterId === '03').slug}`}>
            Read the setup guide →
          </Link>
        </div>
        <pre>
          <code>
            cd react-vite-complete-course{'\n'}npm ci{'\n'}npm run dev
          </code>
        </pre>
      </section>
    </>
  );
}
