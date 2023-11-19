import { render, screen } from '@testing-library/react';
import { Loader } from '../components/Loader';
import '@testing-library/jest-dom';

test('should show loading indicator', () => {
  const { asFragment } = render(<Loader />);
  expect(asFragment()).toMatchSnapshot();
  const loadingElement = screen.getByTestId('loading-icon');
  expect(loadingElement).toBeInTheDocument();
});
