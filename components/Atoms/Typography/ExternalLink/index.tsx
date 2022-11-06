import React from "react"
import * as S from "./styles"

interface IExternalLinkProps {
  href: string
  children: React.ReactNode
  target?: "_blank" | "_self" | "_parent" | "_top" | string
}

export function ExternalLink({ href, children, target = '_blank' }: IExternalLinkProps) {
  return (
    <S.Container href={href} target={target} rel="noopener noreferrer">
      {children}
    </S.Container>
  )
}
