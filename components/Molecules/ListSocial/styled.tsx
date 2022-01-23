import styled from "styled-components"

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, max-content));
  gap: 2rem;
  list-style: none;
`

export const Item = styled.li`
  width: 100%;

  a {
    display: flex;
    align-items: center;

    > svg {
      width: 50px;
      height: 50px;
      transition: transform 0.2s ease-in-out;
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

    &:hover {
      > svg {
        transform: scale(1.1);
      }
    }
  }
`
