import styled from "styled-components";

export const Container = styled.header`
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

  @media (min-width: 768px) {
    position: relative;
    grid-template-columns: repeat(5, max-content);
    gap: 1.875rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: calc(100vh - 50px);
    max-height: 100vh;
    background: var(--background-navmenu);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 50px;
    left: 0;

    transition: all 0.2s ease;

    > a {
      margin: 1rem 0;
    }

    &[data-active="true"] {
      opacity: 1;
      visibility: visible;
    }

    &[data-active="false"] {
      opacity: 0;
      visibility: hidden;
    }
  }
`;
