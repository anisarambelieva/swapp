import { Image } from "react-bootstrap";

import LabelValuePair from "../../components/labelValuePair.js";

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

    <Image
      style={{
        height: "300px",
        objectFit: "cover",
        width: "100%",
        marginBottom: "5px",
      }}
      src={imageSrc}
    />

    <LabelValuePair label="Height" value={height} />
    <LabelValuePair label="Weight" value={weight} />
    <LabelValuePair label="Species" value={species} />
    <LabelValuePair label="Home World" value={homeWorld} />
  </div>
);

export default CharacterCard;
