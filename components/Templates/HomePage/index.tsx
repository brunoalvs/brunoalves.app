import parse from "html-react-parser"
import { ChevronsDown } from "../../Atoms/ChevronsDown"
import { ExternalLink } from "../../Atoms/Typography/ExternalLink"
import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Text from "../../Atoms/Typography/Text"
import Avatar from "../../Molecules/Avatar"

import { Container, About } from "./styles"

type HomePageProps = {
  content: {
    title: string
    subtitle: string
    text: string[]
    content: string[]
  }
}

export function HomePage({ content }: HomePageProps) {
  return (
    <Container>
      <section className="presentation">
        <article>
          <HeadingTitle>{parse(content.title)}</HeadingTitle>
          <HeadingSubtitle>{content.subtitle}</HeadingSubtitle>

          {content.text.map((text, index) => (
            <Text key={index}>{parse(text)}</Text>
          ))}
        </article>
        <Avatar />
      </section>
      <ChevronsDown />
      <About>
        {content.about.map((text, index) => (
          <Text key={index}>{parse(text)}</Text>
        ))}

        <ExternalLink href={"/cv-brunoalves.pdf"}>My resume (pdf)</ExternalLink>
      </About>
    </Container>
  )
}
