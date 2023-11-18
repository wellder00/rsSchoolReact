import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByAltText(/teleportBottom/i)).toBeInTheDocument();
});
