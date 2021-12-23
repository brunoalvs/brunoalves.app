import React, { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";
// import { ThemeContext, useThemeApp } from "../../../contexts/theme";
import { LayoutContext } from "../../../contexts/layout";

import nightIcon from "../../../public/icons/night.svg";
import dayIcon from "../../../public/icons/day.svg";

import { Container, Icon, Label } from "./styles";

const ToggleThemeButton: React.FC = () => {
  const { locale } = useRouter();
  const { darkMode, toggleDarkMode } = useContext(LayoutContext);

  const [content] = useState({
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

  useEffect(() => {
    if (locale !== undefined) {
      locale === "pt" ? setLanguage("pt") : setLanguage("en");
    }
  }, [locale]);

  return (
    <Container onClick={() => toggleDarkMode()}>
      <Icon src={darkMode ? dayIcon : nightIcon} aria-hidden />
      <Label>
        {darkMode ? content[language].turnLight : content[language].turnDark}
      </Label>
    </Container>
  );
};

export default ToggleThemeButton;
