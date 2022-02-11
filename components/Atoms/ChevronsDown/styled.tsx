import styled from "styled-components"

export const Container = styled.svg`
  cursor: pointer;
  border: 1px dashed white;

  width: 45px;
  height: 45px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`
