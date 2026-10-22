import { useState } from 'react';
import { Stat } from '../../shared/ui';
const rows = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  lessons: 8 + ((i * 7) % 22),
  minutes: 40 + ((i * 13) % 100),
}));
export default function App() {
  const [period, setPeriod] = useState(7);
  const data = rows.slice(-period);
  function download() {
    const csv =
      'Day,Lessons,Minutes\n' + data.map((x) => `${x.day},${x.lessons},${x.minutes}`).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'learning-activity.csv';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <p>Illustrative dataset · not real learner analytics</p>
      <div className="row toolbar">
        <label>
          Period
          <select value={period} onChange={(e) => setPeriod(Number(e.target.value))}>
            <option value={7}>Last 7 sample days</option>
            <option value={14}>Last 14 sample days</option>
            <option value={30}>All 30 sample days</option>
          </select>
        </label>
        <button onClick={download}>Export CSV</button>
      </div>
      <div className="grid">
        <Stat title="Lessons practiced" value={data.reduce((s, x) => s + x.lessons, 0)} />
        <Stat title="Study minutes" value={data.reduce((s, x) => s + x.minutes, 0)} />
        <Stat
          title="Daily average"
          value={(data.reduce((s, x) => s + x.lessons, 0) / data.length).toFixed(1)}
        />
      </div>
      <section className="panel">
        <h2>Daily learning activity</h2>
        <div aria-hidden="true">
          {data.map((x) => (
            <div className="bar" key={x.day}>
              <span>Day {x.day}</span>
              <div className="bar-fill" style={{ width: `${(x.lessons / 30) * 70}%` }} />
              <span>{x.lessons}</span>
            </div>
          ))}
        </div>
        <details>
          <summary>View accessible data table</summary>
          <table>
            <caption>Activity for selected days</caption>
            <thead>
              <tr>
                <th>Day</th>
                <th>Lessons</th>
                <th>Minutes</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x) => (
                <tr key={x.day}>
                  <td>{x.day}</td>
                  <td>{x.lessons}</td>
                  <td>{x.minutes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      </section>
    </>
  );
}
