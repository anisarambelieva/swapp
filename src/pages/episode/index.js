import { gql, useQuery } from "@apollo/client";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import ThePhantomMenace from "../../assets/The_Phantom_Menace.jpg";
import Button from "../../components/button.js";
import Character from "../../components/character.js";
import Header from "../../components/header.js";
import episodesData from "../../episodesData.js";

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
          <Row
            style={{
              marginTop: "30px",
            }}
          >
            <Col md="3" style={{ paddingRight: "0" }}>
              <Image
                style={{
                  height: "200px",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "5px 0px 0px 5px",
                }}
                src={ThePhantomMenace}
              />
            </Col>

            <Col
              style={{
                paddingLeft: "0",
              }}
            >
              <EpisodeHeader
                title="Star wars: Episode 1"
                subtitle="The Phantom Menace"
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
                openingCrawl={episodesData[0].openingCrawl}
                director="George Lucas"
                releaseDate="1999-05-19"
              />
            </Col>
          </Row>

          <Row>
            {episodesData[0].characters.map(({ id, ...rest }) => (
              <CharacterColumn key={id} md="4">
                <Character {...rest} />
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
