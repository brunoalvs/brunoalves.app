import React, { useContext } from "react"
import Head from "next/head"

import ToggleThemeButton from "../../Molecules/ToggleThemeButton"
import InputLanguage from "../../Molecules/InputLanguage"
import HeaderNavigation from "../../Molecules/HeaderNavigation"
import { LayoutContext } from "../../../contexts/layout"

import { Container, TopHeader, Content } from "./styled"

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
