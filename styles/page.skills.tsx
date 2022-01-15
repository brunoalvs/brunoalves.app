import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1.5rem;

  > h1 {
    margin-bottom: 1rem;
  }

  > .grid {
    display: grid;
    gap: 1rem;

    ul {
      margin-left: 2rem;
      padding: 2rem 0;
    }

    ul li {
      font-size: 1.3rem;
      padding: 0.65rem 0;
    }

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;

      ul li {
        font-size: 1.6rem;
      }
    }
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`
