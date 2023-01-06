import { useContext } from "react"
import { NextPage } from "next"
import Head from "next/head"
import { LayoutContext } from "../contexts/layout"

import { i18n } from "../i18n"
import { ContactPage } from "../components/Templates/ContactPage"

const Contact: NextPage = () => {
  const { language } = useContext(LayoutContext)

  return (
    <>
      <Head>
        <title>{i18n[language].contact.pagetitle}</title>
      </Head>
      <ContactPage content={i18n[language].contact} />
    </>
  )
}

export default Contact
