import { useEffect, useRef, useState } from 'react';
export default function App() {
  const [running, setRunning] = useState(false);
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  const seq = useRef(0);
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const n = ++seq.current;
      const event = {
        id: n,
        time: new Date().toLocaleTimeString(),
        type: n % 3 === 0 ? 'warning' : 'info',
        text: n % 3 === 0 ? 'Simulated queue delay' : 'Simulated lesson activity',
      };
      setEvents((a) => [event, ...a].slice(0, 50));
    }, 1200);
    return () => clearInterval(id);
  }, [running]);
  return (
    <section className="panel">
      <p className="notice">Local timer simulation. No WebSocket or live users are connected.</p>
      <div className="row">
        <button onClick={() => setRunning((v) => !v)}>
          {running ? 'Pause stream' : 'Start stream'}
        </button>
        <button onClick={() => setEvents([])}>Clear history</button>
        <label>
          Event type
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
          </select>
        </label>
      </div>
      <p role="status">
        {running ? 'Running' : 'Paused'} · {events.length} retained events (maximum 50)
      </p>
      <ul className="clean">
        {events
          .filter((e) => filter === 'all' || e.type === filter)
          .map((e) => (
            <li className="item" key={e.id}>
              <span className="tag">{e.type}</span> {e.time} · {e.text} #{e.id}
            </li>
          ))}
      </ul>
      {!events.length && <p>Start the stream to generate local events.</p>}
    </section>
  );
}
