import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  en: {
    title: string
    subtitle: string
    content: {
      __html: string
    }
  }
  pt: {
    title: string
    subtitle: string
    content: {
      __html: string
    }
  }
}

const data: Data = {
  en: {
    title: "Hello, my name is",
    subtitle: "I build web sites and mobile apps",
    content: {
      __html: `Lorem ipsum English, dolor sit amet consectetur <strong>adipisicing elit</strong>. Velit, <a href="http://google.com" target="_blank" rel="noopener noreferrer">Google</a> voluptate aut consectetur, facilis, ad adipisci ea non veritatis fugiat accusantium natus laudantium! In omnis, quidem repellat eveniet iusto fugit incidunt.`,
    },
  },
  pt: {
    title: "Olá, meu nome é",
    subtitle: "Eu construo sites e aplicativos para dispositivos móveis",
    content: {
      __html: `Lorem ipsum Português, dolor sit amet consectetur <strong>adipisicing elit</strong>. Velit, <a href="http://google.com" target="_blank" rel="noopener noreferrer">Google</a> voluptate aut consectetur, facilis, ad adipisci ea non veritatis fugiat accusantium natus laudantium! In omnis, quidem repellat eveniet iusto fugit incidunt.`,
    },
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
