import { useReducer, useState } from 'react';
import { products, money } from '../../shared/api';
import { cartReducer } from '../../intermediate/shopping-cart/App';
export default function App() {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('');
  const [cart, dispatch] = useReducer(cartReducer, {});
  const [message, setMessage] = useState('');
  const [order, setOrder] = useState(null);
  const total = products.reduce((s, p) => s + p.cents * (cart[p.id] || 0), 0);
  function checkout(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    if (!String(d.get('name')).trim() || String(d.get('address')).trim().length < 10) {
      setMessage('Enter your name and an address of at least 10 characters.');
      return;
    }
    setOrder({ name: String(d.get('name')).trim(), total });
    dispatch({ type: 'clear' });
    setMessage('');
    e.currentTarget.reset();
  }
  return (
    <>
      <p className="notice">
        Demo store. No payment, shipping, or real order is performed. Use fictional details.
      </p>
      {order && (
        <div className="panel" role="status">
          <h2>Practice order complete</h2>
          <p>
            {order.name}, your simulated total was {money(order.total)}.
          </p>
          <button onClick={() => setOrder(null)}>Dismiss confirmation</button>
        </div>
      )}
      <div className="row toolbar">
        <label>
          Search products
          <input value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            {['Desk', 'Study', 'Lifestyle'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid">
        {products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(q.toLowerCase()) &&
              (!category || p.category === category),
          )
          .map((p) => (
            <article className="panel" key={p.id}>
              <div className="catalog-art" aria-hidden="true">
                {p.name.slice(0, 1)}
              </div>
              <h2>{p.name}</h2>
              <p>
                {p.category} · {money(p.cents)}
              </p>
              <button onClick={() => dispatch({ type: 'add', id: p.id })}>Add {p.name}</button>
            </article>
          ))}
      </div>
      <section className="panel">
        <h2>Checkout · {money(total)}</h2>
        {products
          .filter((p) => cart[p.id])
          .map((p) => (
            <div className="row toolbar" key={p.id}>
              <span>
                {p.name} × {cart[p.id]}
              </span>
              <button
                aria-label={`Decrease ${p.name}`}
                onClick={() => dispatch({ type: 'quantity', id: p.id, quantity: cart[p.id] - 1 })}
              >
                −
              </button>
              <button
                aria-label={`Increase ${p.name}`}
                onClick={() => dispatch({ type: 'add', id: p.id })}
              >
                +
              </button>
              <button onClick={() => dispatch({ type: 'quantity', id: p.id, quantity: 0 })}>
                Remove
              </button>
            </div>
          ))}
        {!total ? (
          <p>Add a product to begin checkout.</p>
        ) : (
          <form onSubmit={checkout}>
            <label>
              Full name
              <input name="name" required maxLength={80} />
            </label>
            <label>
              Practice shipping address
              <textarea name="address" required minLength={10} maxLength={300} />
            </label>
            <button>Place simulated order</button>
            <p role="status">{message}</p>
          </form>
        )}
      </section>
    </>
  );
}
