import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
import { money } from '../../shared/api';
export default function App() {
  const [items, setItems, error] = useStored(
    'rv-expenses',
    [],
    (v) => Array.isArray(v) && v.every((x) => typeof x.id === 'string' && Number.isFinite(x.cents)),
  );
  const [message, setMessage] = useState('');
  function add(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const raw = String(d.get('amount'));
    const amount = Number(raw);
    const title = String(d.get('title')).trim();
    if (!title || !/^\d+(\.\d{1,2})?$/.test(raw) || amount <= 0 || amount > 1000000) {
      setMessage('Enter a title and an amount from ₹0.01 to ₹1,000,000 with at most two decimals.');
      return;
    }
    setItems((a) => [
      ...a,
      { id: uid(), title, category: d.get('category'), cents: Math.round(amount * 100) },
    ]);
    form.reset();
    setMessage('Expense added.');
  }
  return (
    <>
      <div className="panel">
        <h2>Total: {money(items.reduce((s, x) => s + x.cents, 0))}</h2>
        <form onSubmit={add} noValidate>
          <label>
            Description
            <input name="title" maxLength={80} />
          </label>
          <label>
            Amount (₹)
            <input name="amount" inputMode="decimal" />
          </label>
          <label>
            Category
            <select name="category">
              <option>Study</option>
              <option>Food</option>
              <option>Travel</option>
            </select>
          </label>
          <button>Add expense</button>
        </form>
        <p role="status">{message}</p>
        {error && <p role="alert">{error}</p>}
      </div>
      <div className="grid">
        {['Study', 'Food', 'Travel'].map((c) => (
          <div className="stat" key={c}>
            <span>{c}</span>
            <strong>
              {money(items.filter((x) => x.category === c).reduce((s, x) => s + x.cents, 0))}
            </strong>
          </div>
        ))}
      </div>
      <ul className="clean">
        {items.map((x) => (
          <li className="item row between" key={x.id}>
            <span>
              {x.title} · {money(x.cents)}
            </span>
            <button
              onClick={() => setItems((a) => a.filter((v) => v.id !== x.id))}
              aria-label={`Remove ${x.title}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {!items.length && <p>No expenses yet.</p>}
    </>
  );
}
