import styled from "styled-components"

export const Container = styled.section`
  display: grid;

  > article {
    max-width: 625px;
    display: grid;
    grid-template-rows: 1fr 0.5fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 2rem;
    padding: 2rem 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1.7fr 1fr;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
    gap: 5rem;
  }
`
