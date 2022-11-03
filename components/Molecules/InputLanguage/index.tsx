import React from "react";
import { useRouter } from "next/router";
import * as S from "./styles";

const InputLanguage = () => {
  const { locale, locales, push, pathname } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    switch (value) {
      case "pt":
        push(pathname, "/en", { locale: "en" });
        break;
      default:
        push(pathname, "/pt", { locale: "pt" });
        break;
    }
  };

  return (
    <S.Container>
      <S.Text>{locales ? locales[0] : ""}</S.Text>
      <input
        type="checkbox"
        value={locale}
        defaultChecked={locale === "pt" ? true : false}
        id="languageChange"
        onClick={(event) => handleClick(event)}
      />
      <label htmlFor="languageChange" />
      <S.Text>{locales ? locales[1] : ""}</S.Text>
    </S.Container>
  );
};

export default InputLanguage;
