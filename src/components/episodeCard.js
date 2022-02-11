import { Card } from "react-bootstrap";
import styled from "styled-components";

const CardTitle = styled(Card.Title)`
  color: #4bd5ee;
  font-weight: bold;
  font-size: 25px;
`;

const StyledCard = styled(Card)`
  width: 20rem;
  border-radius: 10px;
  overflow: hidden;
`;

const TruncatedText = styled(Card.Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

const EpisodeCard = ({ src, title, openingCrawl }) => (
  <StyledCard>
    <Card.Img style={{ height: "300px", objectFit: "cover" }} src={src} />
    <Card.Body>
      <CardTitle>{title}</CardTitle>
      <TruncatedText>{openingCrawl}</TruncatedText>
    </Card.Body>
  </StyledCard>
);

export default EpisodeCard;
