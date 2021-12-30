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
  }, [children, setDisplayChildren, displayChildren])

  return (
    <>
      <Head>
        <title>{layoutTitle} - brunoalves.app</title>
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
