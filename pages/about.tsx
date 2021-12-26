import axios from "axios"
import useSWR from "swr"
import type { NextPage } from "next"

import Layout from "../components/Organisms/Layout"
import Subtitle from "../components/Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"

import { LayoutContext } from "../contexts/layout"
import { useContext } from "react"

const About: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/about", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Layout title={data[language].title}>
        <HeadingTitle>{data[language].title}</HeadingTitle>
        <Subtitle>{data[language].subtitle}</Subtitle>
        <Text innerHTML={data[language].content} />
      </Layout>
    </>
  )
}

export default About
