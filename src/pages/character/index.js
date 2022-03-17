import { gql, useQuery } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/header.js";

import CharacterCard from "./characterCard.js";
import Starship from "./starship.js";

export const CHARACTER_QUERY = gql`
  query ($characterId: ID!) {
    person(id: $characterId) {
      id
      name
      birthYear
      height
      mass
      image
      homeworld {
        id
        name
      }
      species {
        id
        name
      }
      starships(first: 10) {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;

const CharacterName = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.text.primary};
  font-weight: bold;
`;

const StarshipsHeading = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.text.secondary};
  font-weight: bold;
`;

const Character = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(CHARACTER_QUERY, {
    variables: {
      characterId: `people.${id}`,
      perPage: 5,
    },
  });

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

  const { person } = data;

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col md="9">
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <CharacterName>{person.name}</CharacterName>
              <hr />
            </Col>
          </Row>

          <Row>
            <Col>
              <CharacterCard
                name={person.name}
                imageSrc={person.image}
                height={person.height}
                weight={person.mass}
                species={person.species ? person.species.name : "Human"}
                homeWorld={person.homeworld.name}
              />
            </Col>

            <Col>
              <StarshipsHeading>Piloted Starships</StarshipsHeading>

              <hr />
              {person.starships.edges.map(({ node }) => (
                <Starship
                  key={node.id}
                  imageSrc={node.image}
                  name={node.name}
                />
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Character;
