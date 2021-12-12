import React from "react";

import nightIcon from "../../../public/icons/night.svg";
import dayIcon from "../../../public/icons/day.svg";

import { Container, Icon, Label } from "./styles";

interface Props {
  theme: "light" | "dark";
  onClick: () => void;
}

const ToggleThemeButton: React.FC<Props> = ({ theme, onClick }) => {
  const handleClick = () => {
    console.log("clicked");
    onClick();
  };

  return (
    <Container onClick={() => handleClick()}>
      <Icon src={theme === "light" ? nightIcon : dayIcon} alt="day" />
      <Label>
        {theme === "light" ? "Turn on Dark Mode" : "Turn on Light Mode"}
      </Label>
    </Container>
  );
};

export default ToggleThemeButton;
