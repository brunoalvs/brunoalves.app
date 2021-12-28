import { IDataJob } from "../../../pages/api/portfolio"
import Subtitle from "../../Atoms/Typography/HeadingSubtitle"
import Text from "../../Atoms/Typography/Text"

import { Container, Content } from "./styles"

const JobSection: React.FC<IDataJob> = ({ title, content, url, urlLabel }) => {
  return (
    <Container>
      <Content>
        <Subtitle>{title}</Subtitle>
        <Text innerHTML={{ __html: content }} />
        <a href={url}>{urlLabel}</a>
      </Content>
    </Container>
  )
}

export default JobSection
