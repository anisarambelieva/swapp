import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import Starship from '../starship.js';

const renderComponent = ({ id }) =>
  render(
    <MemoryRouter initialEntries={[`/starships/${id}`]}>
      <Route path="/starships/:id">
        <Starship />
      </Route>
    </MemoryRouter>,
  );

it('renders starship with id 5', async () => {
  const { queryByText } = renderComponent({ id: 5 });

  await waitFor(() => queryByText(/Starship with id 5/));
});
