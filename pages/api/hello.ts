// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  en: {
    navItems: {
      name: string;
      href: string;
    }[];
  };
  pt: {
    navItems: {
      name: string;
      href: string;
    }[];
  };
};

const content: Data = {
  en: {
    navItems: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Portfolio",
        href: "/portfolio",
      },
      {
        name: "About Me",
        href: "/about",
      },
      {
        name: "Skills",
        href: "/skills",
      },
      {
        name: "Get in Touch",
        href: "/contact",
      },
    ],
  },
  pt: {
    navItems: [
      {
        name: "Inicio",
        href: "/",
      },
      {
        name: "Portfólio",
        href: "/portfolio",
      },
      {
        name: "Sobre Mim",
        href: "/about",
      },
      {
        name: "Habilidades",
        href: "/skills",
      },
      {
        name: "Contato",
        href: "/contact",
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
