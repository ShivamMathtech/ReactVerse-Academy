import { NavLink, Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  BookOpen,
  Search,
  Code2,
  Terminal,
  PencilLine,
  CircleHelp,
  FolderKanban,
  MessagesSquare,
  Library,
  Tags,
  ChartNoAxesCombined,
  Circle,
} from 'lucide-react';
const Icons = {
  LayoutDashboard,
  BookOpen,
  Search,
  Code2,
  Terminal,
  PencilLine,
  CircleHelp,
  FolderKanban,
  MessagesSquare,
  Library,
  Tags,
  ChartNoAxesCombined,
  Circle,
};
import { navigation } from '../../app/navigation';
import { chapters, lessonById, lessons } from '../../data/curriculum';
import { useProgress } from '../../hooks/useProgress';
import ProgressIndicator from '../learning/ProgressIndicator';
export default function Sidebar({ open, onNavigate, mobile = false }) {
  const { completed } = useProgress();
  const location = useLocation();
  return (
    <aside
      inert={mobile && !open ? true : undefined}
      aria-hidden={mobile && !open ? true : undefined}
      id="academy-sidebar"
      className={`sidebar ${open ? 'is-open' : ''}`}
    >
      <p className="sidebar-label">YOUR WORKSPACE</p>
      <nav aria-label="Main navigation">
        {navigation.map(([to, title, icon]) => {
          const Icon = Icons[icon] || Icons.Circle;
          return (
            <NavLink
              key={to}
              to={to}
              onClick={onNavigate}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              <Icon size={18} />
              {title}
              {to === '/curriculum' && <span className="nav-count">{chapters.length}</span>}
            </NavLink>
          );
        })}
      </nav>
      <div className="sidebar-progress">
        <ProgressIndicator value={completed.length} total={lessons.length} />
        <Link to="/progress" onClick={onNavigate}>
          View your progress →
        </Link>
      </div>
      <details
        className="chapter-tree"
        open={location.pathname.startsWith('/lessons/') || undefined}
      >
        <summary>Chapter navigation</summary>
        {chapters.map((c) => (
          <details
            key={c.id}
            open={
              c.lessonIds.some((id) => location.pathname.endsWith(lessonById[id].slug)) || undefined
            }
          >
            <summary>
              {c.id} · {c.title}
            </summary>
            {c.lessonIds.map((id) => (
              <NavLink onClick={onNavigate} key={id} to={`/lessons/${lessonById[id].slug}`}>
                {completed.includes(id) ? '✓ ' : ''}
                {lessonById[id].title}
              </NavLink>
            ))}
          </details>
        ))}
      </details>
      <div className="sidebar-bottom">
        <Link to="/about" onClick={onNavigate}>
          About this course
        </Link>
        <span>Open source. Open possibilities.</span>
      </div>
    </aside>
  );
}
