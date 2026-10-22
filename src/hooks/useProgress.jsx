import { createContext, useContext, useEffect, useState } from 'react';
import { lessons } from '../data/curriculum';
const KEY = 'reactverse-progress-v1';
const known = new Set(lessons.map((l) => l.id));
export function parseProgress(raw) {
  try {
    const value = JSON.parse(raw);
    return Array.isArray(value) ? [...new Set(value.filter((id) => known.has(id)))] : [];
  } catch {
    return [];
  }
}
const ProgressContext = createContext(null);
export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState(() => {
    try {
      return parseProgress(localStorage.getItem(KEY));
    } catch {
      return [];
    }
  });
  const [storageError, setStorageError] = useState('');
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(completed));
      setStorageError('');
    } catch {
      setStorageError(
        'Progress is currently saved in memory only because browser storage is unavailable.',
      );
    }
  }, [completed]);
  return (
    <ProgressContext.Provider
      value={{
        completed,
        storageError,
        toggle: (id) => {
          if (known.has(id))
            setCompleted((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));
        },
        reset: () => setCompleted([]),
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) throw new Error('ProgressProvider is required');
  return value;
}
