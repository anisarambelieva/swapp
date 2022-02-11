import { render } from "@testing-library/react";

import Starship from "../starship.js";

describe("<Starship />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Starship name="testname" imageSrc="test imageSrc" />
    );

    expect(container).toMatchSnapshot();
  });
});
