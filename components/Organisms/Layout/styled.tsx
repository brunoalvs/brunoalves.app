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
  border: 1px dashed orange;

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const Content = styled.section`
  width: 100%;
  height: calc(100vh - 110px);

  @media (min-width: 768px) {
    height: calc(100vh - 150px);
  }
`;
