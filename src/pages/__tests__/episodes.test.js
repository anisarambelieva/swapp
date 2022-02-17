import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import Episodes from "../episodes.js";

describe("<Episodes/>", () => {
  it("should render Episodes page with correct styles", () => {
    const { container } = render(
      <MockedProvider>
        <Episodes />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
