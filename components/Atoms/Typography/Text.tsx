import React, { DOMAttributes } from "react"
import styled from "styled-components"

const Container = styled.p`
  color: var(--text-color);
  font-size: 1.5rem;
  line-height: 160%;

  > strong {
    color: var(--primary-color);
    font-weight: normal;
  }

  > a {
    color: var(--primary-color);
    font-style: italic;
  }
`

interface Props {
  innerHTML?: DOMAttributes<HTMLParagraphElement>["dangerouslySetInnerHTML"]
}

const Text: React.FC<Props> = ({ children, innerHTML }) => {
  if (innerHTML !== undefined) {
    return (
      <Container
        dangerouslySetInnerHTML={{
          __html: innerHTML.__html,
        }}
      />
    )
  }

  return <Container>{children}</Container>
}

export default Text
