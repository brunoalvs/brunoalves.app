import styled from "styled-components";

export const Container = styled.header`
  border: 1px dashed slateblue;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.125rem;

  @media (min-width: 768px) {
    padding: 2rem 1.25rem;
  }
`;

export const Navigation = styled.nav`
  display: grid;

  a {
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
  }

  @media (min-width: 768px) {
    position: relative;
    grid-template-columns: repeat(5, max-content);
    gap: 1.875rem;
  }
`;
