import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { ErrorPage } from '../components/ErrorPage';
import React from 'react';

describe('Error page component', () => {
  it('Check page', () => {
    const history: MemoryHistory = createMemoryHistory({ initialEntries: ['/error'] });

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/error" element={React.cloneElement(<ErrorPage />, { history })} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByRole('generic')).toBeInTheDocument();
  });
  it('Show error page', () => {
    const { asFragment } = render(<ErrorPage />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  });
});
