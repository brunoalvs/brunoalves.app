import { useEffect, useState } from "react"

import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Subtitle from "../../Atoms/Typography/HeadingSubtitle"
import Text from "../../Atoms/Typography/Text"

import ReactMarkdown from "react-markdown"
import ExampleMarkdown from "./example.md"

import { Content } from "./styles"

const HomeTemplate = (props: any) => {
  useEffect(() => {
    console.log("Home", props)
  }, [])

  return (
    <>
      <HeadingTitle>
        {props.title} <strong>Bruno Alves</strong>.
      </HeadingTitle>
      <Subtitle>{props.subtitle}</Subtitle>
      <Text innerHTML={props.content} />

      <Content>
        <ReactMarkdown children={`${ExampleMarkdown}`} />
      </Content>
    </>
  )
}

export default HomeTemplate
