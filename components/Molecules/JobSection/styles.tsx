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
`

export const Content = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  gap: 2rem;
`
