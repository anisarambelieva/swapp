import { Col, Row, Image } from "react-bootstrap";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: #4bd5ee;
`;

const NameContainer = styled.div`
  background-color: white;
  border-radius: 0px 5px 5px 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Starship = ({ imageSrc, name }) => (
  <Row style={{ margin: "10px 0px 0px 0px", height: "70px" }}>
    <Col md="3" style={{ paddingRight: "0" }}>
      <Image
        style={{
          height: "100%",
          objectFit: "cover",
          width: "100%",
          borderRadius: "5px 0px 0px 5px",
        }}
        src={imageSrc}
      />
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
