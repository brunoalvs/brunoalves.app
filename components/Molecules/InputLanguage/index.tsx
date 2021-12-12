import React from "react";
import { useRouter } from "next/router";

import { Container, Text } from "./styled";

const InputLanguage = () => {
  const router = useRouter();
  const { locale, locales } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const isPortuguese = value === "pt";

    if (isPortuguese) {
      router.push("/", "/en", { locale: "en" }); // Redirect to home page
    } else {
      router.push("/", "/pt", { locale: "pt" }); // Redirect to home page
    }

    console.log("click", value);
  };

  return (
    <Container>
      <Text>{locales ? locales[0] : ""}</Text>
      <input
        type="checkbox"
        value={locale}
        checked={locale === "pt" ? true : false}
        id="languageChange"
        onClick={(event) => handleClick(event)}
      />
      <label htmlFor="languageChange" />
      <Text>{locales ? locales[1] : ""}</Text>
    </Container>
  );
};

export default InputLanguage;
