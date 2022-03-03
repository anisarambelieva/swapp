import styled from "styled-components";

const Label = styled.p`
  color: #4e5b6e;
  margin: 0;
  font-weight: bold;
`;

const Value = styled.span`
  color: #4bd5ee;
`;

const LabelValuePair = ({ label, value }) => (
  <Label>
    {label}: <Value>{value}</Value>
  </Label>
);

export default LabelValuePair;
