import type { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import ReactMarkdown from "react-markdown"

import Portuguese from "../content/aboutme.pt.mdx"
import English from "../content/aboutme.en.md"

const About: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <div className="container">
      {language === "pt" ? (
        <Portuguese />
      ) : (
        <ReactMarkdown>{English}</ReactMarkdown>
      )}
    </div>
  )
}

export default About
