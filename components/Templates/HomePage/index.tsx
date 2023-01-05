import parse from "html-react-parser"
import { ExternalLink } from "../../Atoms/Typography/ExternalLink"
import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Text from "../../Atoms/Typography/Text"
import Avatar from "../../Molecules/Avatar"
import * as S from "./styles"

interface HomePageProps {
  content: {
    title: string
    subtitle: string
    text: string
    resume: {
      title: string
      url: string
    }
  }
}

export function HomePage({ content }: HomePageProps) {
  return (
    <S.Container>
      <S.Presentation>
        <S.Content>
          <HeadingTitle>{parse(content.title)}</HeadingTitle>
          <HeadingSubtitle className="subtitle">
            {content.subtitle}
          </HeadingSubtitle>
          <Text>{parse(content.text)}</Text>
          <ExternalLink href={content.resume.url}>
            {content.resume.title}
          </ExternalLink>
        </S.Content>
        <Avatar />
      </S.Presentation>
    </S.Container>
  )
}
