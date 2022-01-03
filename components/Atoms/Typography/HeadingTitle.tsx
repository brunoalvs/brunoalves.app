import React from "react"
import styled from "styled-components"

const Container = styled.h1`
  color: var(--text-color);
  font-size: 2.625rem;
  font-weight: 700;
  line-height: 160%;

  > strong {
    color: var(--primary-color);
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

const HeadingTitle: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default HeadingTitle
