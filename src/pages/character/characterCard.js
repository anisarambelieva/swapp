import { Image } from "react-bootstrap";
import styled from "styled-components";

import LabelValuePair from "../../components/labelValuePair.js";

const CharacterImage = styled(Image)`
  height: 300px;
  object-fit: cover;
  width: 100%;
  margin-bottom: 5px;
`;

const CharacterInfo = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 10px 30px;
  margin-left: 15px;
  border-radius: 5px;
`;

const CharacterName = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.text.primary};
  font-weight: bold;
`;

const CharacterCard = ({
  name,
  imageSrc,
  height,
  weight,
  species,
  homeWorld,
}) => (
  <CharacterInfo>
    <CharacterName>{name}</CharacterName>

    <CharacterImage src={imageSrc} />

    <LabelValuePair label="Height" value={height} />
    <LabelValuePair label="Weight" value={weight} />
    <LabelValuePair label="Species" value={species} />
    <LabelValuePair label="Home World" value={homeWorld} />
  </CharacterInfo>
);

export default CharacterCard;
