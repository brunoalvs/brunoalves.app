import axios from "axios"
import useSWR from "swr"
import type { NextPage } from "next"

import Layout from "../components/Organisms/Layout"
import Subtitle from "../components/Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"

import { LayoutContext } from "../contexts/layout"
import { useContext } from "react"

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/home", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Layout title="Home | Bruno Alves - Desenvolvedor Front End">
        <HeadingTitle>{data[language].title}</HeadingTitle>
        <Subtitle>{data[language].subtitle}</Subtitle>
        <Text innerHTML={data[language].content} />
        <Text>{data[language].content.__html}</Text>
      </Layout>
    </>
  )
}

export default Home
