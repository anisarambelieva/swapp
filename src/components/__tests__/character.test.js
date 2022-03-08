import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import themes from "../../styles/themes.js";

import Character from "../character.js";

describe("<Character />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={themes["light"]}>
        <Character imageSrc="image" name="Star wars: Episode 1" />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
