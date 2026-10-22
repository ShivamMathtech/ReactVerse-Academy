import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link,
  useParams,
  useSearchParams,
} from 'react-router';
import { students } from '../../shared/api';
function Layout() {
  return (
    <>
      <nav aria-label="Dashboard">
        <NavLink to="/" end>
          Overview
        </NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
function Directory() {
  const [params, setParams] = useSearchParams();
  const q = params.get('q') || '';
  return (
    <section className="panel">
      <label>
        Search
        <input value={q} onChange={(e) => setParams({ q: e.target.value }, { replace: true })} />
      </label>
      <ul>
        {students
          .filter((x) => x.name.toLowerCase().includes(q.toLowerCase()))
          .map((x) => (
            <li key={x.id}>
              <Link to={`/students/${x.id}`}>{x.name}</Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
function Detail() {
  const { id } = useParams();
  const s = students.find((x) => x.id === id);
  return s ? (
    <article className="panel">
      <h2>{s.name}</h2>
      <p>
        {s.track} · Score {s.score}
      </p>
      <Link to="/students">All students</Link>
    </article>
  ) : (
    <p>
      Student not found. <Link to="/students">Return to directory</Link>
    </p>
  );
}
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <section className="panel">
                <h2>Overview</h2>
                <p>{students.length} local sample students.</p>
              </section>
            }
          />
          <Route path="students" element={<Directory />} />
          <Route path="students/:id" element={<Detail />} />
          <Route
            path="settings"
            element={
              <section className="panel">
                <h2>Settings</h2>
                <p>This sample uses hash routing so direct links work on static hosting.</p>
              </section>
            }
          />
          <Route
            path="*"
            element={
              <p>
                Page not found. <Link to="/">Go home</Link>
              </p>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}
