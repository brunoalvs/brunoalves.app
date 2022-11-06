import * as S from './styles'

interface IListProps {
  children: React.ReactNode
}

const List = ({ children }: IListProps) => {
  return <S.Container>{children}</S.Container>
}

export default List
