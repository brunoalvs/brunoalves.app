import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { LayoutContext } from "../../../contexts/layout"
import HeaderNavigation from "../../Molecules/HeaderNavigation"
import InputLanguage from "../../Molecules/InputLanguage"
import ToggleThemeButton from "../../Molecules/ToggleThemeButton"
import { Container, TopHeader, Content } from "./styled"

const Layout: React.FC = ({ children }) => {
  const { pathname } = useRouter()
  const { darkMode, menuIsOpen, navigation } = React.useContext(LayoutContext)
  const [displayChildren, setDisplayChildren] = React.useState(children)
  const [transitionStage, setTransitionStage] = React.useState("fadeOut")

  const [layoutTitle, setLayoutTitle] = React.useState(
    navigation.find((item) => item.url === pathname)?.name
  )

  useEffect(() => {
    setTransitionStage("fadeIn")
  }, [])

  useEffect(() => {
    setLayoutTitle(navigation.find((item) => item.url === pathname)?.name)
    children !== displayChildren && setTransitionStage("fadeOut")
  }, [children, setDisplayChildren, displayChildren, navigation, pathname])

  return (
    <>
      <Head>
        <title>{layoutTitle} - brunoalves.app</title>
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
        <HeaderNavigation navigation={navigation} />
        <Content
          onTransitionEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransitionStage("fadeIn")
              setDisplayChildren(children)
            }
          }}
          data-animation={transitionStage}
        >
          {displayChildren}
        </Content>
      </Container>
    </>
  )
}

export default Layout
