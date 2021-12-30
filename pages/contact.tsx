import axios from "axios"
import useSWR from "swr"
import type { NextPage } from "next"

import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"

import { LayoutContext } from "../contexts/layout"
import { useContext } from "react"
import Loading from "../components/Organisms/Loading"

const Contact: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/contact", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <Loading />

  return (
    <>
      <HeadingTitle>{data[language].title}</HeadingTitle>
      <Text innerHTML={data[language].content} />
    </>
  )
}

export default Contact
