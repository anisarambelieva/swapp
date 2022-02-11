import { render } from "@testing-library/react";

import Characters from "../characters.js";

describe("<Characters/>", () => {
  it("should render Characters page with correct styles", () => {
    const { container } = render(<Characters />);

    expect(container).toMatchSnapshot();
  });
});
