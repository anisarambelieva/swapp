import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  font-weight: bold;
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border: 0;

  :hover {
    color: ${({ $backgroundColor }) => $backgroundColor};
    background-color: ${({ $color }) => $color};
  }
`;

export default StyledButton;
