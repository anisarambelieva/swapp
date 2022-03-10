import styled from "styled-components";

import LabelValuePair from "../../components/labelValuePair.js";

const DescriptionBox = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.containers.background};
  color: ${(props) => props.theme.text.description};
  border-radius: 5px;
`;

const Description = ({ openingCrawl, director, releaseDate }) => (
  <DescriptionBox>
    <p>{openingCrawl}</p>
    <LabelValuePair label="Director" value={director} />
    <LabelValuePair label="Release Date" value={releaseDate} />
  </DescriptionBox>
);

export default Description;
