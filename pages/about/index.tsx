import type { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../../contexts/layout"

import Portuguese from "../../content/about/pt.mdx"
import English from "../../content/about/en.mdx"

import { Container } from "./styled"

const About: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <Container>{language === "pt" ? <Portuguese /> : <English />}</Container>
  )
}

export default About
