import Image from "next/image"
import { IDataJob } from "../../../pages/api/portfolio"
import { ExternalLink } from "../../Atoms/Typography/ExternalLink"

import HeadingSubtitle from "../../Atoms/Typography/HeadingSubtitle"
import Text from "../../Atoms/Typography/Text"

import * as S from "./styles"

const JobSection: React.FC<IDataJob> = ({
  title,
  content,
  url,
  urlLabel,
  image,
}) => {
  return (
    <S.Container>
      <Image
        src={image}
        alt={title}
        width={300}
        height={205}
        layout="responsive"
        priority={true}
      />
      <S.Content>
        <HeadingSubtitle>{title}</HeadingSubtitle>
        <Text innerHTML={content} />
        <ExternalLink href={url}>{urlLabel}</ExternalLink>
      </S.Content>
    </S.Container>
  )
}

export default JobSection
