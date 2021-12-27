import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  en: {
    title: string
    dev: {
      text: string
      skills: string[]
    }
    design: {
      text: string
      skills: string[]
    }
  }
  pt: {
    title: string
    dev: {
      text: string
      skills: string[]
    }
    design: {
      text: string
      skills: string[]
    }
  }
}

const data: Data = {
  en: {
    title: "Skills",
    dev: {
      text: "In these years as a front end developer, I had the pleasure of participate in several projects for a wide range of clients. My know-how allows me to build products and deliver solid solutions to the client's projects.",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "React Native",
        "Sass (SCSS) & Stylus",
        "Styled Components",
        "Jest",
      ],
    },
    design: {
      text: "My knowledge in front-end developing helps me create user interfaces and website experiences that not only look good but are also easy to implement. Hey devs, we can make each other’s life easier.",
      skills: [
        "Wireframing",
        "Prototyping",
        "Figma",
        "Adobe XD",
        "User Testing",
        "User Research",
        "User Experience Design",
        "User Interface Design",
        "Design Systems",
        "Web Animation",
        "Web Accessibility",
      ],
    },
  },
  pt: {
    title: "Habilidades",
    dev: {
      text: "Nestes anos como desenvolvedor front end, tive o prazer de participar de diversos projetos para os mais diversos clientes. Meu know-how me permite construir produtos e entregar soluções sólidas aos projetos do cliente e meu conhecimento em desenvolvimento de front end também me ajuda a criar interfaces de usuário e experiências de site que não apenas parecem boas, mas também são fáceis de implementar. Ei, desenvolvedores, podemos tornar a vida um do outro mais fácil.",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "React Native",
        "Sass (SCSS) & Stylus",
        "Styled Components",
        "Jest",
      ],
    },
    design: {
      text: "Meu conhecimento em desenvolvimento front end me ajuda a criar interfaces de usuário e experiências de site que não apenas parecem boas, mas também são fáceis de implementar. Hey devs, podemos tornar a vida de cada um de nós um do outro mais fácil.",
      skills: [
        "Wireframing",
        "Prototyping",
        "Figma",
        "Adobe XD",
        "User Research & Testing",
        "User Experience & Interface Design",
        "Design Systems",
        "Web Animation",
        "Web Accessibility",
      ],
    },
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
