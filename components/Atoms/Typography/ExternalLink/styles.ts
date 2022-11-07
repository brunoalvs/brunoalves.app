import styled from "styled-components"

export const Container = styled("a")`
  color: var(--secondary-color);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
    text-decoration: underline;
  }
`
