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

const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100%;
  padding-left: 50px;
  padding-top: 55px;
  border-radius: 0px 5px 5px 0px;
`;

const EpisodeHeader = ({ title, subtitle }) => (
  <HeaderContainer>
    <EpisodeTitle>{title}</EpisodeTitle>
    <EpisodeSubtitle>{subtitle}</EpisodeSubtitle>
  </HeaderContainer>
);

export default EpisodeHeader;
