import React from "react";
import { useRouter } from "next/router";

import { Container, Text } from "./styled";

const InputLanguage = () => {
  const { locale, locales } = useRouter();

  return (
    <Container>
      <Text>{locales ? locales[0] : ""}</Text>
      <input type="checkbox" name="" id="languageChange" />
      <label htmlFor="languageChange" />
      <Text>{locales ? locales[1] : ""}</Text>
    </Container>
  );
};

export default InputLanguage;
