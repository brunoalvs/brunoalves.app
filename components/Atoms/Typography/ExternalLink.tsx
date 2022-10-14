import React from "react"
import styled from "styled-components"

const Container = styled.a`
  color: var(--secondary-color);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
    text-decoration: underline;
  }
`

type ExternalLinkProps = {
  href: string
  children: React.ReactNode
  target?: "_blank" | "_self" | "_parent" | "_top" | string
}

export function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  return (
    <Container href={href} target={props.target} rel="noopener noreferrer">
      {children}
    </Container>
  )
}
