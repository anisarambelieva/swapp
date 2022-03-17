import { Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.theme.text.primary};
`;

const NameContainer = styled.div`
  background-color: ${(props) => props.theme.containers.background};
  border-radius: 0px 5px 5px 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarshipImage = styled(Image)`
  height: 100%;
  object-fit: cover;
  width: 100%;
  border-radius: 5px 0px 0px 5px;
`;

const Starship = ({ imageSrc, name }) => (
  <Row style={{ margin: "10px", height: "100px" }}>
    <Col md="3" style={{ paddingRight: "0" }}>
      <StarshipImage src={imageSrc} />
    </Col>

    <Col
      style={{
        paddingLeft: 0,
      }}
    >
      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>
    </Col>
  </Row>
);

export default Starship;
