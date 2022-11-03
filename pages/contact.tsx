import { NextPage } from "next"
import { useContext } from "react"
import { LayoutContext } from "../contexts/layout"

import { ContactPage } from "../components/Templates/ContactPage"

const Contact: NextPage = () => {
  const { language } = useContext(LayoutContext)

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: `Let's work together`,
      text: [
        `If you liked my work and want to know more about me, talk about a
      project collaboration or just say hi, you can send me a
      <a href="mailto:hello@brunoalves.app">e-mail</a> or you can find me on LinkedIn.`,
      ],
    },
    pt: {
      title: "Entre em Contato",
      subtitle: "Vamos trabalhar juntos",
      text: [
        `Se você gostou do meu trabalho e quer saber mais sobre mim, conversar
      sobre uma colaboração em projetos ou apenas dizer um olá, você pode me
      enviar um <a href="mailto:hello@brunoalves.app">e-mail</a> ou me
      procurar no LinkedIn:`,
      ],
    },
  }

  return (
    <>
      <ContactPage content={content[language]} />
    </>
  )
}

export default Contact
