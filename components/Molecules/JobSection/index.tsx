import Image from "next/image"
import { IDataJob } from "../../../pages/api/portfolio"
import { ExternalLink } from "../../Atoms/Typography/ExternalLink"

import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
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
        <HeadingSubtitle>{title}</HeadingSubtitle>
        <Text innerHTML={content} />
        <ExternalLink href={url}>{urlLabel}</ExternalLink>
      </Content>
    </Container>
  )
}

export default JobSection
