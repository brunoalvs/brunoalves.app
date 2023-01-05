import { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import { SkillsPage } from "../components/Templates/SkillsPage"
import Head from "next/head"

const Skills: NextPage = () => {
  const { language } = useContext(LayoutContext)

  const content = {
    en: {
      pagetitle: "Skills - Bruno Alves | Front-End Developer Portfolio",
      title: "Skills",
      skills: [
        {
          title: "Development",
          text: [
            `
              In these years as a front end developer, I had the pleasure to participate in several projects for a wide range of clients. My know-how allows me to build products and deliver solid solutions to the client's projects.
            `,
          ],
          items: [
            "HTML & CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "React Native",
            "CSS Modules",
            "SASS & Stylus",
            "Styled Components",
            "Node.js",
            "Express.js",
            "Unit Tests (Jest & React Testing Library)",
            "Acessibility",
          ],
        },
      ],
    },
    pt: {
      pagetitle:
        "Habilidades - Bruno Alves | Portfólio de Desenvolvedor Front-End",
      title: "Habilidades",
      skills: [
        {
          title: "Desenvolvimento",
          text: [
            `Nestes anos como desenvolvedor front end, eu tive o prazer de trabalhar e participar de projetos com clientes de diferentes tamanhos e ramos de atuação. Durante esse tempo trabalhei com diversas tecnologias, sendo as mais recentes:`,
          ],
          items: [
            "HTML & CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "React Native",
            "CSS Modules",
            "SASS & Stylus",
            "Styled Components",
            "Node.js",
            "Express.js",
            "Testes Unitários (Jest & React Testing Library)",
            "Acessibilidade (ARIA) e WCAG",
          ],
        },
      ],
    },
  }

  return (
    <>
      <Head>
        <title>{content[language].pagetitle}</title>
      </Head>
      <SkillsPage content={content[language]} />
    </>
  )
}

export default Skills
