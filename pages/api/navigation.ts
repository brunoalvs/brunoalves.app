// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { INavigation } from "../../types/layout"

const content: INavigation = {
  en: {
    list: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Portfolio",
        url: "/portfolio",
      },
      {
        name: "About Me",
        url: "/about",
      },
      {
        name: "Skills",
        url: "/skills",
      },
      {
        name: "Get in Touch",
        url: "/contact",
      },
    ],
  },
  pt: {
    list: [
      {
        name: "Inicio",
        url: "/",
      },
      {
        name: "Portfólio",
        url: "/portfolio",
      },
      {
        name: "Sobre Mim",
        url: "/about",
      },
      {
        name: "Habilidades",
        url: "/skills",
      },
      {
        name: "Contato",
        url: "/contact",
      },
    ],
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<INavigation>
) {
  res.status(200).json(content)
}
