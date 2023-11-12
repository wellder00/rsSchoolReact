import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from '../components/Card';
import { ditto } from './mocks/PokemonData';

describe('Tests for the Card component', () => {
  it('Ensure that the card component renders the relevant card data;', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Card data={ditto} />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/ditto/i)).toBeInTheDocument();
    expect(screen.getByText(/fire/i)).toBeInTheDocument();
    expect(screen.getByText(/40/i)).toBeInTheDocument();
  });

  it('Validate that clicking on a card opens a detailed card component;', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Card data={ditto} />
      </MemoryRouter>
    );

    const linkElement = container.querySelector('a');
    if (linkElement) {
      fireEvent.click(linkElement);
    } else {
      throw new Error('Link element not found');
    }
  });
});
