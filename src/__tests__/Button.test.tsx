import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('Button work', () => {
    render(<Button children={'Hello'} className={'helloClass'} />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});
