import { IDataJob } from "../../../pages/api/portfolio"
import JobSection from "../JobSection"

import * as S from "./styles"

interface JobListProps {
  jobs: IDataJob[]
}

const JobList = ({ jobs }: JobListProps) => {
  return (
    <S.Container>
      {jobs.map((job: IDataJob, index: number) => (
        <JobSection key={index} {...job} />
      ))}
    </S.Container>
  )
}

export default JobList
