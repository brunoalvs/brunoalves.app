import styled from "styled-components";

export const Container = styled.button`
  border: 1px dashed hotpink;

  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: transparent;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > span {
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: var(--primary-color);
  }

  @media (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;
