import { render } from '@testing-library/react';
import { CardInfo } from '../components/CardInfo';

test('Verify that the component renders the specified number of cards', () => {
  const { asFragment } = render(<CardInfo />);
  expect(asFragment()).toMatchSnapshot();
});
