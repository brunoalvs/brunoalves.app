import type { NextApiRequest, NextApiResponse } from "next"

export interface IDataJob {
  title: string
  content: string
  url: string
  urlLabel: string
  image: string
}

type Data = {
  en: {
    title: string
    jobs: IDataJob[]
  }
  pt: {
    title: string
    jobs: IDataJob[]
  }
}

const data = {
  en: {
    title: "Portfolio",
    jobs: [
      {
        title: "Touched Sticker - Consul",
        content:
          "A landing page acessible to blind people or people with visuals disabilities, that allows them to interact with the company and its products.",
        url: "https://loja.consul.com.br/adesivos-tateis-alto-relevo-pra-cego-ver",
        urlLabel: "See the project",
        image: "/images/jobs/consul-acessibilidade.png",
      },
      {
        title: "Limited Edition Mixer - KitchenAid",
        content: "A landing page for the kitchenaid mixer.",
        url: "https://www.kitchenaid.com.br/edicao-limitada",
        urlLabel: "See the project",
        image: "/images/jobs/kitchenaid-limitededition.png",
      },
      {
        title: "Artisan Colors - KitchenAid Latin America",
        content: "Lorem ipsum sit amet",
        url: "https://www.kitchenaid.com.br/eletroportateis/batedeira-novas-cores",
        urlLabel: "Go to Site",
        image: "/images/jobs/kitchenaid-artisan.png",
      },
    ],
  },
  pt: {
    title: "Portfólio",
    jobs: [
      {
        title: "Adesivos Táteis - Consul",
        content:
          "Landing Page acessível para pessoas cegas ou com algum tipo de deficiência visual, para divulgar os <strong>novos adesivos táteis da Consul</strong>, que facilitam a identificação das funções de alguns modelos de fogões e micro-ondas da Consul.",
        url: "https://loja.consul.com.br/adesivos-tateis-alto-relevo-pra-cego-ver",
        urlLabel: "Veja o projeto",
        image: "/images/jobs/consul-acessibilidade.png",
      },
      {
        title: "Batedeira Edição Limitada - KitchenAid",
        content:
          "Uma landing page especial para a batedeira Edição Limitada da KitchenAid, destacando os detalhes do produto e fazendo parte da loja oficial da Kitchen Aid.",
        url: "https://www.kitchenaid.com.br/edicao-limitada",
        urlLabel: "Acesse",
        image: "/images/jobs/kitchenaid-limitededition.png",
      },
      {
        title: "Colors - KitchenAid",
        content:
          "Comunicar o lançamento das novas cores da batedeira Artisan no Brasil, fornecendo uma experiência imersiva para o consumidor pelas várias cores",
        url: "https://www.kitchenaid.com.br/eletroportateis/batedeira-novas-cores",
        urlLabel: "Veja o site",
        image: "/images/jobs/kitchenaid-artisan.png",
      },
    ],
  },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(data)
}
