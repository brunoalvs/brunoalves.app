import styled from "styled-components"

export const Container = styled.section`
  width: 80vw;
  height: 80vw;
  border: 1px dashed hotpink;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  @media (max-width: 768px) {
    justify-self: center;
  }

  @media (min-width: 768px) {
    width: 30vw;
    height: 30vw;
  }

  @media (min-width: 1024px) {
    max-width: 350px;
    max-height: 350px;
    transform: translateX(50%);
  }
`
