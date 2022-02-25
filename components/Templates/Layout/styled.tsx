import styled from "styled-components"

export const DevelopmentMode = styled.div<{
  isOpen: boolean
}>`
  display: flex;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.2rem 1rem;
  opacity: 0;
  transform: scaleX(0) translateX(100%);
  transform-origin: right;
  transition: transform 0.2s, opacity 0.4s;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 100;

  > button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    color: var(--text-color);
  }

  ${(props) =>
    props.isOpen &&
    `
    opacity: 1;
    transform: scaleX(1) translateX(0);
    transform-origin: right;
    transition: transform 5s, opacity 0.4s;
  `}

  p {
    font-size: 0.8rem;
  }
`

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
    padding: 2rem 5rem;
  }
`
