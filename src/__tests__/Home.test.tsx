import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../views/Home';

describe('Tests for the Card component', () => {
  it('Testing home page', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.getByText(/SEARCH/i)).toBeInTheDocument();
    expect(screen.getByAltText(/title/i)).toBeInTheDocument();
    expect(screen.getByAltText(/teleportBottom/i)).toBeInTheDocument();
  });
});
