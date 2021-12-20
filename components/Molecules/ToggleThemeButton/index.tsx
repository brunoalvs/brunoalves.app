import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import nightIcon from "../../../public/icons/night.svg";
import dayIcon from "../../../public/icons/day.svg";

import { Container, Icon, Label } from "./styles";

interface Props {
  theme: null | "light" | "dark";
  onClick: () => void;
}

const ToggleThemeButton: React.FC<Props> = ({ theme, onClick }) => {
  const { locale } = useRouter();
  const [content, setContent] = useState({
    en: {
      turnDark: "Turn on Night Mode",
      turnLight: "Turn on Day Mode",
    },
    pt: {
      turnDark: "Ligar Modo Noturno",
      turnLight: "Ligar Modo Diurno",
    },
  });
  const [language, setLanguage] = useState<"pt" | "en">("en");

  const handleClick = () => {
    console.log("clicked");
    onClick();
  };

  useEffect(() => {
    if (locale !== undefined) {
      locale === "pt" ? setLanguage("pt") : setLanguage("en");
    }
  }, [locale]);

  return (
    <Container onClick={() => handleClick()}>
      <Icon src={theme === "light" ? nightIcon : dayIcon} alt="day" />
      <Label>
        {theme === "light"
          ? content[language].turnDark
          : content[language].turnLight}
      </Label>
    </Container>
  );
};

export default ToggleThemeButton;
