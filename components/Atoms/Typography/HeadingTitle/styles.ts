import styled from "styled-components"

export const Container = styled.h1`
  color: var(--text-color);
  font-size: 2.45rem;
  font-weight: 700;
  line-height: 100%;

  > strong {
    color: var(--primary-color);
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`
