import { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import Portuguese from "../content/contact/pt.mdx"
import English from "../content/contact/en.mdx"

import { Container } from "../styles/page.contact"

const Contact: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <Container>{language === "pt" ? <Portuguese /> : <English />}</Container>
  )
}

export default Contact
