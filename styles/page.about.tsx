import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1.5rem;

  > h1 {
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`
