import { useState } from 'react';
import type { ReactNode, Key } from 'react';
export function List<T>({
  items,
  getKey,
  renderItem,
}: {
  items: T[];
  getKey: (item: T) => Key;
  renderItem: (item: T) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={getKey(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
type Result<T> =
  { status: 'loading' } | { status: 'error'; message: string } | { status: 'success'; data: T };
export default function Patterns() {
  const [result, setResult] = useState<Result<string[]>>({ status: 'loading' });
  return (
    <section>
      <h2>Typed union and generic list</h2>
      <button onClick={() => setResult({ status: 'success', data: ['Props', 'Events', 'Unions'] })}>
        Resolve sample data
      </button>
      {result.status === 'loading' ? (
        <p>Waiting for sample action.</p>
      ) : result.status === 'error' ? (
        <p>{result.message}</p>
      ) : (
        <List items={result.data} getKey={(x) => x} renderItem={(x) => <strong>{x}</strong>} />
      )}
    </section>
  );
}
