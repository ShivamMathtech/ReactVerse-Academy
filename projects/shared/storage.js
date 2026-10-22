import { useState, useEffect } from 'react';
export function readStored(key, fallback, validate = () => true) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value !== null && validate(value) ? value : fallback;
  } catch {
    return fallback;
  }
}
export function useStored(key, initial, validate = Array.isArray) {
  const [value, setValue] = useState(() => readStored(key, initial, validate));
  const [error, setError] = useState('');
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setError('');
    } catch {
      setError('Browser storage is unavailable. Changes are kept in memory for this session.');
    }
  }, [key, value]);
  return [value, setValue, error];
}
export const uid = () =>
  globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
