import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../components/Header';

describe('Tests for the Card component', () => {
  it('Testing home page', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Header findCharacter={() => ''} onSelectChange={() => ''} selectedValue={12} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/TRY MAKE ERROR/i)).toBeInTheDocument();
    expect(screen.getByText(/SEARCH/i)).toBeInTheDocument();
  });
});
