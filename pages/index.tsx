import axios from "axios"
import useSWR from "swr"

import type { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import HomeTemplate from "../components/Templates/Home"

import Subtitle from "../components/Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"

const Index: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/home", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <></>

  return <HomeTemplate {...data[language]} />

  return (
    <>
      <HeadingTitle>{data[language].title}</HeadingTitle>
      <Subtitle>{data[language].subtitle}</Subtitle>
      <Text innerHTML={data[language].content} />
    </>
  )
}

export default Index
