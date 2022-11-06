import * as S from './styles'

interface HeadingSubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const HeadingSubtitle: React.FC<HeadingSubtitleProps> = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>
}

export default HeadingSubtitle
