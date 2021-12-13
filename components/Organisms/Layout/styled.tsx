import styled from "styled-components";

export const Container = styled.main`
  background: var(--background-layout);
  color: var(--text-color);
`;

export const TopHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-topheader);
`;

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 150px);
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }
`;
