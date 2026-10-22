import { useEffect, useState } from 'react';
export default function App() {
  const [now, setNow] = useState(() => new Date());
  const [zone, setZone] = useState('Asia/Kolkata');
  const [hour12, setHour12] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="panel">
      <div className="row">
        <label>
          Timezone
          <select value={zone} onChange={(e) => setZone(e.target.value)}>
            {['Asia/Kolkata', 'UTC', 'Europe/London', 'America/New_York', 'Asia/Tokyo'].map((z) => (
              <option key={z}>{z}</option>
            ))}
          </select>
        </label>
        <label>
          <input type="checkbox" checked={hour12} onChange={(e) => setHour12(e.target.checked)} />
          12-hour format
        </label>
      </div>
      <p className="huge">
        <time dateTime={now.toISOString()}>
          {now.toLocaleTimeString('en-GB', { timeZone: zone, hour12 })}
        </time>
      </p>
      <p>{now.toLocaleDateString('en-GB', { timeZone: zone, dateStyle: 'full' })}</p>
      <p className="muted">Uses your device clock, not a network time service.</p>
    </section>
  );
}
