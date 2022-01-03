import Image from "next/image"
import { IDataJob } from "../../../pages/api/portfolio"

import Subtitle from "../../Atoms/Typography/HeadingSubtitle"
import Text from "../../Atoms/Typography/Text"

import { Container, Content } from "./styles"

const JobSection: React.FC<IDataJob> = ({
  title,
  content,
  url,
  urlLabel,
  image,
}) => {
  return (
    <Container>
      <Image
        src={image}
        alt={title}
        width={300}
        height={205}
        layout="responsive"
        priority={true}
      />
      <Content>
        <Subtitle>{title}</Subtitle>
        <Text innerHTML={{ __html: content }} />
        <a href={url}>{urlLabel}</a>
      </Content>
    </Container>
  )
}

export default JobSection
