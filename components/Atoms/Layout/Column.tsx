import styled from "styled-components"

const Container = styled.div`
  border: 1px dashed hotpink;
`

const Column: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default Column
