import React from "react"
import * as S from './styles'

interface HeadingTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const HeadingTitle: React.FC<HeadingTitleProps> = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>
}

export default HeadingTitle
