import parse from "html-react-parser"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import * as S from "./styles"

interface SkillsPageProps {
  content: {
    title: string
    skills: {
      title: string
      text: string
      items: string[]
    }[]
  }
}

export function SkillsPage({ content }: SkillsPageProps) {
  return (
    <S.Container>
      <HeadingTitle>{parse(content.title)}</HeadingTitle>
      {content.skills.map((skill, index) => (
        <S.Grid key={index}>
          <p>{parse(skill.text)}</p>
          <S.List>
            {skill.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </S.List>
        </S.Grid>
      ))}
    </S.Container>
  )
}

export default SkillsPage
