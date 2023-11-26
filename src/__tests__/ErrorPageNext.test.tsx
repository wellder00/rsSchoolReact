import { render, screen } from '@testing-library/react';
import Error from '../pages/_error';

describe('Error', () => {
  it('Check page', () => {
    render(<Error />);
    expect(screen.getByText(/ERROR/i)).toBeInTheDocument();
  });
});
