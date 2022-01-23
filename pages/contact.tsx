import { NextPage } from "next"
import { useContext } from "react"
import { LayoutContext } from "../contexts/layout"

import HeadingTitle from "../components/Atoms/Typography/HeadingTitle"
import Text from "../components/Atoms/Typography/Text"

import { Container } from "../styles/page.contact"

const Contact: NextPage = () => {
  const { language } = useContext(LayoutContext)

  if (language === "pt") {
    return (
      <Container>
        <HeadingTitle>Entre em Contato</HeadingTitle>
        <Text>
          Se você gostou do meu trabalho e quer saber mais sobre mim, conversar
          sobre uma colaboração em projetos ou apenas dizer um olá, você pode
          entrar em contato comigo através do e-mail{" "}
          <a href="mailto:hello@brunoalves.app">hello@brunoalves.app</a>.
        </Text>
      </Container>
    )
  }

  return (
    <Container>
      <HeadingTitle>Get in Touch</HeadingTitle>
      <Text>
        If you wanna get in touch, talk to me about a project collaboration or
        just say hi, fill up the awesome form below or send an email to
        rafael@caferati.me and ~let's talk.
      </Text>
    </Container>
  )
}

export default Contact
