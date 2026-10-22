import { useState } from 'react';
import { useStored, uid } from '../../shared/storage';
const blank = { id: '', name: '', quantity: '1' };
export default function App() {
  const [items, setItems, error] = useStored(
    'rv-inventory',
    [],
    (v) =>
      Array.isArray(v) &&
      v.every(
        (x) =>
          typeof x.id === 'string' && typeof x.name === 'string' && Number.isInteger(x.quantity),
      ),
  );
  const [draft, setDraft] = useState(blank);
  const [message, setMessage] = useState('');
  function save(e) {
    e.preventDefault();
    const quantity = Number(draft.quantity);
    if (
      !draft.name.trim() ||
      draft.quantity === '' ||
      !Number.isInteger(quantity) ||
      quantity < 0 ||
      quantity > 9999
    ) {
      setMessage('Enter a name and a whole quantity from 0 to 9999.');
      return;
    }
    const item = { ...draft, id: draft.id || uid(), name: draft.name.trim(), quantity };
    setItems((a) => (draft.id ? a.map((x) => (x.id === item.id ? item : x)) : [...a, item]));
    setDraft(blank);
    setMessage('Inventory saved.');
  }
  return (
    <>
      <form className="panel" onSubmit={save}>
        <h2>{draft.id ? 'Edit item' : 'Add item'}</h2>
        <label>
          Item name
          <input
            value={draft.name}
            maxLength={80}
            onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
          />
        </label>
        <label>
          Quantity
          <input
            type="number"
            value={draft.quantity}
            onChange={(e) => setDraft((d) => ({ ...d, quantity: e.target.value }))}
          />
        </label>
        <div className="row">
          <button>Save item</button>
          <button type="button" onClick={() => setDraft(blank)}>
            Cancel
          </button>
        </div>
        <p role="status">{message}</p>
      </form>
      {error && <p role="alert">{error}</p>}
      <div className="table-wrap">
        <table>
          <caption>Local inventory</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((x) => (
              <tr key={x.id}>
                <td>{x.name}</td>
                <td>{x.quantity}</td>
                <td>
                  <div className="row">
                    <button onClick={() => setDraft({ ...x, quantity: String(x.quantity) })}>
                      Edit {x.name}
                    </button>
                    <button
                      onClick={() => {
                        setItems((a) => a.filter((n) => n.id !== x.id));
                        if (draft.id === x.id) setDraft(blank);
                      }}
                    >
                      Delete {x.name}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!items.length && <p>Your inventory is empty.</p>}
    </>
  );
}
