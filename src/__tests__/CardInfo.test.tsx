import { render, waitFor } from '@testing-library/react';
import { CardInfo } from '../components/CardInfo';
import { ditto } from './mocks/PokemonData';
import { MemoryRouter } from 'react-router-dom';

test('CardInfo', async () => {
  const { asFragment } = render(
    <MemoryRouter>
      <CardInfo />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
