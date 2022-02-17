import { gql } from "@apollo/client";
import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";

import Episodes from "../episodes.js";

const EPISODES_QUERY = gql`
  query AllEpisodes($perPage: Int!) {
    allEpisodes(first: $perPage) {
      edges {
        node {
          id
          title
          episodeId
          image
          openingCrawl
        }
      }
    }
  }
`;

describe("<Episodes/>", () => {
  it("should render Episodes page with correct styles", async () => {
    const mockData = [
      {
        request: {
          query: EPISODES_QUERY,
          variables: { perPage: 6 },
        },
        result: {
          data: {
            allEpisodes: {
              edges: [
                {
                  node: {
                    id: "id-newhope",
                    title: "A New Hope",
                    episodeId: 4,
                    image:
                      "https://m.media-amazon.com/images/I/81r+LN-YReL._SS500_.jpg",
                    openingCrawl:
                      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia",
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
        <Episodes />
      </MockedProvider>
    );

    await screen.findByText("A New Hope");
    expect(container).toMatchSnapshot();
  });
});
