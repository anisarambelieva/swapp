import { render, waitFor } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import { ThemeProvider } from "styled-components";

import themes from "../../styles/themes.js";
import Starship from "../starship.js";

const renderComponent = ({ id }) =>
  render(
    <ThemeProvider theme={themes["light"]}>
      <MemoryRouter initialEntries={[`/starships/${id}`]}>
        <Route path="/starships/:id">
          <Starship />
        </Route>
      </MemoryRouter>
    </ThemeProvider>
  );

it("renders starship with id 5", async () => {
  const { queryByText } = renderComponent({ id: 5 });

  await waitFor(() => queryByText(/Starship with id 5/));
});
