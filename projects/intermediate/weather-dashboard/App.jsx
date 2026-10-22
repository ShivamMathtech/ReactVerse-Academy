import { useEffect, useState } from 'react';
import { mockRequest } from '../../shared/api';
const weather = {
  Dehradun: { temp: 23, condition: 'Clear', humidity: 52 },
  Delhi: { temp: 29, condition: 'Hazy', humidity: 41 },
  Munnar: { temp: 18, condition: 'Cloudy', humidity: 78 },
};
export default function App() {
  const [city, setCity] = useState('Dehradun');
  const [mode, setMode] = useState('success');
  const [unit, setUnit] = useState('C');
  const [version, setVersion] = useState(0);
  const [result, setResult] = useState({ status: 'loading' });
  useEffect(() => {
    const c = new AbortController();
    setResult({ status: 'loading' });
    mockRequest([weather[city]], { signal: c.signal, mode })
      .then((data) => setResult({ status: 'success', data }))
      .catch((e) => {
        if (e.name !== 'AbortError') setResult({ status: 'error', message: e.message });
      });
    return () => c.abort();
  }, [city, mode, version]);
  return (
    <section className="panel">
      <p className="tag">Mock weather · not live observations</p>
      <div className="row">
        <label>
          City
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {Object.keys(weather).map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Simulation
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            {['success', 'empty', 'error'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <button onClick={() => setUnit((u) => (u === 'C' ? 'F' : 'C'))}>
          Use °{unit === 'C' ? 'F' : 'C'}
        </button>
      </div>
      {result.status === 'loading' ? (
        <p role="status">Loading weather…</p>
      ) : result.status === 'error' ? (
        <div>
          <p role="alert">{result.message}</p>
          <button onClick={() => setVersion((v) => v + 1)}>Retry</button>
        </div>
      ) : !result.data.length ? (
        <p>No observation available for this city.</p>
      ) : (
        <>
          <p className="huge">
            {Math.round(unit === 'C' ? result.data[0].temp : (result.data[0].temp * 9) / 5 + 32)}°
            {unit}
          </p>
          <p>
            {result.data[0].condition} · Humidity {result.data[0].humidity}%
          </p>
        </>
      )}
    </section>
  );
}
