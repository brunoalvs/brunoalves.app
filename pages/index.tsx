import type { NextPage } from "next"
import { useContext, useEffect } from "react"

import { LayoutContext } from "../contexts/layout"

import ReactMarkdown from "react-markdown"

import Portuguese from "../content/home.pt.md"
import English from "../content/home.en.md"

const Index: NextPage = () => {
  const { language } = useContext(LayoutContext)

  useEffect(() => {
    console.log(Portuguese)
  }, [])

  return (
    <>
      <ReactMarkdown>
        {`${language === "pt" ? Portuguese : English}`}
      </ReactMarkdown>
    </>
  )
}

export default Index
