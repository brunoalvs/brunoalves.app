import { NextPage } from "next"
import { useContext } from "react"

import { LayoutContext } from "../contexts/layout"

import { SkillsPage } from "../components/Templates/SkillsPage"

const Skills: NextPage = () => {
  const { language } = useContext(LayoutContext)

  const content = {
    en: {
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
            "Node.js",
            "React (Next.js)",
            "React Native",
            "Sass (SCSS) & Stylus",
            "Styled Components",
            "Jest",
            "Acessibility",
          ],
        },
        {
          title: "Design",
          text: [
            `
          My knowledge in front-end developing helps me create user interfaces and website experiences that not only look good but are also easy to implement.
          `,
          ],
          items: [
            "Wireframing",
            "Prototyping",
            "Design Tools (Adobe XD and Figma)",
            "Interface Design",
            "UX Design",
            "Accessibility Testing & Usability Testing",
          ],
        },
      ],
    },
    pt: {
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
            "Node.js",
            "React (Next.js)",
            "React Native",
            "Sass (SCSS) & Stylus",
            "Styled Components",
            "Jest",
            "Acessibilidade (ARIA) e WCAG",
          ],
        },
        {
          title: "Design",
          text: [
            `Meus conhecimentos em desenvolvimento front-end me ajuda a criar interfaces de usuário que sejam funcionais e sejam acessíveis para todos.`,
          ],
          items: [
            "Wireframe",
            "Prototipagem",
            "Ferramentas de Design (Figma e Adobe XD)",
            "Design de Interface",
            "UX Design",
            "Teste de Usabilidade & Acessibilidade",
          ],
        },
      ],
    },
  }

  return <SkillsPage content={content[language]} />
}

export default Skills
