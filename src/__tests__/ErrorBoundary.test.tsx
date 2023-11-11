import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../components/ErrorBoundary';

test('renders ErrorBoundary component', async () => {
  render(
    <ErrorBoundary>
      <p>Child component</p>
    </ErrorBoundary>
  );

  expect(screen.getByText('Child component')).toBeInTheDocument();
});
