import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import themes from "../../../styles/themes.js";
import CharacterCard from "../characterCard.js";

describe("<CharacterCard />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={themes["light"]}>
        <CharacterCard
          name="testname"
          imageSrc="test imageSrc"
          height="test height"
          weight="test weight"
          species="test species"
          homeWorld="test home world"
        />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
