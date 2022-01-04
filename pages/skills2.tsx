import axios from "axios"
import useSWR from "swr"
import { useContext } from "react"
import type { NextPage } from "next"

import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"
import List from "../components/Atoms/Typography/List"
import Column from "../components/Atoms/Layout/Column"

import { LayoutContext } from "../contexts/layout"

const Skills: NextPage = () => {
  const { language } = useContext(LayoutContext)
  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/skills", fetcher)

  if (error) return <div>ERROR: Failed to load</div>
  if (!data) return <></>

  return (
    <>
      <HeadingTitle>{data[language].title}</HeadingTitle>

      <Column>
        <Text>{data[language].dev.text}</Text>
        <List>
          {data[language].dev.skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </List>
      </Column>
      <Column>
        <Text>{data[language].design.text}</Text>
        <List>
          {data[language].design.skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </List>
      </Column>
    </>
  )
}

export default Skills
