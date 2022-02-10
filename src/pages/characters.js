import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Character from "../components/character";
import Header from "../components/header";

import Annakin from "../assets/Annakin.webp"
import Jabba from "../assets/Jabba.webp"
import Yoda from "../assets/Yoda.webp"
import CPO from "../assets/C-3PO.jpg"
import Obi from "../assets/Obi-Wan.jpg"

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
      <CharacterColumn md="4">
        <Character imageSrc={Jabba} name="Jabba Desilijic Tiure" />
      </CharacterColumn>
      <CharacterColumn md="4">
        <Character imageSrc={Yoda} name="Yoda" />
      </CharacterColumn>
      <CharacterColumn md="4">
        <Character imageSrc={CPO} name="C-3PO" />
      </CharacterColumn>
      <CharacterColumn md="4">
        <Character imageSrc={Obi} name="Obi-Wan Kenobi" />
      </CharacterColumn>
    </Row>
  </Container>
);

export default Characters;
