import { MockedProvider } from "@apollo/client/testing";
import { render } from "@testing-library/react";

import Login from "../login.js";

describe("<Login/>", () => {
  it("should render Login page with correct styles", () => {
    const { container } = render(
      <MockedProvider>
        <Login />
      </MockedProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
