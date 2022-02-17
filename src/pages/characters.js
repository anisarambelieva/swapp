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
  const { data, error, loading } = useQuery(CHARACTERS_QUERY, {
    variables: { perPage: 12 },
  });

  if (error) {
    return (
      <Container>
        <Header />
        <div>Something's wrong!</div>
      </Container>
    );
  }

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
            {edge.node.name === "Luke Skywalker" ? (
              <Character
                imageSrc="https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
                name={edge.node.name}
              />
            ) : (
              <Character imageSrc={edge.node.image} name={edge.node.name} />
            )}
          </CharacterColumn>
        ))}
      </Row>
    </Container>
  );
};

export default Characters;
