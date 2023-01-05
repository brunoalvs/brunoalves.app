import { useContext } from "react"
import type { NextPage } from "next"

import { LayoutContext } from "../contexts/layout"
import { HomePage } from "../components/Templates/HomePage"

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext)

  const content = {
    en: {
      title: "Hello, my name is <strong>Bruno Alves</strong>.",
      subtitle: "I develop mobile apps and websites",
      text: [
        `
        I'm a Brazilian <strong>Front End Developer</strong> based in Porto, Portugal.
        I'm focused web development mainly using <strong>React</strong> and <strong>Next.js</strong>.
        I also interested in building mobile apps with <strong>React Native</strong> and
        I'm always learning and trying new things.
        `,
      ],
      resume: {
        title: "LinkedIn",
        url: "https://linkedin.com/in/brunoalvs",
      },
    },
    pt: {
      title: "Olá, meu nome é <strong>Bruno Alves</strong>.",
      subtitle: "Eu desenvolvo sites e aplicativos móveis",
      text: [
        `
        Sou um <strong>Desenvolvedor Front End</strong> brasileiro
        localizado em Porto, Portugal. Sou focado em desenvolvimento web
        usando principalmente <strong>React</strong> e <strong>Next.js</strong>.
        Também estou interessado em construir aplicativos móveis com <strong>React Native</strong>
        e estou sempre aprendendo e experimentando coisas novas.
        `,
      ],
      resume: {
        title: "LinkedIn",
        url: "https://linkedin.com/in/brunoalvs",
      },
    },
  }

  return (
    <>
      <HomePage content={content[language]} />
    </>
  )
}

export default Home
