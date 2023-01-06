import type { IJob } from "../../../types/portfolio"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import JobList from "../../Molecules/JobList"
import * as S from "./styles"

interface PortfolioPageProps {
  content: {
    title: string
    jobs: IJob[]
  }
}

export function PortfolioPage({ content }: PortfolioPageProps) {
  return (
    <S.Container>
      <HeadingTitle>{content.title}</HeadingTitle>
      <JobList jobs={content.jobs} />
    </S.Container>
  )
}
