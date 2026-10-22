import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router';
import App from '../src/app/App';
import { ProgressProvider, useProgress } from '../src/hooks/useProgress';
const routes = [
  ['/', /Small steps\.\s*Big React energy\./],
  ['/dashboard', 'Welcome to your learning space.'],
  ['/curriculum', 'One chapter at a time.'],
  ['/lessons', 'Every lesson. Within reach.'],
  ['/tags', 'Explore by topic.'],
  ['/tags/hooks', 'Explore #hooks'],
  ['/examples', 'A small example. A clear idea.'],
  ['/playground', 'Change a line. See what happens.'],
  ['/exercises', 'Your practice bench.'],
  ['/quizzes', 'Make it stick.'],
  ['/projects', 'From concepts to confidence.'],
  ['/projects/studyflow', 'StudyFlow capstone'],
  ['/interview', 'Interview-ready thinking.'],
  ['/glossary', 'The developer’s glossary.'],
  ['/progress', 'Look how far you’ve come.'],
  ['/about', 'A place to understand React.'],
  ['/contribute', 'Make the next lesson better.'],
];
for (const [route, heading] of routes)
  test(`renders core route ${route}`, async () => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>,
    );
    expect(await screen.findByRole('heading', { name: heading, level: 1 })).toBeVisible();
  });
test('progress reset requires confirmation and cancel preserves data', async () => {
  localStorage.setItem('reactverse-progress-v1', '["00-01"]');
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/progress']}>
      <App />
    </MemoryRouter>,
  );
  await user.click(await screen.findByRole('button', { name: 'Reset progress' }));
  await user.click(screen.getByRole('button', { name: 'Keep my progress' }));
  expect(localStorage.getItem('reactverse-progress-v1')).toBe('["00-01"]');
  await user.click(screen.getByRole('button', { name: 'Reset progress' }));
  await user.click(screen.getByRole('button', { name: 'Clear completed lessons' }));
  expect(localStorage.getItem('reactverse-progress-v1')).toBe('[]');
});
function StorageNotice() {
  const { storageError, toggle, completed } = useProgress();
  return (
    <>
      <p role="status">{storageError}</p>
      <button onClick={() => toggle('00-01')}>Complete ({completed.length})</button>
    </>
  );
}
test('progress works in memory when storage rejects writes', async () => {
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
    throw new Error('Blocked');
  });
  const user = userEvent.setup();
  render(
    <ProgressProvider>
      <StorageNotice />
    </ProgressProvider>,
  );
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('memory only'));
  await user.click(screen.getByRole('button', { name: 'Complete (0)' }));
  expect(screen.getByRole('button', { name: 'Complete (1)' })).toBeVisible();
});
test('skip link keeps the route and focuses main content', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  await user.click(screen.getByRole('link', { name: 'Skip to main content' }));
  expect(screen.getByRole('main')).toHaveFocus();
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Small steps.');
});
