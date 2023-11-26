import { render, screen } from '@testing-library/react';
import Error404 from '../pages/404';

describe('Error404', () => {
  it('Check page', () => {
    render(<Error404 />);
    expect(screen.getByText(/Sorry, an unexpected error has occurred./i)).toBeInTheDocument();
  });
});
