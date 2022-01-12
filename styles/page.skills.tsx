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
      list-style: none;
      padding: 1rem 0;
    }

    ul li {
      border: 1px dashed tomato;
      font-size: 1.3rem;
      padding: 0.5rem 0;
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
