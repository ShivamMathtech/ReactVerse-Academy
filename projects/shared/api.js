export const products = [
  { id: 'keyboard', name: 'Mechanical keyboard', category: 'Desk', cents: 349900 },
  { id: 'notebook', name: 'Developer notebook', category: 'Study', cents: 49900 },
  { id: 'lamp', name: 'Reading lamp', category: 'Desk', cents: 129900 },
  { id: 'stand', name: 'Laptop stand', category: 'Desk', cents: 179900 },
  { id: 'cards', name: 'JavaScript flashcards', category: 'Study', cents: 69900 },
  { id: 'bottle', name: 'Steel water bottle', category: 'Lifestyle', cents: 89900 },
];
export const students = Array.from({ length: 36 }, (_, index) => ({
  id: `s${index + 1}`,
  name:
    ['Asha', 'Kabir', 'Meera', 'Arun', 'Zoya', 'Riya'][index % 6] +
    ' ' +
    ['Sharma', 'Singh', 'Khan', 'Patel', 'Rao', 'Das'][Math.floor(index / 6)],
  track: ['React', 'JavaScript', 'TypeScript'][index % 3],
  score: 60 + ((index * 7) % 41),
}));
export function mockRequest(data, { signal, mode = 'success', delay = 350 } = {}) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new DOMException('Aborted', 'AbortError'));
      return;
    }
    const abort = () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', abort);
      if (mode === 'error')
        reject(new Error('Simulated connection failure. Try success mode and retry.'));
      else resolve(mode === 'empty' ? [] : structuredClone(data));
    }, delay);
    signal?.addEventListener('abort', abort, { once: true });
  });
}
export const money = (cents) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(cents / 100);
