import { render, screen } from '@testing-library/react';
import { Loader } from '../components/Loader';

test('should show loading indicator', () => {
  render(<Loader />);
  const loadingElement = screen.getByTestId('loading-icon');
  expect(loadingElement).toBeInTheDocument();
});
