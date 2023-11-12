import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test } from 'vitest';

import { ErrorBoundary } from '../components/ErrorBoundary';

test('ErrorBoundary Component - renders child component when there is no error', async () => {
  render(
    <ErrorBoundary>
      <p>Child component</p>
    </ErrorBoundary>
  );

  expect(screen.getByText('Child component')).toBeInTheDocument();
});
