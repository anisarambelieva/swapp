import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import themes from "../../styles/themes.js";
import Login from "../login.js";

describe("<Login/>", () => {
  it("should render Login page with correct styles", () => {
    const { container } = render(
      <ThemeProvider theme={themes["light"]}>
        <MockedProvider>
          <Login />
        </MockedProvider>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
