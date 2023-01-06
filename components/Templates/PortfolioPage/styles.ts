import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  gap: 1.5rem;
  position: relative;

  @media (min-width: 768px) {
    gap: 3rem;
  }

  @media (min-width: 1024px) {
    gap: 5rem;
  }
`
