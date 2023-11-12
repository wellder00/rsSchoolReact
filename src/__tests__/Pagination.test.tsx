import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Pagination } from '../components/Pagination';

describe('Pagination', () => {
  it('Check rightArrow', () => {
    const pages = {
      offset: 0,
      currentPage: 1,
      lastPage: 8,
    };
    const { asFragment } = render(
      <MemoryRouter>
        <Pagination onChangePage={() => false} pages={pages} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByAltText(/rightArrow/i)).toBeInTheDocument();
  });
  it('Check leftArrow', () => {
    const pages = {
      offset: 0,
      currentPage: 1,
      lastPage: 8,
    };
    render(
      <MemoryRouter>
        <Pagination onChangePage={() => false} pages={pages} />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/leftArrow/i)).toBeInTheDocument();
  });
});
