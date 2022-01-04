import React from "react"
import styled from "styled-components"

const Container = styled.h2`
  color: var(--secondary-color);
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 160%;
`

const HeadingSubtitle: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default HeadingSubtitle
