import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardBlock } from '../components/CardBlock';

describe('Tests for the Card component', () => {
  it('Check that an appropriate message is displayed if no cards are present', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CardBlock />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
