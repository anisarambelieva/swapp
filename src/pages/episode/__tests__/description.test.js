import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import themes from "../../../styles/themes.js";
import Description from "../description.js";

describe("<Description />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={themes["light"]}>
        <Description
          openingCrawl="openingCrawl test"
          director="director test"
          releaseDate="releaseDate test"
        />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
