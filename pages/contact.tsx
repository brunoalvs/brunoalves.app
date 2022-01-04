import { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import Portuguese from "../content/contact/pt.mdx"
import English from "../content/contact/en.mdx"

const Contact: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return <>{language === "pt" ? <Portuguese /> : <English />}</>
}

export default Contact
