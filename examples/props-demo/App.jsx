function Profile({ name, skills = [], children }) {
  return (
    <article className="panel">
      <h2>{name}</h2>
      <p>{skills.join(' · ')}</p>
      {children}
    </article>
  );
}
export default function App() {
  return (
    <div className="grid">
      <Profile name="Maya" skills={['HTML', 'React']}>
        <p>Learning composition.</p>
      </Profile>
      <Profile name="Arun" skills={['JavaScript']}>
        <p>The same component, different props.</p>
      </Profile>
    </div>
  );
}
