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
  it('Ensure that the card component renders the relevant image', () => {
    render(
      <MemoryRouter>
        <Card data={ditto} />
      </MemoryRouter>
    );

    const imageElement = screen.getByAltText(/ditto/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toBe(ditto.sprites);
  });

  it('Ensure that the card component constructs the correct URL parameters', () => {
    render(
      <MemoryRouter>
        <Card data={ditto} />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(/ditto/i).closest('a');

    expect(linkElement).not.toBeNull(); // Добавим проверку на не null

    // Используем queryAttribute вместо toHaveAttribute
    expect(linkElement?.getAttribute('href')).toBe(
      '/about_character/8?limit=null&offset=null&page=null'
    );
  });
});
