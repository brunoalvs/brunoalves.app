import type { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../../contexts/layout"

import Portuguese from "../../content/home/pt.mdx"
import English from "../../content/home/en.mdx"

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return <>{language === "pt" ? <Portuguese /> : <English />}</>
}

export default Home
