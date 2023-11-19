import { NotFound } from '../components/NotFound';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('should show loading indicator', () => {
  const { asFragment } = render(<NotFound />);
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
