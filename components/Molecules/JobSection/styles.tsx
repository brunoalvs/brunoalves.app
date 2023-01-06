import styled from "styled-components"

export const Container = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);

  @media (min-width: 968px) {
    align-items: center;
    grid-template-columns: 1fr 1.2fr;
    grid-template-rows: 1fr;
    gap: 2rem 5rem;

    &:nth-child(even) > :not(article) {
      order: 1;
    }
  }
`

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 480px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 480px) and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Content = styled.article`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 2rem;
`
