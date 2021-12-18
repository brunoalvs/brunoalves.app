import React from "react";
import { useRouter } from "next/router";

import { Container, Text } from "./styled";

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
    <Container>
      <Text>{locales ? locales[0] : ""}</Text>
      <input
        type="checkbox"
        value={locale}
        defaultChecked={locale === "pt" ? true : false}
        id="languageChange"
        onClick={(event) => handleClick(event)}
      />
      <label htmlFor="languageChange" />
      <Text>{locales ? locales[1] : ""}</Text>
    </Container>
  );
};

export default InputLanguage;
