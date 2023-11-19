import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/Header';
import { ChangeEvent } from 'react';
import * as reduxHooks from 'react-redux';
import * as actions from '../store/inputValueSlice';
import '@testing-library/jest-dom';
import { ErrorBoundary } from '../components/ErrorBoundary';

jest.mock('react-redux');

const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');
describe('Header', () => {
  test('renders Header component', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    mockedSelector.mockReturnValue('');
    const component = render(
      <Header
        onSelectChange={(event: ChangeEvent<HTMLSelectElement>): void => {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('find text', () => {
    mockedSelector.mockReturnValue('some text');
    const component = render(
      <Header
        onSelectChange={(event: ChangeEvent<HTMLSelectElement>): void => {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
  });
  test('show dishatch actions', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedSaveValue = jest.spyOn(actions, 'saveItemValue');

    render(
      <Header
        onSelectChange={(event: ChangeEvent<HTMLSelectElement>): void => {
          throw new Error('Function not implemented.');
        }}
      />
    );
    const searchButton = screen.getByText('SEARCH');
    fireEvent.click(searchButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedSaveValue).toHaveBeenCalled();
  });
  test('get Error actions', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <Header
          onSelectChange={(event: ChangeEvent<HTMLSelectElement>): void => {
            throw new Error('Everything is broken, everything is destroyed');
          }}
        />
      </ErrorBoundary>
    );
    const errorButton = screen.getByText('TRY MAKE ERROR');
    fireEvent.click(errorButton);
    expect(screen.getByText('Reload Page')).toBeInTheDocument();
    consoleErrorSpy.mockRestore();
  });
});
