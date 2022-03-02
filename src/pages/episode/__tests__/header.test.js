import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import themes from "../../../styles/themes.js";
import EpisodeHeader from "../header.js";

describe("<EpisodeHeader />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={themes["light"]}>
        <EpisodeHeader title="Title test" subtitle="Subtitle test" />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
