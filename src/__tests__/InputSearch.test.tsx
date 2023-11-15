import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { InputSearch } from '../components/InputSearch';

describe('Tests for the Card component', () => {
  it('Testing home page', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <InputSearch
          placeholder={'text'}
          className={'someClass'}
          onChange={(e) => e}
          getInputValue={() => ''}
        />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
