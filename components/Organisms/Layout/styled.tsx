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
export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 1.125rem;
  border: 1px dashed orange;

  @media (min-width: 768px) {
    height: 100px;
    padding: 2rem 1.25rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 110px);

  @media (min-width: 768px) {
    height: calc(100vh - 150px);
  }
`;
