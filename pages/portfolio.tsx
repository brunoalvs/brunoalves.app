import { useContext } from "react"
import { GetStaticProps } from "next"
import { data } from "./api/portfolio"
import type { IDataJob } from './api/portfolio'

import { LayoutContext } from "../contexts/layout"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import JobList from "../components/Molecules/JobList"

import { Container } from "../styles/page.portfolio"

type ContentProps = {
  title: string
  jobs: IDataJob[]
}

interface PortfolioProps {
  content: {
    en: ContentProps
    pt: ContentProps
  }
}

export default function Portfolio({ content }: PortfolioProps) {
  const { language } = useContext(LayoutContext)

  return (
    <Container>
      <HeadingTitle>{content[language].title}</HeadingTitle>
      <JobList jobs={content[language].jobs} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content: data,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}
