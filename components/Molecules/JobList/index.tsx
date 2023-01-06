import type { IJob } from "../../../types/portfolio"
import JobSection from "../JobSection"
import * as S from "./styles"

interface JobListProps {
  jobs: IJob[]
}

const JobList = ({ jobs }: JobListProps) => {
  return (
    <S.Container>
      {jobs.map((job: IJob, index: number) => (
        <JobSection key={index} {...job} />
      ))}
    </S.Container>
  )
}

export default JobList
