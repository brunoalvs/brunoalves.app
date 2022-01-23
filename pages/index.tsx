import type { NextPage } from "next"
import { useContext } from "react"
import { LayoutContext } from "../contexts/layout"

import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import HeadingSubtitle from "../components/Atoms/Typography/HeadingSubtitle"
import Text from "../components/Atoms/Typography/Text"
import Avatar from "../components/Molecules/Avatar"
import { Container } from "../styles/page.home"

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext)

  if (language === "pt") {
    return (
      <Container>
        <article>
          <HeadingTitle>
            Olá, meu nome é <strong>Bruno Alves</strong>.
          </HeadingTitle>
          <HeadingSubtitle>
            Eu desenvolvo sites e aplicativos móveis
          </HeadingSubtitle>
          <Text>
            Sou um <strong>Desenvolvedor Front End</strong> e aspirante a
            Designer de Interfaces, nascido no Brasil e localizado no Porto,
            Portugal. Sou focado em construir aplicações móveis e web com
            atenção a usabilidade e aos aspectos mais visuais.
          </Text>
        </article>
        <Avatar />
      </Container>
    )
  }

  return (
    <Container>
      <article>
        <HeadingTitle>
          Hello, my name is <strong>Bruno Alves</strong>.
        </HeadingTitle>
        <HeadingSubtitle>I develop mobile apps and websites</HeadingSubtitle>
        <Text>
          I'm a <strong>Front End Developer</strong> and beginner to UI Designer
          from Brazil based on Porto, Portugal. I'm interested in building web
          and mobile apps with highlighting the visual aspects and user
          experience.
        </Text>
      </article>

      <Avatar />
    </Container>
  )
}

export default Home
