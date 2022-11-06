import { useContext, useEffect, useState } from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import { LayoutContext } from "../../../contexts/layout"
import HeaderNavigation from "../../Molecules/HeaderNavigation"
import InputLanguage from "../../Molecules/InputLanguage"
import ToggleThemeButton from "../../Molecules/ToggleThemeButton"

import * as S from "./styles"

interface ILayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const Layout = ({ children, ...props }: ILayoutProps) => {
  const { pathname, locale } = useRouter()
  const { darkMode, menuIsOpen, navigation } = useContext(LayoutContext)

  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeOut")
  const [layoutTitle, setLayoutTitle] = useState(navigation.find((item) => item.url === pathname)?.name)

  useEffect(() => {
    setTransitionStage("fadeIn")
  }, [])

  useEffect(() => {
    setLayoutTitle(navigation.find((item) => item.url === pathname)?.name)
  }, [pathname, navigation])

  useEffect(() => {
    children !== displayChildren && setTransitionStage("fadeOut")
  }, [children, setDisplayChildren, displayChildren])

  return (
    <>
      <Head>
        <title>
          {layoutTitle} - Bruno Alves | Front-End Developer Portfolio
        </title>
        <meta name="description" content={
          locale === "en" ? "Bruno Alves is a Front-End Developer based in Brazil. He has been working with web development since 2018. He is passionate about technology and loves to learn new things." : "Bruno Alves é um Desenvolvedor Front-End baseado no Brasil. Ele tem trabalhado com desenvolvimento web desde 2018. Ele é apaixonado por tecnologia e adora aprender coisas novas."
        } />
        <meta name="keywords" content="Developer, Front-End, Portfolio, Bruno Alves, Next.js, React Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#010101" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Bruno Alves" />
        <meta name="language" content={locale === "en" ? "English" : "Português"} />

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
      <S.Container
        data-theme={darkMode ? "dark" : "light"}
        data-menu={menuIsOpen}
        {...props}
      >
        <S.TopHeader>
          <ToggleThemeButton />
          <InputLanguage />
        </S.TopHeader>
        <HeaderNavigation />
        <S.Content
          onTransitionEnd={() => {
            setTransitionStage("fadeIn")
            setDisplayChildren(children)
          }}
          data-animation={transitionStage}
        >
          {displayChildren}
        </S.Content>
      </S.Container>
    </>
  )
}

export default Layout
