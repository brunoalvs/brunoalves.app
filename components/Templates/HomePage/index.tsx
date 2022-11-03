import parse from "html-react-parser"
import { ExternalLink } from "../../Atoms/Typography/ExternalLink"
import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Text from "../../Atoms/Typography/Text"
import Avatar from "../../Molecules/Avatar"
import * as S from "./styles"

type HomePageProps = {
  content: {
    title: string
    subtitle: string
    text: string[]
    resume: {
      title: string
      url: string
    }
  }
}

export function HomePage({ content }: HomePageProps) {
  return (
    <S.Container>
      <section className="presentation">
        <article className="content">
          <HeadingTitle>{parse(content.title)}</HeadingTitle>
          <HeadingSubtitle>{content.subtitle}</HeadingSubtitle>
          {content.text.map((text, index) => (
            <Text key={index}>{parse(text)}</Text>
          ))}
          <ExternalLink href={content.resume.url}>
            {content.resume.title}
          </ExternalLink>
        </article>
        <Avatar />
      </section>
    </S.Container>
  )
}
