import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Character from "../components/character";
import Header from "../components/header";

import Annakin from "../assets/Annakin.webp"

const CharacterColumn = styled(Col)`
  margin-top: 30px;
`;

const Characters = () => (
  <Container>
    <Header />

    <Row>
      <CharacterColumn md="4">
        <Character imageSrc={Annakin} name="Annakin Skywalker" />
      </CharacterColumn>
    </Row>
  </Container>
);

export default Characters;
