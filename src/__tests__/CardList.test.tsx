import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardBlock } from '../components/CardBlock';

test('Verify that the component renders the specified number of cards', () => {
  render(
    <MemoryRouter>
      <CardBlock />
    </MemoryRouter>
  );
  const cardWrapper = screen.getByTestId('card-wrapper');
  expect(cardWrapper).toBeInTheDocument();
});
