import type { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import Portuguese from "../content/home/pt.mdx"
import English from "../content/home/en.mdx"

import { Container } from "../styles/page.home"

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <Container>{language === "pt" ? <Portuguese /> : <English />}</Container>
  )
}

export default Home
