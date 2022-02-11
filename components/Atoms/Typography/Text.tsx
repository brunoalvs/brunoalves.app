import React from "react"
import styled from "styled-components"

const Container = styled.p`
  color: var(--text-color);
  font-size: 1.5rem;
  line-height: 160%;

  > a {
    color: var(--link-color);
    font-style: italic;
    transition: color 0.2s ease;
  }

  > a:hover {
    color: var(--link-color-hover);
  }
`

interface Props {
  innerHTML?: string
}

const Text: React.FC<Props> = ({ children, innerHTML }) => {
  if (innerHTML !== undefined) {
    return (
      <Container
        dangerouslySetInnerHTML={{
          __html: innerHTML,
        }}
      />
    )
  }

  return <Container>{children}</Container>
}

export default Text
