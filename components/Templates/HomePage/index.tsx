import parse from "html-react-parser"
import { ChevronsDown } from "../../Atoms/ChevronsDown"
import { ExternalLink } from "../../Atoms/Typography/ExternalLink"
import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Text from "../../Atoms/Typography/Text"
import Avatar from "../../Molecules/Avatar"

type HomePageProps = {
  content: {
    title: string
    subtitle: string
    text: string[]
  }
}

export function HomePage({ content }: HomePageProps) {
  return (
    <div>
      <section>
        <article>
          <HeadingTitle>{parse(content.title)}</HeadingTitle>
          <HeadingSubtitle>{content.subtitle}</HeadingSubtitle>

          {content.text.map((text, index) => (
            <Text key={index}>{parse(text)}</Text>
          ))}
        </article>
      </section>
      <section>
        <ChevronsDown />

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sagittis
          facilisis urna ante eget a sodales. Nisi, sapien pellentesque tortor
          viverra. Malesuada volutpat id nec adipiscing mauris quam viverra. Sem
          sollicitudin aliquam pharetra, elit amet sollicitudin. Eget tincidunt
          diam ultricies aliquet tellus gravida. Ultricies rhoncus ut lobortis
          amet, morbi risus nullam magna facilisis. Lectus phasellus quis amet
          scelerisque id malesuada non eget.
        </Text>
        <Text>
          Ipsum laoreet a nulla sem. Tellus feugiat fusce feugiat integer in
          pulvinar pellentesque tortor. Nunc fusce lorem diam venenatis, enim.
          Tempus interdum faucibus at odio justo ullamcorper tellus urna,
          habitant.
        </Text>

        <ExternalLink href={"#"}>My resume (pdf)</ExternalLink>
      </section>
    </div>
  )
}
