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
  padding: 0 .5rem;
  top: 0;
  z-index: 10;
`

export const Content = styled.section`
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
  opacity: 0;
  visibility: hidden;
  overflow-x: hidden;

  &[data-animation="fadeIn"] {
    opacity: 1;
    transition: opacity ease 1s, transform ease 0.5s;
    transition-delay: 0.05s;
    visibility: visible;
  }

  &[data-animation="fadeOut"] {
    opacity: 0;
    transition: opacity 0.1s;
  }

  @media (min-width: 768px) {
    padding: 2rem 2rem;
  }
`
