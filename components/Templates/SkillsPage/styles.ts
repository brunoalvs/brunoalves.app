import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 1.5rem;



  @media (min-width: 768px) {
    gap: 4rem;
  }
`

export const Grid = styled.article`
  display: grid;
  gap: 4rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  padding-bottom: 1rem;
`;

export const List = styled.ul`
  display: grid;
  gap: 0.75rem;
  margin-left: 1rem;

  li {
    font-size: 1.5rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
