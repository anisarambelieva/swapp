import styled from "styled-components";

import LabelValuePair from "../../components/labelValuePair.js";

const DescriptionBox = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  color: #4e5b6e;
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
