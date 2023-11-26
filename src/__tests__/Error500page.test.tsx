import { render, screen } from '@testing-library/react';
import Error500 from '../pages/500';

describe('Error404', () => {
  it('Check page', () => {
    render(<Error500 />);
    expect(screen.getByText(/Error 500/i)).toBeInTheDocument();
  });
});
