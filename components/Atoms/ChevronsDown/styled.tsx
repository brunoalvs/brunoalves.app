import styled from "styled-components"

export const Container = styled.svg`
  cursor: pointer;

  width: 45px;
  height: 45px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }

  > path {
    stroke: var(--text-color);
  }
`
