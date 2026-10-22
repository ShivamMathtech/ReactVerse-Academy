import { useState } from 'react';
export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState('1');
  const amount = Number(step);
  const valid = Number.isInteger(amount) && amount > 0 && amount <= 100;
  return (
    <section className="panel">
      <label>
        Step
        <input
          type="number"
          min="1"
          max="100"
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
      </label>
      {!valid && <p role="alert">Use a whole step from 1 to 100.</p>}
      <p className="huge" aria-live="polite">
        {count}
      </p>
      <div className="row">
        <button disabled={!valid} onClick={() => setCount((n) => n - amount)}>
          Decrease
        </button>
        <button disabled={!valid} onClick={() => setCount((n) => n + amount)}>
          Increase
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}
