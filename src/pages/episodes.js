import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import EpisodeCard from "../components/episodeCard.js";
import Header from "../components/header.js";
import episodesData from "../episodesData.js";

const CardColumn = styled(Col)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Episodes = () => (
  <Container>
    <Header />

    <Row style={{ paddingBottom: "30px" }}>
      {episodesData.map(({ id, ...rest }) => (
        <CardColumn key={id} md="4">
          <EpisodeCard {...rest} />
        </CardColumn>
      ))}
    </Row>
  </Container>
);

export default Episodes;
