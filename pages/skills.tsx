import { useContext } from "react"
import { NextPage } from "next"
import Head from "next/head"
import { LayoutContext } from "../contexts/layout"

import { i18n } from "../i18n"
import { SkillsPage } from "../components/Templates/SkillsPage"

const Skills: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <>
      <Head>
        <title>{i18n[language].skills.pagetitle}</title>
      </Head>
      <SkillsPage content={i18n[language].skills} />
    </>
  )
}

export default Skills
