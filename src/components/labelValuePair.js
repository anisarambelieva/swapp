import styled from "styled-components";

const Label = styled.p`
  color: ${(props) => props.theme.text.secondary};
  margin: 0;
  font-weight: bold;
`;

const Value = styled.span`
  color: ${(props) => props.theme.text.primary};
`;

const LabelValuePair = ({ label, value }) => (
  <Label>
    {label}: <Value>{value}</Value>
  </Label>
);

export default LabelValuePair;
