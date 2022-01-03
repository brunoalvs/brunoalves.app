import styled from "styled-components"

export const Container = styled.li`
  a {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--secondary-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  &:nth-child(even) > :not(article) {
    order: 1;
  }

  img {
    object-fit: contain;
  }

  @media (min-width: 968px) {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 2rem 5rem;
  }
`

export const Content = styled.article`
  display: grid;
  gap: 2rem;
`
