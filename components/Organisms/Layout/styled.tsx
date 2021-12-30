import styled from "styled-components"

export const Container = styled.main`
  background: var(--background-layout);
  color: var(--text-color);
  overflow: auto;

  &[data-menu="true"] {
    overflow: hidden;
  }
`

export const TopHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-topheader);
  position: sticky;
  top: 0;
  z-index: 10;
`

export const Content = styled.section`
  width: 100%;
  min-height: calc(100vh - 150px);
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.2s;

  &[data-animation="fadeIn"] {
    opacity: 1;
  }

  &[data-animation="fadeOut"] {
    opacity: 0;
  }

  @media (min-width: 768px) {
    padding: 2rem 5rem;
  }
`
