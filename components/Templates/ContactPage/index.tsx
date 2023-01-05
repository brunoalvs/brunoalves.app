import parse from "html-react-parser"
import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Text from "../../Atoms/Typography/Text"
import ListSocial from "../../Molecules/ListSocial"
import * as S from "./styles"

type ContactPageProps = {
  content: {
    title: string
    subtitle: string
    text: string
  }
}

export function ContactPage({ content }: ContactPageProps) {
  return (
    <S.Container>
      <section className="content">
        <HeadingTitle>{content.title}</HeadingTitle>
        <HeadingSubtitle>{content.subtitle}</HeadingSubtitle>

        <Text>{parse(content.text)}</Text>
        <ListSocial />
      </section>
      <section
        className="map"
        style={{
          backgroundColor: "#272449",
          width: "100%",
          minHeight: "250px",
          height: "100%",
          borderRadius: "20px",
        }}
      ></section>
    </S.Container>
  )
}
