import styled from "styled-components"

const Container = styled.ul`
  padding: 1.5rem 2.4rem;

  > li {
    font-size: 1.5rem;
    padding: 0.5rem 0;
  }
`

const List: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default List
