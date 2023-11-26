import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import { pokemonData } from '@/helpersTest/mockData';
import createMockRouter from '@/helpersTest/createMockRouter';
import { CardInfo } from '@/components/CardInfo';
import { Provider } from 'react-redux';
import { store } from '@/lib/redux/index';

describe('CardInfo Component', () => {
  const id = '1';
  const mockRouter = createMockRouter({
    pathname: `/${id}`,
    query: { page: '1', limit: '4', offset: '0' },
  });

  it('Find card weight', async () => {
    const { asFragment } = render(
      <RouterContext.Provider value={mockRouter}>
        <Provider store={store}>
          <CardInfo pokemonData={pokemonData} />
        </Provider>
      </RouterContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Weight/i)).toBeInTheDocument();
  });
  it('Find card name', async () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Provider store={store}>
          <CardInfo pokemonData={pokemonData} />
        </Provider>
      </RouterContext.Provider>
    );

    expect(screen.getByText(/Species: ditto/i)).toBeInTheDocument();
  });
  it('Find card defense', async () => {
    render(
      <RouterContext.Provider value={mockRouter}>
        <Provider store={store}>
          <CardInfo pokemonData={pokemonData} />
        </Provider>
      </RouterContext.Provider>
    );
    expect(screen.getByText(/defense: string/i)).toBeInTheDocument();
  });
});
