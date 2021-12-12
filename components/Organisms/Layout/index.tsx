import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Container, TopHeader, Header, Content } from "./styled";
import ToggleThemeButton from "../../Molecules/ToggleThemeButton";
import InputLanguage from "../../Molecules/InputLanguage";

const Layout: React.FC<{ theme: "dark" | "light" }> = ({ children, theme }) => {
  const { locale } = useRouter();

  useEffect(() => {
    console.log("locale is ", locale);
  }, [locale]);

  return (
    <>
      <Head>
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

      <Container data-theme={theme}>
        <TopHeader>
          <ToggleThemeButton theme={theme} />
          <InputLanguage />
        </TopHeader>
        <Header></Header>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default Layout;
