import { NextPage } from "next"
import { useContext } from "react"
import { LayoutContext } from "../contexts/layout"

import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"
import ListSocial from "../components/Molecules/ListSocial"

import { Container } from "../styles/page.contact"

const Contact: NextPage = () => {
  const { language } = useContext(LayoutContext)

  if (language === "pt") {
    return (
      <Container>
        <HeadingTitle>Entre em Contato</HeadingTitle>
        <Text>
          Se você gostou do meu trabalho e quer saber mais sobre mim, conversar
          sobre uma colaboração em projetos ou apenas dizer um olá, você pode me
          enviar um <a href="mailto:hello@brunoalves.app">e-mail</a> ou me
          chamar no :
        </Text>
        <ListSocial />
      </Container>
    )
  }

  return (
    <Container>
      <HeadingTitle>Get in Touch</HeadingTitle>
      <Text>
        If you liked my work and want to know more about me, talk about a
        project collaboration or just say hi, you can send an{" "}
        <a href="mailto:hello@brunoalves.app">e-mail</a> to me, or you can find
        me on:
      </Text>
      <ListSocial />
    </Container>
  )
}

export default Contact
