import { gql, useQuery } from "@apollo/client";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import EpisodeCard from "../components/episodeCard.js";

const CardColumn = styled(Col)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

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

const Episodes = () => {
  const { data, error, loading } = useQuery(EPISODES_QUERY, {
    variables: { perPage: 6 },
  });

  const history = useHistory();

  const handleClick = (id) => {
    // Get last char of films.[id] to get the id
    history.push(`/episode/${id.substr(id.length - 1)}`);
  };

  if (error) {
    return (
      <Container>
        <div>Something's wrong!</div>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <div>Loading</div>
      </Container>
    );
  }

  const { allEpisodes } = data;

  return (
    <Container>
      <Row style={{ paddingBottom: "30px" }}>
        {allEpisodes.edges.map(({ node }) => (
          <CardColumn key={node.id} md="4" onClick={() => handleClick(node.id)}>
            <EpisodeCard
              src={node.image}
              title={node.title}
              openingCrawl={node.openingCrawl}
            />
          </CardColumn>
        ))}
      </Row>
    </Container>
  );
};
export default Episodes;
