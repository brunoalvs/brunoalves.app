import { useContext } from "react"
import { NextPage } from "next"
import Head from "next/head"

import { LayoutContext } from "../contexts/layout"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import JobList from "../components/Molecules/JobList"
import { Container } from "../styles/page.portfolio"

import { i18n } from "../i18n"

const Portfolio: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <>
      <Head>
        <title>{i18n[language].portfolio.pagetitle}</title>
      </Head>
      <Container>
        <HeadingTitle>{i18n[language].portfolio.title}</HeadingTitle>
        <JobList jobs={i18n[language].portfolio.jobs} />
      </Container>
    </>
  )
}

export default Portfolio
