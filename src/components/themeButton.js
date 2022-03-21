import { Image } from "react-bootstrap";

import Moon from "../assets/Moon.png";

const ThemeButton = ({ onClick }) => (
  <Image
    src={Moon}
    style={{ height: "30px" }}
    onClick={() => onClick("dark")}
  />
);

export default ThemeButton;
