import React from "react"
import DOMPurify from "isomorphic-dompurify"
import * as S from "./styles"

interface ITextProps {
  children?: React.ReactNode
  innerHTML?: string | Node
}

const Text: React.FC<ITextProps> = ({ children, innerHTML }) => {
  if (innerHTML !== undefined) {
    return (
      <S.Container
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(innerHTML),
        }}
      />
    )
  }

  return <S.Container>{children}</S.Container>
}

export default Text
