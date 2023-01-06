import type { NextApiRequest, NextApiResponse } from "next"
import type { IJob } from '../../types/portfolio'

type Data = {
  en: {
    title: string
    jobs: IJob[]
  }
  pt: {
    title: string
    jobs: IJob[]
  }
}

export const data = {
  en: {
    pagetitle: "Portfolio - Bruno Alves | Front-end Developer",
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
          "The Brastemp Retro is a line of products that brings the 50s and 60s style to the present day. The landing page was created to show the product's details and to be part of the official Brastemp store.",
        url: "https://www.brastemp.com.br/linhas-especiais/brastemp-retro",
        urlLabel: "See the project",
        image: "/images/jobs/brastemp-retro.png",
      },
      {
        title: "Refrigerator Product Page - Consul",
        content:
          "Showing the Consul's refrigerator, this page is responsive and has a intuitive and modern design. With details of the product, it is part of the official Consul store.",
        url: "https://www.consul.com.br/geladeira-consul-frost-free-duplex-450-litros-branca-crm56hb",
        urlLabel: "See the project",
        image: "/images/jobs/consul-geladeira.png",
      },
      {
        title: "Páginas Coloridas - Coral/AkzoNobel",
        content:
          "A platform that connects painters and customers, allowing the painter to create a profile and show their work, and the customer to find the painter closest to their location.",
        url: "https://loja.consul.com.br/paginas-coloridas-consul",
        urlLabel: "See the project",
        image: "/images/jobs/paginas-coloridas.png",
      },
    ],
  },
  pt: {
    pagetitle: "Portfólio - Bruno Alves | Desenvolvedor Front-end",
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
          "A linha Brastemp Retrô resgata uma lembrança vintage com o clássico logo da “Brastemp” e o puxador característico, ambos originais da marca dos anos 50. Além disso, traz cores que representam o espírito vintage em harmonia com um ambiente contemporâneo.",
        url: "https://www.brastemp.com.br/linhas-especiais/brastemp-retro",
        urlLabel: "Visite o site",
        image: "/images/jobs/brastemp-retro.png",
      },
      {
        title: "Página de Produto Geladeira - Consul",
        content:
          "Apresentando a geladeira Consul, a página de produto é responsiva e possui um layout moderno e intuitivo, com informações detalhadas sobre o produto é uma parte da loja oficial da Consul.",
        url: "https://www.consul.com.br/geladeira-consul-frost-free-duplex-450-litros-branca-crm56hb",
        urlLabel: "Visite o site",
        image: "/images/jobs/consul-geladeira.png",
      },
      {
        title: "Páginas Coloridas - Coral/AkzoNobel",
        content:
          "Uma espaço que conecta pintores certificados com clientes com o objetivo de tornar a procura por esses serviços mais fácil e eficiente.",
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
