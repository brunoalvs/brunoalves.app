import type { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../../contexts/layout"

import Portuguese from "../../content/aboutme.pt.mdx"
import English from "../../content/aboutme.en.mdx"

import HeadingTitle from "../../components/Atoms/Typography/HeadingTitle"
import { Container } from "./styled"

const About: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <Container>
      {language === "pt" ? (
        <Portuguese components={{ h2: HeadingTitle }} />
      ) : (
        <English />
      )}
    </Container>
  )
}

export default About
