import { useState } from "react";
import { Image } from "react-bootstrap";

import Moon from "../assets/Moon.png";
import Sun from "../assets/Sun.png";

const ThemeButton = ({ theme, onClick }) => {
  const [image, setImage] = useState(Moon);

  const toggleTheme = () => {
    if (theme === "light") {
      onClick("dark");
      setImage(Sun);
    } else {
      onClick("light");
      setImage(Moon);
    }
  };

  return (
    <Image
      src={image}
      style={{ height: "30px", cursor: "pointer" }}
      onClick={toggleTheme}
    />
  );
};

export default ThemeButton;
