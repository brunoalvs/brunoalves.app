import React from "react";

import nightIcon from "../../../public/icons/night.svg";
import dayIcon from "../../../public/icons/day.svg";

import { Container, Icon, Label } from "./styles";

interface Props {
  isLight: boolean;
}

const ToggleThemeButton: React.FC<Props> = ({ isLight }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Container onClick={() => handleClick()}>
      <Icon src={isLight ? nightIcon : dayIcon} alt="day" />
      <Label>{isLight ? "Turn on Dark Mode" : "Turn on Light Mode"}</Label>
    </Container>
  );
};

export default ToggleThemeButton;
