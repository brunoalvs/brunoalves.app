import useSWR from "swr"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import Head from "next/head"

import ToggleThemeButton from "../../Molecules/ToggleThemeButton"
import InputLanguage from "../../Molecules/InputLanguage"
import HeaderNavigation from "../../Molecules/HeaderNavigation"
import { LayoutContext } from "../../../contexts/layout"

import { Container, TopHeader, Content } from "./styled"
import { useRouter } from "next/router"
import Loading from "../Loading"

const Layout: React.FC = ({ children }) => {
  const { darkMode, menuIsOpen, language } = useContext(LayoutContext)
  const [title, setTitle] = useState("")
  const { pathname } = useRouter()

  const fetcher = async (url: string) =>
    await axios(url).then((res) => res.data)
  const { data, error } = useSWR("/api/navigation", fetcher)

  useEffect(() => {
    console.log(pathname)
  }, [])

  // useEffect(() => {
  //   const pageInfo = data[language]
  //   const currentPageTitle = pageInfo.list.find(
  //     (item: any) => item.url === pathname
  //   ).name

  //   setTitle(currentPageTitle)
  // }, [pathname, language])

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <Loading />

  return (
    <>
      <Head>
        <title>{title ? `${title} - brunoalves.app` : "brunoalves.app"}</title>
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
