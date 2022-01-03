import type { NextApiRequest, NextApiResponse } from "next"
import { IContentAbout } from "../../types/content"

type Data = {
  en: IContentAbout
  pt: IContentAbout
}

const data: Data = {
  en: {
    title: "About Me",
    subtitle: "I build web sites and mobile apps",
    content: {
      __html: `Lorem ipsum English, dolor sit amet consectetur adipisicing elit. Velit, <a href="http://google.com" target="_blank" rel="noopener noreferrer">Google</a> voluptate aut consectetur, facilis, ad adipisci ea non veritatis fugiat accusantium natus laudantium! In omnis, quidem repellat eveniet iusto fugit incidunt.`,
    },
  },
  pt: {
    title: "Sobre Mim",
    subtitle: "Eu construo sites e aplicativos para web e mobile",
    content: {
      __html: `Nestes anos como desenvolvedor front end, tive o prazer de participar de diversos projetos para os mais diversos clientes. <br />Meu know-how me permite construir produtos e entregar soluções sólidas aos projetos do cliente e meu conhecimento em desenvolvimento de front end também me ajuda a criar interfaces de usuário e experiências de site que não apenas parecem boas, mas também são fáceis de implementar. Ei, desenvolvedores, podemos tornar a vida um do outro mais fácil.`,
    },
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
