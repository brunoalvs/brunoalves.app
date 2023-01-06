import { useContext } from "react"
import { NextPage } from "next"
import Head from "next/head"

import { PortfolioPage } from "../components/Templates/PortfolioPage"
import { LayoutContext } from "../contexts/layout"
import { i18n } from "../i18n"

const Portfolio: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <>
      <Head>
        <title>{i18n[language].portfolio.pagetitle}</title>
      </Head>
      <PortfolioPage content={i18n[language].portfolio} />
    </>
  )
}

export default Portfolio
