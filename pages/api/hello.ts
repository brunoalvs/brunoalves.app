// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  en: {
    navigation: {
      name: string;
      url: string;
    }[];
  };
  pt: {
    navigation: {
      name: string;
      url: string;
    }[];
  };
};

const content: Data = {
  en: {
    navigation: [
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
    navigation: [
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
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(content);
}
