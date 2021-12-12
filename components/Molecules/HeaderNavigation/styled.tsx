import styled from "styled-components";

export const Container = styled.header`
  border: 1px dashed slateblue;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 1.125rem;

  @media (min-width: 768px) {
    height: 100px;
    justify-content: space-between;
    padding: 2rem 1.25rem;
  }
`;

export const Navigation = styled.nav`
  display: grid;

  a {
    color: var(--text-color);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, max-content);
    gap: 1.875rem;
  }
`;
