import { gql } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";

import Characters from "../characters.js";

const CHARACTERS_QUERY = gql`
  query AllPeople($perPage: Int!, $after: String) {
    allPeople(first: $perPage, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          name
          image
        }
      }
    }
  }
`;

describe("<Characters/>", () => {
  it("should render Characters page with correct styles", async () => {
    const mockData = [
      {
        request: {
          query: CHARACTERS_QUERY,
          variables: { perPage: 12 },
        },
        result: {
          data: {
            allPeople: {
              pageInfo: {
                hasNextPage: false,
                endCursor: "",
              },
              edges: [
                {
                  node: {
                    id: "id-luke",
                    name: "Luke Skywalker",
                    image:
                      "https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg",
                  },
                },
              ],
            },
          },
        },
      },
    ];

    const { container } = render(
      <MockedProvider mocks={mockData}>
        <Characters />
      </MockedProvider>
    );

    await screen.findByText("Luke Skywalker");
    expect(container).toMatchSnapshot();
  });
});
