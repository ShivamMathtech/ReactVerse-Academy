import { useReducer } from 'react';
import { products, money } from '../../shared/api';
export function cartReducer(state, action) {
  if (action.type === 'clear') return {};
  if (action.type === 'add')
    return { ...state, [action.id]: Math.min(99, (state[action.id] || 0) + 1) };
  if (action.type === 'quantity') {
    const next = { ...state };
    if (action.quantity <= 0) delete next[action.id];
    else next[action.id] = Math.min(99, action.quantity);
    return next;
  }
  return state;
}
export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, {});
  const total = products.reduce((sum, p) => sum + p.cents * (cart[p.id] || 0), 0);
  return (
    <div className="grid">
      <section>
        <h2>Products</h2>
        {products.map((p) => (
          <article className="panel row between" key={p.id}>
            <span>
              {p.name}
              <br />
              {money(p.cents)}
            </span>
            <button onClick={() => dispatch({ type: 'add', id: p.id })}>Add {p.name}</button>
          </article>
        ))}
      </section>
      <section className="panel">
        <h2>Your cart</h2>
        {products
          .filter((p) => cart[p.id])
          .map((p) => (
            <div key={p.id} className="item">
              <label>
                {p.name} quantity
                <input
                  type="number"
                  min="0"
                  max="99"
                  value={cart[p.id]}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    if (Number.isInteger(n) && n >= 0)
                      dispatch({ type: 'quantity', id: p.id, quantity: n });
                  }}
                />
              </label>
              <button onClick={() => dispatch({ type: 'quantity', id: p.id, quantity: 0 })}>
                Remove {p.name}
              </button>
            </div>
          ))}
        {!Object.keys(cart).length && <p>Your cart is empty.</p>}
        <h3>Total: {money(total)}</h3>
        <button disabled={!Object.keys(cart).length} onClick={() => dispatch({ type: 'clear' })}>
          Clear cart
        </button>
        <p>No payment is processed.</p>
      </section>
    </div>
  );
}
