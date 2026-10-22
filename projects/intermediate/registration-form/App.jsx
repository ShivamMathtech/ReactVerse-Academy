import { useRef, useState } from 'react';
export function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Enter a valid email address.';
  if (!values.consent) errors.consent = 'Confirm this is a practice submission.';
  return errors;
}
export default function App() {
  const [values, setValues] = useState({ name: '', email: '', track: 'React', consent: false });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(0);
  const form = useRef(null);
  function submit(e) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) {
      form.current.elements.namedItem(Object.keys(next)[0])?.focus();
      return;
    }
    setStep(1);
  }
  if (step === 2)
    return (
      <section className="panel">
        <h2>Practice enrollment complete</h2>
        <p role="status">
          {values.name}, your {values.track} selection was recorded for this session. No account was
          created or email sent.
        </p>
        <button
          onClick={() => {
            setStep(0);
            setValues({ name: '', email: '', track: 'React', consent: false });
          }}
        >
          Start again
        </button>
      </section>
    );
  if (step === 1)
    return (
      <section className="panel">
        <h2>Review your details</h2>
        <p>
          {values.name} · {values.email} · {values.track}
        </p>
        <div className="row">
          <button onClick={() => setStep(0)}>Back to details</button>
          <button onClick={() => setStep(2)}>Confirm practice enrollment</button>
        </div>
      </section>
    );
  return (
    <form ref={form} className="panel" onSubmit={submit} noValidate>
      <h2>Step 1 of 2 · Details</h2>
      {['name', 'email'].map((key) => (
        <div key={key}>
          <label htmlFor={`registration-${key}`}>
            {key === 'name' ? 'Full name' : 'Email'}
            <input
              id={`registration-${key}`}
              name={key}
              type={key === 'email' ? 'email' : 'text'}
              value={values[key]}
              onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
              aria-invalid={Boolean(errors[key])}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
            />
          </label>
          {errors[key] && (
            <span id={`${key}-error`} className="error-text">
              {errors[key]}
            </span>
          )}
        </div>
      ))}
      <label>
        Track
        <select
          value={values.track}
          onChange={(e) => setValues((v) => ({ ...v, track: e.target.value }))}
        >
          <option>React</option>
          <option>JavaScript</option>
          <option>TypeScript</option>
        </select>
      </label>
      <label>
        <input
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
        />
        This is a practice submission; I will not enter sensitive information.
      </label>
      {errors.consent && (
        <span id="consent-error" className="error-text">
          {errors.consent}
        </span>
      )}
      <button>Review details</button>
    </form>
  );
}
