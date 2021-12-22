import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeContext } from "../../../contexts/theme";

import { Container, TopHeader, Content } from "./styled";
import ToggleThemeButton from "../../Molecules/ToggleThemeButton";
import InputLanguage from "../../Molecules/InputLanguage";
import HeaderNavigation from "../../Molecules/HeaderNavigation";

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "brunoalves.app" }) => {
  const { locale } = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const prefersColorScheme = async () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const themeByUser = localStorage.getItem("darkMode");

    if (
      (prefersDarkMode.matches && themeByUser === null) ||
      themeByUser === "true"
    ) {
      setTheme("dark");
    }

    prefersDarkMode.addEventListener("change", (e) => {
      if (e.matches) {
        setTheme("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        setTheme("light");
        localStorage.setItem("darkMode", "false");
      }
    });
  };

  const getLanguage = () => {
    if (locale === "pt") {
      setLanguage("pt");
    } else {
      setLanguage("en");
    }
  };

  useEffect(() => {
    prefersColorScheme();
    getLanguage();
  }, [language]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Portfolio of Bruno Alves, a Front End Developer based on Brazil."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#010101" />
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <ThemeContext.Provider value={{ appTheme: theme, updateTheme: setTheme }}>
        <Container data-theme={theme}>
          <TopHeader>
            <ToggleThemeButton />
            <InputLanguage />
          </TopHeader>
          <HeaderNavigation />
          <Content>{children}</Content>
        </Container>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
