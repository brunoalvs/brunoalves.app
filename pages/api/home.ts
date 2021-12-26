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
    title: "Hello",
    subtitle: "This is the subtitle",
    content: {
      __html: `Lorem ipsum English, dolor sit amet consectetur adipisicing elit. Velit, <a href="http://google.com" target="_blank" rel="noopener noreferrer">Google</a> voluptate aut consectetur, facilis, ad adipisci ea non veritatis fugiat accusantium natus laudantium! In omnis, quidem repellat eveniet iusto fugit incidunt.`,
    },
  },
  pt: {
    title: "Olá",
    subtitle: "Este é o subtítulo",
    content: {
      __html: `Lorem ipsum Português, dolor sit amet consectetur adipisicing elit. Velit, <a href="http://google.com" target="_blank" rel="noopener noreferrer">Google</a> voluptate aut consectetur, facilis, ad adipisci ea non veritatis fugiat accusantium natus laudantium! In omnis, quidem repellat eveniet iusto fugit incidunt.`,
    },
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
