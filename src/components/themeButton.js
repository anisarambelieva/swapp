import { Image } from "react-bootstrap";

import Moon from "../assets/Moon.png";

const ThemeButton = ({ theme, onClick }) => {
  const toggleTheme = () => {
    if (theme === "light") {
      onClick("dark");
    } else {
      onClick("light");
    }
  };

  return <Image src={Moon} style={{ height: "30px" }} onClick={toggleTheme} />;
};

export default ThemeButton;
