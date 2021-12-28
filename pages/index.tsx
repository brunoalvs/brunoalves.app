import axios from "axios"
import useSWR from "swr"

import type { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import Loading from "../components/Organisms/Loading"
import Layout from "../components/Organisms/Layout"
import Subtitle from "../components/Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/home", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <Loading />

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

export default Home
