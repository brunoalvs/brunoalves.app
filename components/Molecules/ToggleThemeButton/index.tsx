import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { LayoutContext } from "../../../contexts/layout";
import nightIcon from "../../../public/icons/night.svg";
import dayIcon from "../../../public/icons/day.svg";

import * as S from "./styles";
import Image from "next/image";

const ToggleThemeButton: React.FC = () => {
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

  const { locale } = useRouter();
  const { darkMode, toggleDarkMode } = useContext(LayoutContext);

  const [language, setLanguage] = useState<"pt" | "en">("en");

  useEffect(() => {
    setLanguage(locale as "pt" | "en");
  }, [locale, darkMode]);

  return (
    <S.Container onClick={() => toggleDarkMode()}>
      {darkMode ? (
        <Image src={dayIcon} alt={content[language].turnLight} />
      ) : (
        <Image src={nightIcon} alt={content[language].turnDark} />
      )}
      <S.Label>
        {darkMode ? content[language].turnLight : content[language].turnDark}
      </S.Label>
    </S.Container>
  );
};

export default ToggleThemeButton;
