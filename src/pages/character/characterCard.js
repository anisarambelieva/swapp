import { Image } from "react-bootstrap";
import styled from "styled-components";

import LabelValuePair from "../../components/labelValuePair.js";

const CharacterImage = styled(Image)`
  height: 300px;
  object-fit: cover;
  width: 100%;
  margin-bottom: 5px;
`;

const CharacterCard = ({
  name,
  imageSrc,
  height,
  weight,
  species,
  homeWorld,
}) => (
  <div
    style={{
      backgroundColor: "white",
      padding: "10px 30px",
      marginLeft: "15px",
      borderRadius: "5px",
    }}
  >
    <h4 style={{ textAlign: "center", color: "#4bd5ee", fontWeight: "bold" }}>
      {name}
    </h4>

    <CharacterImage src={imageSrc} />

    <LabelValuePair label="Height" value={height} />
    <LabelValuePair label="Weight" value={weight} />
    <LabelValuePair label="Species" value={species} />
    <LabelValuePair label="Home World" value={homeWorld} />
  </div>
);

export default CharacterCard;
