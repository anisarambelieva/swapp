import { Container, Row, Col } from "react-bootstrap";

import ThePhantomMenace from "../../assets/The_Phantom_Menace.jpg";
import Belbullab22Starfighter from "../../assets/starships/Belbullab-22_Starfighter.png";
import JediInterceptor from "../../assets/starships/Jedi_Interceptor.png";
import NabooStarSkiff from "../../assets/starships/Naboo_Star_Skiff.jpeg";
import TradeFederation from "../../assets/starships/Trade_Federation.jpeg";
import JediStarfighter from "../../assets/starships/Yodas_Jedi_Starfighter.png";
import Header from "../../components/header.js";

import CharacterCard from "./characterCard.js";
import Starship from "./starship.js";

const Character = () => (
  <Container>
    <Header />

    <Row
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Col md="9">
        <Row style={{ paddingTop: "20px" }}>
          <Col>
            <h3
              style={{
                textAlign: "center",
                color: "#4bd5ee",
                fontWeight: "bold",
              }}
            >
              Obi-Wan Kenobi
            </h3>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col>
            <CharacterCard
              name="Obi-Wan Kenobi"
              imageSrc={ThePhantomMenace}
              height="182"
              weight="90"
              species="Human"
              homeWorld="Stewjon"
            />
          </Col>

          <Col>
            <h3
              style={{
                textAlign: "center",
                color: "#3C4858",
                fontWeight: "bold",
              }}
            >
              Piloted Starships
            </h3>

            <hr />

            <Starship imageSrc={JediStarfighter} name="Jedi starfighter" />

            <Starship
              imageSrc={TradeFederation}
              name="Trade Federation cruiser"
            />

            <Starship imageSrc={NabooStarSkiff} name="Naboo star skiff" />

            <Starship imageSrc={JediInterceptor} name="Jedi Interceptor" />

            <Starship
              imageSrc={Belbullab22Starfighter}
              name="Belbullab-22 starfighter"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Character;
