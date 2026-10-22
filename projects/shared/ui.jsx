import '../../src/styles/projects.css';
export function DemoLayout({ title, description, children }) {
  return (
    <div className="demo-layout">
      <header>
        <a href={`${import.meta.env.BASE_URL}#/projects`}>← ReactVerse Academy</a>
        <span>PROJECT LAB</span>
      </header>
      <main>
        <p className="eyebrow">LEARN BY BUILDING</p>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <div className="demo-content">{children}</div>
      </main>
      <footer>Educational project · Local data · No account or API key required</footer>
    </div>
  );
}
export function Notice({ children, error = false }) {
  return (
    <p className={error ? 'notice error' : 'notice'} role={error ? 'alert' : 'status'}>
      {children}
    </p>
  );
}
export function Stat({ title, value }) {
  return (
    <div className="stat">
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}
