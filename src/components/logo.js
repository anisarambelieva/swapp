import styled from "styled-components";

const Logo = styled.h1`
  font-family: starWarsFont;
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${(props) => props.theme.button.primary.text};
  margin: 0;
  /* The text isn't vertically aligned (font specifics) */
  padding-top: 0.2em;
`;

export default Logo;
