import { useContext } from "react"
import type { NextPage } from "next"
import Head from "next/head"

import { LayoutContext } from "../contexts/layout"
import { HomePage } from "../components/Templates/HomePage"
import { i18n } from "../i18n"

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <>
      <Head>
        <title>{i18n[language].homepage.pagetitle}</title>
      </Head>
      <HomePage content={i18n[language].homepage} />
    </>
  )
}

export default Home
