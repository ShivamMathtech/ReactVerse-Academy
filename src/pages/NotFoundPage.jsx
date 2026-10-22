import { Link } from 'react-router';
export default function NotFoundPage() {
  return (
    <section className="empty">
      <p className="eyebrow">404 · A SMALL DETOUR</p>
      <h1>This chapter isn't here.</h1>
      <p>The link may be outdated. Your next useful lesson is still waiting.</p>
      <Link className="button" to="/curriculum">
        Back to the curriculum →
      </Link>
    </section>
  );
}
