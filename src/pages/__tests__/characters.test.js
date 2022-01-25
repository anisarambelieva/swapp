import { render } from '@testing-library/react';

import Characters from '../characters.js';

test('renders Characters page', () => {
  const { queryByText } = render(<Characters />);
  expect(queryByText(/Characters Page/)).toBeInTheDocument();
});
