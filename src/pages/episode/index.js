import { gql, useQuery } from "@apollo/client";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../../components/button.js";
import Character from "../../components/character.js";

import Description from "./description.js";
import EpisodeHeader from "./header.js";

const CharacterColumn = styled(Col)`
  margin-top: 30px;
`;

const EPISODE_QUERY = gql`
  query Episode($episodeId: ID!, $perPage: Int, $after: String) {
    episode(id: $episodeId) {
      id
      title
      openingCrawl
      image
      director
      releaseDate
      people(first: $perPage, after: $after) {
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
  }
`;

const EpisodeImage = styled(Image)`
  height: 200px;
  object-fit: cover;
  width: 100%;
  border-radius: 5px 0px 0px 5px;
`;

const Episode = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(EPISODE_QUERY, {
    variables: {
      episodeId: `films.${id}`,
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

  const { episode } = data;

  return (
    <Container>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col md="9">
          <Row
            style={{
              marginTop: "30px",
            }}
          >
            <Col md="3" style={{ paddingRight: "0" }}>
              <EpisodeImage src={episode.image} />
            </Col>

            <Col
              style={{
                paddingLeft: "0",
              }}
            >
              <EpisodeHeader
                title={`Star Wars: Episode ${id}`}
                subtitle={episode.title}
              />
            </Col>
          </Row>

          <Row>
            <Col
              style={{
                marginTop: "30px",
              }}
            >
              <Description
                openingCrawl={episode.openingCrawl}
                director={episode.director}
                releaseDate={episode.releaseDate}
              />
            </Col>
          </Row>

          <Row>
            {episode.people.edges.map(({ node }) => (
              <CharacterColumn key={node.id} md="4">
                {node.name === "Luke Skywalker" ? (
                  <Character
                    imageSrc="https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
                    name={node.name}
                    id={node.id}
                  />
                ) : (
                  <Character
                    imageSrc={node.image}
                    name={node.name}
                    id={node.id}
                  />
                )}
              </CharacterColumn>
            ))}
          </Row>

          <Row>
            <Col
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button $color="#ffe300" $backgroundColor="black">
                Load More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Episode;
