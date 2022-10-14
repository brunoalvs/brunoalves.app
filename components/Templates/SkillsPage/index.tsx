import parse from "html-react-parser"

import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import { Container } from "./styles"

type SkillsPageProps = {
  content: {
    title: string
    skills: {
      text: string[]
      items: string[]
    }[]
  }
}

export function SkillsPage({ content }: SkillsPageProps) {
  return (
    <Container>
      <HeadingTitle>{content.title}</HeadingTitle>

      <div className="grid">
        {content.skills.map((skill, index) => (
          <article key={index}>
            {skill.text.map((text, index) => (
              <p key={index}>{parse(text)}</p>
            ))}

            <ul className="skill_list">
              {skill.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Container>
  )
}
