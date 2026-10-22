import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
import { money } from '../../shared/api';
const invoices = [
  { id: 'INV-001', cents: 490000, status: 'Paid' },
  { id: 'INV-002', cents: 490000, status: 'Paid' },
  { id: 'INV-003', cents: 590000, status: 'Due' },
];
export default function App() {
  const [tab, setTab] = useState('Overview');
  const [team, setTeam, error] = useStored(
    'rv-team',
    [{ id: 'owner', name: 'Demo owner', role: 'Owner' }],
    (v) =>
      Array.isArray(v) && v.every((x) => typeof x.id === 'string' && typeof x.name === 'string'),
  );
  const [workspace, setWorkspace, error2] = useStored(
    'rv-workspace',
    'Learning studio',
    (v) => typeof v === 'string',
  );
  const [filter, setFilter] = useState('All');
  const [notice, setNotice] = useState('');
  function add(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const d = new FormData(f);
    const name = String(d.get('name')).trim();
    if (!name) return;
    setTeam((a) => [...a, { id: uid(), name, role: d.get('role') }]);
    f.reset();
    setNotice('Demo seat added locally. No invitation was sent.');
  }
  return (
    <>
      <p className="notice">
        Fictional workspace. No billing, permissions, or invitations are processed.
      </p>
      <nav aria-label="Workspace sections">
        {['Overview', 'Team', 'Billing', 'Settings'].map((x) => (
          <button key={x} aria-pressed={tab === x} onClick={() => setTab(x)}>
            {x}
          </button>
        ))}
      </nav>
      {tab === 'Overview' && (
        <div className="grid">
          <div className="stat">
            <span>Workspace</span>
            <strong>{workspace}</strong>
          </div>
          <div className="stat">
            <span>Local team seats</span>
            <strong>{team.length}</strong>
          </div>
        </div>
      )}
      {tab === 'Team' && (
        <section className="panel">
          <form onSubmit={add}>
            <label>
              Demo member name
              <input name="name" required maxLength={60} />
            </label>
            <label>
              Role
              <select name="role">
                <option>Member</option>
                <option>Viewer</option>
              </select>
            </label>
            <button>Add demo seat</button>
          </form>
          <p role="status">{notice}</p>
          <ul>
            {team.map((t) => (
              <li key={t.id} className="row toolbar">
                <span>
                  {t.name} · {t.role}
                </span>
                {t.id !== 'owner' && (
                  <button onClick={() => setTeam((a) => a.filter((x) => x.id !== t.id))}>
                    Remove {t.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
      {tab === 'Billing' && (
        <section className="panel">
          <label>
            Status
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              {['All', 'Paid', 'Due'].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
          <table>
            <caption>Sample invoices</caption>
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Total</th>
                <th>Status</th>
                <th>Export</th>
              </tr>
            </thead>
            <tbody>
              {invoices
                .filter((x) => filter === 'All' || x.status === filter)
                .map((x) => (
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{money(x.cents)}</td>
                    <td>{x.status}</td>
                    <td>
                      <a
                        download={`${x.id}.csv`}
                        href={`data:text/csv;charset=utf-8,${encodeURIComponent('Invoice,Cents,Status\n' + x.id + ',' + x.cents + ',' + x.status)}`}
                      >
                        Download {x.id}
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      )}
      {tab === 'Settings' && (
        <form
          className="panel"
          onSubmit={(e) => {
            e.preventDefault();
            const name = String(new FormData(e.currentTarget).get('workspace')).trim();
            if (name) {
              setWorkspace(name);
              setNotice('Workspace name saved locally.');
            }
          }}
        >
          <label>
            Workspace name
            <input name="workspace" defaultValue={workspace} required maxLength={50} />
          </label>
          <button>Save settings</button>
          <p role="status">{notice}</p>
        </form>
      )}
      {(error || error2) && <p role="alert">{error || error2}</p>}
    </>
  );
}
