import { useContext } from "react"
import { NextPage } from "next"
import { data } from "./api/portfolio"

import { LayoutContext } from "../contexts/layout"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import JobList from "../components/Molecules/JobList"

import { Container } from "../styles/page.portfolio"
import Head from "next/head"

const Portfolio: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <>
      <Head>
        <title>
          {data[language].title} - Bruno Alves | Desenvolvedor Front-End
        </title>
      </Head>
      <Container>
        <HeadingTitle>{data[language].title}</HeadingTitle>
        <JobList jobs={data[language].jobs} />
      </Container>
    </>
  )
}

export default Portfolio
