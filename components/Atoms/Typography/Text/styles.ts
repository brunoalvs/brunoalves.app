import styled from "styled-components"

export const Container = styled.p`
  color: var(--text-color);
  font-size: 1.5rem;
  line-height: 160%;

  > a {
    color: var(--link-color);
    font-style: italic;
    transition: color 0.2s ease;
  }

  > a:hover {
    color: var(--link-color-hover);
  }
`
