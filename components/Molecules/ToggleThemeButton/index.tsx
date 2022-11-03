import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { LayoutContext } from "../../../contexts/layout";
import nightIcon from "../../../public/icons/night.svg";
import dayIcon from "../../../public/icons/day.svg";

import * as S from "./styles";

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
    <S.Container onClick={() => toggleDarkMode()}>
      <S.Icon src={darkMode ? dayIcon : nightIcon} aria-hidden />
      <S.Label>
        {darkMode ? content[language].turnLight : content[language].turnDark}
      </S.Label>
    </S.Container>
  );
};

export default ToggleThemeButton;
