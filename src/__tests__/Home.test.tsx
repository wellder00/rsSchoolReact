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
  });
});
