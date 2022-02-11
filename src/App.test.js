import { render } from "@testing-library/react";

import App from "./App.js";

test("renders default page", () => {
  const { queryByText } = render(<App />);
  expect(queryByText(/SWAPP/)).toBeInTheDocument();
});
