import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > p {
      margin: 2rem 0;
    }

    @media (max-width: 768px) {
      > h2 {
        margin-top: 1rem;
      }
    }

    @media (min-width: 768px) {
      gap: 1rem;

      > p {
        margin-top: 1rem;
        margin-bottom: 4rem;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
`
