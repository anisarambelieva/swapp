import { gql, useQuery } from "@apollo/client";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import Character from "../components/character";
import Header from "../components/header";

const CharacterColumn = styled(Col)`
  margin-top: 30px;
`;

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

const Characters = () => {
  const { data, loading } = useQuery(CHARACTERS_QUERY, {
    variables: { perPage: 12 },
  });

  if (loading) {
    return (
      <Container>
        <Header />
        <div>Loading</div>
      </Container>
    );
  }

  const { allPeople } = data;

  return (
    <Container>
      <Header />

      <Row>
        {allPeople.edges.map((edge) => (
          <CharacterColumn key={edge.node.id} md="4">
            <Character imageSrc={edge.node.image} name={edge.node.name} />
          </CharacterColumn>
        ))}
      </Row>
    </Container>
  );
};

export default Characters;
