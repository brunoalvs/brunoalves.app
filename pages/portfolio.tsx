import { useContext } from "react"
import { NextPage } from "next"
import { data } from "./api/portfolio"

import { LayoutContext } from "../contexts/layout"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import JobList from "../components/Molecules/JobList"

import { Container } from "../styles/page.portfolio"


const Portfolio: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <Container>
      <HeadingTitle>{data[language].title}</HeadingTitle>
      <JobList jobs={data[language].jobs} />
    </Container>
  )
}

export default Portfolio
