import { NextPage } from "next"
import { IDataJob } from "../../../pages/api/portfolio"
import JobSection from "../JobSection"

import { Container } from "./styles"

type Props = {
  jobs: IDataJob[]
}

const JobList: NextPage<Props> = ({ jobs }) => {
  return (
    <Container>
      {jobs.map((job: IDataJob, index: number) => (
        <JobSection key={index} {...job} />
      ))}
    </Container>
  )
}

export default JobList
