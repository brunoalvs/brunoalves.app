import parse from "html-react-parser"
import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Text from "../../Atoms/Typography/Text"
import ListSocial from "../../Molecules/ListSocial"

import { Container } from "./styles"

type ContactPageProps = {
  content: {
    title: string
    subtitle: string
    text: string[]
  }
}

export function ContactPage({ content }: ContactPageProps) {
  return (
    <Container>
      <section className="content">
        <HeadingTitle>{content.title}</HeadingTitle>
        <HeadingSubtitle>{content.subtitle}</HeadingSubtitle>

        {content.text.map((text, index) => (
          <Text key={index}>{parse(text)}</Text>
        ))}
        <ListSocial />
      </section>
      <section
        className="map"
        style={{
          backgroundColor: "#272449",
        }}
      ></section>
    </Container>
  )
}
