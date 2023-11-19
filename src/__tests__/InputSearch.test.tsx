import { render, screen } from '@testing-library/react';
import { InputSearch } from '../components/InputSearch';
import { ChangeEvent } from 'react';
import '@testing-library/jest-dom';

describe('InputSearch', () => {
  test('renders InputSearch component', () => {
    const component = render(
      <InputSearch
        placeholder={''}
        className={''}
        pokemonName={''}
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
        getInputValue={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(component).toMatchSnapshot();
    expect(screen.getByPlaceholderText('')).toBeInTheDocument();
    expect(screen.getByTestId('input-test-id')).toBeInTheDocument();
  });
});
