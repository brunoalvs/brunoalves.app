import styled, { keyframes } from "styled-components"

const easeEffect = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: var(--background-layout);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    margin-top: 1rem;
    opacity: 0.2;
  }

  > svg {
    width: 300px;
    height: 300px;
    opacity: 0;
    animation: ${easeEffect} 0.5s alternate-reverse infinite;
  }
`
