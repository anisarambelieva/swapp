import styled from "styled-components";

const EpisodeTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.text.primary};
`;

const EpisodeSubtitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.text.secondary};
`;

const EpisodeHeader = ({ title, subtitle }) => (
  <div
    style={{
      backgroundColor: "white",
      height: "100%",
      paddingLeft: "50px",
      paddingTop: "55px",
      borderRadius: "0px 5px 5px 0px",
    }}
  >
    <EpisodeTitle>{title}</EpisodeTitle>
    <EpisodeSubtitle>{subtitle}</EpisodeSubtitle>
  </div>
);

export default EpisodeHeader;
