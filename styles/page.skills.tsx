import styled from "styled-components"

export const Container = styled.section`
  > .grid {
    display: grid;
    gap: 1rem;

    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`
