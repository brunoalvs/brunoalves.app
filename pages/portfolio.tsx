import axios from "axios"
import useSWR from "swr"
import { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import JobList from "../components/Molecules/JobList"

import { Container } from "../styles/page.portfolio"

const Portfolio: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/portfolio", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <></>

  return (
    <Container>
      <HeadingTitle>{data[language].title}</HeadingTitle>
      <JobList jobs={data[language].jobs} />
    </Container>
  )
}

export default Portfolio
