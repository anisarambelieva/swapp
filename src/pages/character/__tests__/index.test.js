import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import Character from '../index.js';

const renderComponent = ({ id }) =>
  render(
    <MemoryRouter initialEntries={[`/characters/${id}`]}>
      <Route path="/characters/:id">
        <Character />
      </Route>
    </MemoryRouter>,
  );

it('renders character with id 5', async () => {
  const { queryByText } = renderComponent({ id: 5 });

  await waitFor(() => queryByText(/Character with id 5/));
});
