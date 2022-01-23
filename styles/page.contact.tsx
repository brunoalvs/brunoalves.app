import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;

    > p {
      margin-bottom: 4rem;
    }
  }
`
