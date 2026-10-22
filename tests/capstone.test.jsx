import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';
import App from '../projects/advanced/studyflow/App';
import { reducer, validateTask, isTasks } from '../projects/advanced/studyflow/model';
import { loadCourses } from '../projects/advanced/studyflow/api';
test('task transitions preserve prior state', () => {
  const task = { id: '1', title: 'Learn', course: 'React', due: '', done: false };
  const state = [task];
  const next = reducer(state, { type: 'toggle', id: '1' });
  expect(next[0].done).toBe(true);
  expect(task.done).toBe(false);
  expect(reducer(next, { type: 'remove', id: '1' })).toEqual([]);
  expect(validateTask({ title: ' ', due: '' })).toContain('title');
  expect(isTasks([{ id: '1' }])).toBe(false);
});
test('capstone creates without randomUUID, edits, completes, filters and persists', async () => {
  vi.stubGlobal('crypto', {});
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('link', { name: 'Study planner' }));
  await user.type(screen.getByLabelText('Task title'), 'Read Hooks');
  await user.click(screen.getByRole('button', { name: 'Save task' }));
  expect(screen.getByRole('checkbox', { name: 'Read Hooks' })).toBeVisible();
  await user.click(screen.getByRole('button', { name: 'Edit Read Hooks' }));
  await user.clear(screen.getByLabelText('Task title'));
  await user.type(screen.getByLabelText('Task title'), 'Practice Hooks');
  await user.click(screen.getByRole('button', { name: 'Save task' }));
  await user.click(screen.getByRole('checkbox', { name: 'Practice Hooks' }));
  await user.selectOptions(screen.getByLabelText('Status'), 'active');
  expect(screen.queryByRole('checkbox', { name: 'Practice Hooks' })).not.toBeInTheDocument();
  expect(window.location.hash).toContain('status=active');
  expect(localStorage.getItem('rv-studyflow-v1')).toContain('Practice Hooks');
});
test('API adapter rejects HTTP errors and malformed payloads', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 503 }));
  await expect(loadCourses(new AbortController().signal)).rejects.toThrow('503');
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({ ok: true, json: async () => ({ bad: true }) }),
  );
  await expect(loadCourses(new AbortController().signal)).rejects.toThrow('shape');
  vi.unstubAllGlobals();
});
test('capstone loads a catalog and adds a course to planner', async () => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [{ id: 'react', title: 'React course', category: 'React', minutes: 40 }],
    }),
  );
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('link', { name: 'Course catalog' }));
  await user.click(await screen.findByRole('link', { name: 'View course →' }));
  await user.click(await screen.findByRole('button', { name: 'Plan this course' }));
  expect(screen.getByRole('status')).toHaveTextContent('Study task added');
  await user.click(screen.getByRole('link', { name: 'Open planner' }));
  expect(screen.getByRole('checkbox', { name: 'Practice React course' })).toBeVisible();
  vi.unstubAllGlobals();
});
