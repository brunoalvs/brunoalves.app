import React, { useContext } from "react"
import Head from "next/head"

import { Container, TopHeader, Content } from "./styled"
import ToggleThemeButton from "../../Molecules/ToggleThemeButton"
import InputLanguage from "../../Molecules/InputLanguage"
import HeaderNavigation from "../../Molecules/HeaderNavigation"
import { LayoutContext } from "../../../contexts/layout"

interface Props {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = "brunoalves.app" }) => {
  const { darkMode, menuIsOpen } = useContext(LayoutContext)

  return (
    <>
      <Head>
        <title>{title} - brunoalves.app</title>
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
      <Container
        data-theme={darkMode ? "dark" : "light"}
        data-menu={menuIsOpen}
      >
        <TopHeader>
          <ToggleThemeButton />
          <InputLanguage />
        </TopHeader>
        <HeaderNavigation />
        <Content>{children}</Content>
      </Container>
    </>
  )
}

export default Layout
