import { useState } from 'react';
const initial = {
  name: 'Maya Patel',
  role: 'Frontend learner',
  bio: 'Building useful things, one component at a time.',
  available: true,
};
export default function App() {
  const [profile, setProfile] = useState(initial);
  return (
    <div className="grid">
      <form className="panel" onSubmit={(e) => e.preventDefault()}>
        {['name', 'role', 'bio'].map((key) => (
          <label key={key}>
            {key}
            <input
              value={profile[key]}
              maxLength={key === 'bio' ? 160 : 60}
              onChange={(e) => setProfile((p) => ({ ...p, [key]: e.target.value }))}
            />
          </label>
        ))}
        <label>
          <input
            type="checkbox"
            checked={profile.available}
            onChange={(e) => setProfile((p) => ({ ...p, available: e.target.checked }))}
          />
          Available for projects
        </label>
        <button type="button" onClick={() => setProfile(initial)}>
          Reset profile
        </button>
      </form>
      <article className="panel">
        <div className="catalog-art" aria-hidden="true">
          {profile.name.slice(0, 1) || '?'}
        </div>
        <h2>{profile.name || 'Your name'}</h2>
        <p>{profile.role}</p>
        <p>{profile.bio}</p>
        <span className="tag">
          {profile.available ? 'Available for projects' : 'Currently learning'}
        </span>
      </article>
    </div>
  );
}
