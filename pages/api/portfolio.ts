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
          "Accessible landing page to people with any kind of visual impairment to promote Consul’s new tactile stickers, which allows the identification of the featrues for some Consul’s models of stoves and microwaves.",
        url: "https://loja.consul.com.br/adesivos-tateis-alto-relevo-pra-cego-ver",
        urlLabel: "See the project",
        image: "/images/jobs/consul-acessibilidade.png",
      },
      {
        title: "Mixer Limited Edition - KitchenAid",
        content:
          "A special landing page for the limited edition of KitchenAid’s mixer, highlighting the product's details and being part of the official Kitchen Aid store.",
        url: "https://www.kitchenaid.com.br/edicao-limitada",
        urlLabel: "See the project",
        image: "/images/jobs/kitchenaid-limitededition.png",
      },
      {
        title: "Artisan Colors - KitchenAid Latin America",
        content:
          "Communicate the launch of the new Astisan’s mixer in Brazil, providing an immersive experience for the costumer through multiple colors options.",
        url: "https://www.kitchenaid.com.br/eletroportateis/batedeira-novas-cores",
        urlLabel: "See the project",
        image: "/images/jobs/kitchenaid-artisan.png",
      },
      {
        title: "Brastemp - Retro",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consecteturconsectetur, nisi nisi aliquet nunc, eget consect",
        url: "https://www.brastemp.com.br/linhas-especiais/brastemp-retro",
        urlLabel: "See the project",
        image: "/images/jobs/brastemp-retro.png",
      },
      {
        title: "Refrigerator Product Page - Consul",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consecteturconsectetur, nisi nisi aliquet nunc, eget consect",
        url: "https://www.consul.com.br/geladeira-consul-frost-free-duplex-450-litros-branca-crm56hb",
        urlLabel: "See the project",
        image: "/images/jobs/consul-geladeira.png",
      },
      {
        title: "Páginas Coloridas - Coral/AkzoNobel",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consecteturconsectetur, nisi nisi aliquet nunc, eget consect",
        url: "https://loja.consul.com.br/paginas-coloridas-consul",
        urlLabel: "See the project",
        image: "/images/jobs/paginas-coloridas.png",
      },
    ],
  },
  pt: {
    title: "Portfólio",
    jobs: [
      {
        title: "Adesivos Táteis - Consul",
        content:
          "Landing Page acessível para pessoas cegas ou com algum tipo de deficiência visual, para divulgar os novos adesivos táteis da Consul, que facilitam a identificação das funções de alguns modelos de fogões e micro-ondas da Consul.",
        url: "https://loja.consul.com.br/adesivos-tateis-alto-relevo-pra-cego-ver",
        urlLabel: "Visite o site",
        image: "/images/jobs/consul-acessibilidade.png",
      },
      {
        title: "Batedeira Edição Limitada - KitchenAid",
        content:
          "Uma landing page especial para a batedeira, Edição Limitada, da KitchenAid, destacando os detalhes do produto e fazendo parte da loja oficial da Kitchen Aid.",
        url: "https://www.kitchenaid.com.br/edicao-limitada",
        urlLabel: "Acesse",
        image: "/images/jobs/kitchenaid-limitededition.png",
      },
      {
        title: "Colors - KitchenAid",
        content:
          "Comunicar o lançamento das novas cores da batedeira Artisan no Brasil, fornecendo uma experiência imersiva para o consumidor pelas várias cores.",
        url: "https://www.kitchenaid.com.br/eletroportateis/batedeira-novas-cores",
        urlLabel: "Visite o site",
        image: "/images/jobs/kitchenaid-artisan.png",
      },
      {
        title: "Brastemp - Retro",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consecteturconsectetur, nisi nisi aliquet nunc, eget consect",
        url: "https://www.brastemp.com.br/linhas-especiais/brastemp-retro",
        urlLabel: "Visite o site",
        image: "/images/jobs/brastemp-retro.png",
      },
      {
        title: "Página de Produto Geladeira - Consul",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consecteturconsectetur, nisi nisi aliquet nunc, eget consect",
        url: "https://www.consul.com.br/geladeira-consul-frost-free-duplex-450-litros-branca-crm56hb",
        urlLabel: "Visite o site",
        image: "/images/jobs/consul-geladeira.png",
      },
      {
        title: "Páginas Coloridas - Coral/AkzoNobel",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consecteturconsectetur, nisi nisi aliquet nunc, eget consect",
        url: "https://paginascoloridas.com.br/",
        urlLabel: "Visite o site",
        image: "/images/jobs/paginas-coloridas.png",
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
