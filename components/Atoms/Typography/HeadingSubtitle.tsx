import React from "react"
import styled from "styled-components"

const Container = styled.h2`
  color: var(--secondary-color);
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 100%;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

interface HeadingSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const HeadingSubtitle: React.FC<HeadingSubtitleProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default HeadingSubtitle
