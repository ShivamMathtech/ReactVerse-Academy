export type Course = { id: string; title: string; category: string; minutes: number };
export async function loadCourses(signal: AbortSignal, mode = 'success'): Promise<Course[]> {
  if (mode === 'error')
    throw new Error('Simulated request failure. Select success mode and retry.');
  if (mode === 'empty') return [];
  const response = await fetch(`${import.meta.env.BASE_URL}data/courses.json`, { signal });
  if (!response.ok) throw new Error(`Courses unavailable (HTTP ${response.status}).`);
  const value: unknown = await response.json();
  if (
    !Array.isArray(value) ||
    !value.every(
      (c) =>
        c &&
        typeof c.id === 'string' &&
        typeof c.title === 'string' &&
        typeof c.category === 'string' &&
        typeof c.minutes === 'number',
    )
  )
    throw new Error('The course response has an unexpected shape.');
  return value;
}
