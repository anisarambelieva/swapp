import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import Episode from '../index.js';

const renderComponent = ({ id }) =>
  render(
    <MemoryRouter initialEntries={[`/episodes/${id}`]}>
      <Route path="/episodes/:id">
        <Episode />
      </Route>
    </MemoryRouter>,
  );

it('renders episode with id 5', async () => {
  const { queryByText } = renderComponent({ id: 5 });

  await waitFor(() => queryByText(/Episode with id 5/));
});
