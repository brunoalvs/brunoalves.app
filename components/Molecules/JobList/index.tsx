import { NextPage } from "next"
import { IDataJob } from "../../../pages/api/portfolio"
import JobSection from "../JobSection"

import * as S from "./styles"

type Props = {
  jobs: IDataJob[]
}

const JobList: React.FC<Props> = ({ jobs }) => {
  return (
    <S.Container>
      {jobs.map((job: IDataJob, index: number) => (
        <JobSection key={index} {...job} />
      ))}
    </S.Container>
  )
}

export default JobList
