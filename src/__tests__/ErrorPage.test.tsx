import { render, screen } from '@testing-library/react';
import { ErrorPage } from '../components/ErrorPage';
import '@testing-library/jest-dom';

describe('Error page component', () => {
  it('Show error page', () => {
    const { asFragment } = render(<ErrorPage />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  });
});
