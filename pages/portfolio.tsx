import { useContext } from "react"
import axios from "axios"
import useSWR from "swr"
import type { NextPage } from "next"

import Layout from "../components/Organisms/Layout"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"

import { LayoutContext } from "../contexts/layout"
import List from "../components/Atoms/Typography/List"
import { IDataJob } from "./api/portfolio"
import Subtitle from "../components/Atoms/Typography/HeadingSubtitle"
import Text from "../components/Atoms/Typography/Text"

const Portfolio: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/portfolio", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Layout title={data[language].title}>
        <HeadingTitle>{data[language].title}</HeadingTitle>

        <List>
          {data[language].jobs.map((job: IDataJob, index: number) => (
            <li key={index}>
              <Subtitle>{job.title}</Subtitle>
              <Text innerHTML={{ __html: job.content }} />
              <a href={job.url}>{job.urlLabel}</a>
            </li>
          ))}
        </List>
      </Layout>
    </>
  )
}

export default Portfolio
