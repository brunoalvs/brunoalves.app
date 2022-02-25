import styled from "styled-components"

export const Container = styled.div`
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > p {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    @media (min-width: 768px) {
      gap: 1rem;

      > p {
        margin-top: 1rem;
        margin-bottom: 4rem;
      }
    }
  }
`
