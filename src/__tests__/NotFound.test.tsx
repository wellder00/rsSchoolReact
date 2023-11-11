import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '../views/Home';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from '@components/NotFound';

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route';

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
});
