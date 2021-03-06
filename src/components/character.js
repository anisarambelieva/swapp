import { Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CharacterName = styled.h1`
  background-color: white;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.text.primary};
  height: 100%;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
  background-color: ${(props) => props.theme.containers.background};
`;

const CharacterImage = styled(Image)`
  height: 100px;
  object-fit: cover;
  width: 100%;
  border-radius: 5px 0px 0px 5px;
`;

const Character = ({ imageSrc, name, id }) => {
  const history = useHistory();

  const handleClick = () => {
    // Get last chars of people.[id] to get the id
    history.push(`/characters/${id.substring(7)}`);
  };

  return (
    <Row onClick={handleClick}>
      <Col md="4" style={{ paddingRight: "0" }}>
        <CharacterImage src={imageSrc} />
      </Col>

      <Col
        style={{
          height: "100px",
          paddingLeft: 0,
        }}
      >
        <CharacterName>{name}</CharacterName>
      </Col>
    </Row>
  );
};

export default Character;
