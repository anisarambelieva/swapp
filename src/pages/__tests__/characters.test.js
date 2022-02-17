import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import Characters from "../characters.js";

describe("<Characters/>", () => {
  it("should render Characters page with correct styles", () => {
    const { container } = render(
      <MockedProvider>
        <Characters />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
