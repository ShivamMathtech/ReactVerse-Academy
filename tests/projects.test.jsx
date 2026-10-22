import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi, describe } from 'vitest';
import Counter from '../projects/beginner/counter/App';
import Todo from '../projects/beginner/todo-app/App';
import Registration, { validate } from '../projects/intermediate/registration-form/App';
import Cart, { cartReducer } from '../projects/intermediate/shopping-cart/App';
import Weather from '../projects/intermediate/weather-dashboard/App';
import Components from '../projects/advanced/component-library/App';
import { mockRequest } from '../projects/shared/api';
test('counter updates with validated step and resets', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  await user.clear(screen.getByLabelText('Step'));
  await user.type(screen.getByLabelText('Step'), '3');
  await user.click(screen.getByRole('button', { name: 'Increase' }));
  expect(screen.getByText('3')).toBeVisible();
  await user.click(screen.getByRole('button', { name: 'Reset' }));
  expect(screen.getByText('0')).toBeVisible();
  await user.clear(screen.getByLabelText('Step'));
  expect(screen.getByRole('button', { name: 'Increase' })).toBeDisabled();
});
test('todo creation, completion filtering and persistence', async () => {
  const user = userEvent.setup();
  render(<Todo />);
  await user.type(screen.getByLabelText('New task'), 'Practice keys');
  await user.click(screen.getByRole('button', { name: 'Add task' }));
  await user.click(screen.getByRole('checkbox', { name: 'Practice keys' }));
  await user.selectOptions(screen.getByLabelText('Show'), 'active');
  expect(screen.queryByText('Practice keys')).not.toBeInTheDocument();
  await user.selectOptions(screen.getByLabelText('Show'), 'done');
  expect(screen.getByText('Practice keys')).toBeVisible();
  expect(localStorage.getItem('rv-todos')).toContain('Practice keys');
});
test('registration validates, focuses error, preserves values and confirms', async () => {
  const user = userEvent.setup();
  render(<Registration />);
  await user.click(screen.getByRole('button', { name: 'Review details' }));
  expect(screen.getByLabelText('Full name')).toHaveFocus();
  await user.type(screen.getByLabelText('Full name'), 'Test Learner');
  await user.type(screen.getByLabelText('Email'), 'learner@example.com');
  await user.click(screen.getByRole('checkbox'));
  await user.click(screen.getByRole('button', { name: 'Review details' }));
  expect(screen.getByText(/Test Learner · learner@example.com/)).toBeVisible();
  await user.click(screen.getByRole('button', { name: 'Back to details' }));
  expect(screen.getByLabelText('Full name')).toHaveValue('Test Learner');
  await user.click(screen.getByRole('button', { name: 'Review details' }));
  await user.click(screen.getByRole('button', { name: 'Confirm practice enrollment' }));
  expect(screen.getByRole('status')).toHaveTextContent('No account was created');
});
test('validator handles whitespace and invalid email', () => {
  expect(Object.keys(validate({ name: ' ', email: 'bad', consent: false }))).toEqual([
    'name',
    'email',
    'consent',
  ]);
});
test('cart reducer is immutable and removes zero quantities', () => {
  const first = { keyboard: 1 };
  const next = cartReducer(first, { type: 'add', id: 'keyboard' });
  expect(next.keyboard).toBe(2);
  expect(first.keyboard).toBe(1);
  expect(cartReducer(next, { type: 'quantity', id: 'keyboard', quantity: 0 })).toEqual({});
});
test('cart integrates product selection and removal', async () => {
  const user = userEvent.setup();
  render(<Cart />);
  await user.click(screen.getByRole('button', { name: 'Add Mechanical keyboard' }));
  expect(screen.getByLabelText('Mechanical keyboard quantity')).toHaveValue(1);
  await user.click(screen.getByRole('button', { name: 'Remove Mechanical keyboard' }));
  expect(screen.getByText('Your cart is empty.')).toBeVisible();
});
test('weather covers loading, success, empty and simulated failure', async () => {
  const user = userEvent.setup();
  render(<Weather />);
  expect(screen.getByRole('status')).toHaveTextContent('Loading weather');
  expect(await screen.findByText('23°C')).toBeVisible();
  await user.selectOptions(screen.getByLabelText('Simulation'), 'empty');
  expect(await screen.findByText('No observation available for this city.')).toBeVisible();
  await user.selectOptions(screen.getByLabelText('Simulation'), 'error');
  expect(await screen.findByRole('alert')).toHaveTextContent('Simulated connection failure');
  await user.selectOptions(screen.getByLabelText('Simulation'), 'success');
  expect(await screen.findByText('23°C')).toBeVisible();
});
test('mock requests reject on cancellation', async () => {
  const c = new AbortController();
  const promise = mockRequest([1], { signal: c.signal, delay: 1000 });
  c.abort();
  await expect(promise).rejects.toHaveProperty('name', 'AbortError');
});
test('tabs support arrow keys and native dialog restores focus', async () => {
  const user = userEvent.setup();
  render(<Components />);
  const overview = screen.getByRole('tab', { name: 'Overview' });
  overview.focus();
  await user.keyboard('{ArrowRight}');
  expect(screen.getByRole('tab', { name: 'Keyboard' })).toHaveFocus();
  expect(screen.getByRole('tab', { name: 'Keyboard' })).toHaveAttribute('aria-selected', 'true');
  const trigger = screen.getByRole('button', { name: 'Open example dialog' });
  await user.click(trigger);
  expect(screen.getByRole('dialog')).toBeVisible();
  await user.click(
    within(screen.getByRole('dialog')).getByRole('button', { name: 'Close dialog' }),
  );
  expect(trigger).toHaveFocus();
});
const modules = import.meta.glob('../projects/{beginner,intermediate,advanced}/*/App.jsx');
describe('All project entry components', () => {
  for (const [path, load] of Object.entries(modules)) {
    test(`renders ${path}`, async () => {
      vi.stubGlobal(
        'fetch',
        vi.fn().mockResolvedValue({
          ok: true,
          json: async () => [{ id: 'react', title: 'React', category: 'React', minutes: 40 }],
        }),
      );
      const { default: Project } = await load();
      const { container } = render(<Project />);
      expect(container.textContent.length).toBeGreaterThan(0);
      await waitFor(() =>
        expect(container.querySelector('button, a, input, select, h2, time')).not.toBeNull(),
      );
      vi.unstubAllGlobals();
    });
  }
});
