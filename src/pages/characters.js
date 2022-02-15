import { gql } from "@apollo/client";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import Annakin from "../assets/Annakin.webp";
import CPO from "../assets/C-3PO.jpg";
import Jabba from "../assets/Jabba.webp";
import Obi from "../assets/Obi-Wan.jpg";
import Yoda from "../assets/Yoda.webp";
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
