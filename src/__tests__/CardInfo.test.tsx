import { render, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { CardInfo } from '../components/CardInfo';
import { ditto } from './mocks/PokemonData';

test('CardInfo', async () => {
  const routes = [
    {
      path: '/about_character/8',
      element: <CardInfo />,
      loader: () => ditto,
    },
  ];

  const router = createMemoryRouter(routes, { initialEntries: ['/about_character/8'] });

  const { asFragment } = render(<RouterProvider router={router} />);

  await waitFor(() => {
    console.log(ditto);
    expect(asFragment()).toMatchSnapshot();
  });
});
