import styled from "styled-components"

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 2rem;
  list-style: none;
`

export const Item = styled.li`
  width: 100%;
  border-radius: 50%;

  a {
    display: flex;
    align-items: center;

    > svg {
      width: 50px;
      height: 50px;
      margin-right: 1rem;

      path {
        fill: var(--text-color);
      }
    }

    > span {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--text-color);
    }
  }
`
