import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import Quiz from '../src/components/learning/Quiz';
import ExerciseCard from '../src/components/learning/ExerciseCard';
import CodeExample from '../src/components/learning/CodeExample';
import { ProgressProvider, useProgress, parseProgress } from '../src/hooks/useProgress';
import { lessons, filterLessons } from '../src/data/curriculum';
import DirectoryPage from '../src/pages/DirectoryPage';
import App from '../src/app/App';
const questions = [
  {
    id: 'a',
    question: 'Pick the stable ID',
    options: ['Record ID', 'Index'],
    correct: 0,
    explanation: 'The record retains its identity.',
  },
  {
    id: 'b',
    question: 'Choose the updater',
    options: ['count++', 'setCount(n => n+1)'],
    correct: 1,
    explanation: 'The callback receives pending state.',
  },
];
describe('Quiz behavior', () => {
  test('immediate feedback, locking, score and retry', async () => {
    const user = userEvent.setup();
    render(<Quiz questions={questions} />);
    await user.click(screen.getByRole('button', { name: 'Record ID' }));
    expect(screen.getByRole('status')).toHaveTextContent('Correct.');
    expect(screen.getByRole('button', { name: 'Index' })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Next question' }));
    await user.click(screen.getByRole('button', { name: 'count++' }));
    expect(screen.getByRole('status')).toHaveTextContent('Not quite.');
    await user.click(screen.getByRole('button', { name: 'See score' }));
    expect(screen.getByText('Your score: 1 / 2')).toBeVisible();
    await user.click(screen.getByRole('button', { name: 'Retry quiz' }));
    expect(screen.getByRole('button', { name: 'Record ID' })).toBeEnabled();
  });
  test('handles no questions', () => {
    render(<Quiz questions={[]} />);
    expect(screen.getByText(/No questions/)).toBeVisible();
  });
});
test('exercise hint and solution are independently revealable', async () => {
  const user = userEvent.setup();
  render(<ExerciseCard lesson={lessons[0]} />);
  expect(screen.queryByText(lessons[0].exercise.hint)).not.toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: 'Show hint' }));
  expect(screen.getByText(lessons[0].exercise.hint)).toBeVisible();
  await user.click(screen.getByRole('button', { name: 'Reveal solution' }));
  expect(screen.getByRole('button', { name: 'Hide solution' })).toHaveAttribute(
    'aria-expanded',
    'true',
  );
});
test('copy button writes the actual code', async () => {
  const user = userEvent.setup();
  const write = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
  render(<CodeExample text="console.log(42)" />);
  await user.click(screen.getByRole('button', { name: 'Copy code' }));
  expect(write).toHaveBeenCalledWith('console.log(42)');
  expect(screen.getByRole('status')).toHaveTextContent('Copied');
});
function ProgressProbe() {
  const { completed, toggle } = useProgress();
  return (
    <>
      <span>{completed.length} completed</span>
      <button onClick={() => toggle(lessons[0].id)}>Toggle</button>
    </>
  );
}
test('completion persists across remount and toggles without duplicates', async () => {
  const user = userEvent.setup();
  const view = render(
    <ProgressProvider>
      <ProgressProbe />
    </ProgressProvider>,
  );
  await user.click(screen.getByText('Toggle'));
  expect(localStorage.getItem('reactverse-progress-v1')).toContain(lessons[0].id);
  view.unmount();
  render(
    <ProgressProvider>
      <ProgressProbe />
    </ProgressProvider>,
  );
  expect(screen.getByText('1 completed')).toBeVisible();
  await user.click(screen.getByText('Toggle'));
  expect(screen.getByText('0 completed')).toBeVisible();
});
test('malformed and unknown persisted progress is discarded', () => {
  expect(parseProgress('{broken')).toEqual([]);
  expect(parseProgress(JSON.stringify([lessons[0].id, lessons[0].id, 'bad', 4]))).toEqual([
    lessons[0].id,
  ]);
});
test('search combines real metadata filters without mutating the source', () => {
  const result = filterLessons(lessons, {
    q: 'state',
    technology: 'react',
    difficulty: 'intermediate',
    sort: 'title',
  });
  expect(result.length).toBeGreaterThan(0);
  expect(
    result.every((l) => l.difficulty === 'intermediate' && l.technologyTags.includes('react')),
  ).toBe(true);
  expect(lessons[0].id).toBe('00-01');
  expect(filterLessons(lessons, { tag: 'not-a-tag' })).toEqual([]);
});
test('directory search shows empty state and clears filters', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/lessons?q=zzzz-no-match']}>
      <ProgressProvider>
        <DirectoryPage />
      </ProgressProvider>
    </MemoryRouter>,
  );
  expect(screen.getByText('No lessons match yet.')).toBeVisible();
  await user.click(screen.getByRole('button', { name: 'Reset search' }));
  expect(screen.getByRole('status')).toHaveTextContent('92 lessons found');
  await user.selectOptions(screen.getByLabelText('Technology'), 'typescript');
  expect(screen.getByRole('status')).not.toHaveTextContent('92 lessons found');
});
test('unknown route renders useful 404', async () => {
  render(
    <MemoryRouter initialEntries={['/missing']}>
      <App />
    </MemoryRouter>,
  );
  expect(await screen.findByRole('heading', { name: "This chapter isn't here." })).toBeVisible();
});
test('chapter routes resolve real data and navigate to lesson', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/chapters/00-getting-started']}>
      <App />
    </MemoryRouter>,
  );
  expect(
    await screen.findByRole('heading', { name: 'Course Introduction', level: 1 }),
  ).toBeVisible();
  await user.click(screen.getByRole('link', { name: /Think in user interfaces A declarative/ }));
  expect(
    await screen.findByRole('heading', { name: 'Think in user interfaces', level: 1 }),
  ).toBeVisible();
  await waitFor(() =>
    expect(screen.getByRole('heading', { name: 'Learning objectives' })).toBeVisible(),
  );
  await user.click(screen.getByRole('button', { name: 'Mark lesson complete' }));
  expect(screen.getByRole('button', { name: 'Completed · mark incomplete' })).toBeVisible();
});
