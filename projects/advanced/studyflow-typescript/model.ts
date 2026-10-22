export type Task = { id: string; title: string; course: string; due: string; done: boolean };
// Local record identity, not a security token. randomUUID needs a secure context.
export function createTaskId(): string {
  return (
    globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`
  );
}
export type Action =
  | { type: 'add'; task: Task }
  | { type: 'toggle'; id: string }
  | { type: 'remove'; id: string }
  | { type: 'update'; task: Task }
  | { type: 'clear' };
export function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case 'add':
      return [...state, action.task];
    case 'toggle':
      return state.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    case 'remove':
      return state.filter((t) => t.id !== action.id);
    case 'update':
      return state.map((t) => (t.id === action.task.id ? action.task : t));
    case 'clear':
      return [];
  }
}
export function isTasks(value: unknown): value is Task[] {
  return (
    Array.isArray(value) &&
    value.every(
      (t) =>
        t &&
        typeof t.id === 'string' &&
        typeof t.title === 'string' &&
        typeof t.course === 'string' &&
        typeof t.due === 'string' &&
        typeof t.done === 'boolean',
    )
  );
}
export function validateTask(task: Pick<Task, 'title' | 'due'>): string {
  if (!task.title.trim()) return 'Enter a task title.';
  if (task.title.trim().length > 100) return 'Keep the title within 100 characters.';
  if (task.due && (!/^\d{4}-\d{2}-\d{2}$/.test(task.due) || Number.isNaN(Date.parse(task.due))))
    return 'Choose a valid due date.';
  return '';
}
