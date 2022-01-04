import { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../../contexts/layout"

import Portuguese from "../../content/skills.pt.mdx"
import English from "../../content/skills.en.mdx"

import { Container } from "./styled"

const Skills: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <Container>{language === "pt" ? <Portuguese /> : <English />}</Container>
  )
}

export default Skills
