import { gql, useQuery } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Belbullab22Starfighter from "../../assets/starships/Belbullab-22_Starfighter.png";
import JediInterceptor from "../../assets/starships/Jedi_Interceptor.png";
import NabooStarSkiff from "../../assets/starships/Naboo_Star_Skiff.jpeg";
import TradeFederation from "../../assets/starships/Trade_Federation.jpeg";
import JediStarfighter from "../../assets/starships/Yodas_Jedi_Starfighter.png";
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

  const { person } = data;

  return (
    <Container>
      <Header />

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col md="9">
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <h3
                style={{
                  textAlign: "center",
                  color: "#4bd5ee",
                  fontWeight: "bold",
                }}
              >
                {person.name}
              </h3>
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
              <h3
                style={{
                  textAlign: "center",
                  color: "#3C4858",
                  fontWeight: "bold",
                }}
              >
                Piloted Starships
              </h3>

              <hr />

              <Starship imageSrc={JediStarfighter} name="Jedi starfighter" />

              <Starship
                imageSrc={TradeFederation}
                name="Trade Federation cruiser"
              />

              <Starship imageSrc={NabooStarSkiff} name="Naboo star skiff" />

              <Starship imageSrc={JediInterceptor} name="Jedi Interceptor" />

              <Starship
                imageSrc={Belbullab22Starfighter}
                name="Belbullab-22 starfighter"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Character;
