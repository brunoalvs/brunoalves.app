import { GetStaticProps } from "next"
import { useContext } from "react"
import { LayoutContext } from "../contexts/layout"

import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import JobList from "../components/Molecules/JobList"

import { Container } from "../styles/page.portfolio"

type ContentProps = {
  title: string
  jobs: {
    title: string
    content: string
    url: string
    urlLabel: string
    image: string
  }[]
}

interface PortfolioProps {
  data: {
    en: ContentProps
    pt: ContentProps
  }
}

export default function Portfolio({ data }: PortfolioProps) {
  const { language } = useContext(LayoutContext)

  return (
    <Container>
      <HeadingTitle>{data[language].title}</HeadingTitle>
      <JobList jobs={data[language].jobs} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/portfolio")
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  }
}
