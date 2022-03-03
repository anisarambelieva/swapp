import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import themes from "../../../styles/themes.js";
import Starship from "../starship.js";

describe("<Starship />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={themes["light"]}>
        <Starship name="testname" imageSrc="test imageSrc" />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
