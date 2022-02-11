import type { NextPage } from "next"
import React, { useContext } from "react"
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
        I'm a <strong>Front End Developer</strong> and beginner to UI Designer
        from Brazil based on Porto, Portugal. I'm interested in building web
        and mobile apps with highlighting the visual aspects and user
        experience.
        `,
      ],
    },
    pt: {
      title: "Olá, meu nome é <strong>Bruno Alves</strong>.",
      subtitle: "Eu desenvolvo sites e aplicativos móveis",
      text: [
        `
        Sou um <strong>Desenvolvedor Front End</strong> e aspirante a
        Designer de Interfaces, nascido no Brasil e localizado no Porto,
        Portugal. Sou focado em construir aplicações móveis e web com
        atenção a usabilidade e aos aspectos mais visuais.
        `,
      ],
    },
  }

  return (
    <>
      <HomePage content={content[language]} />
    </>
  )
}

export default Home
