import styled from "styled-components"

export const Container = styled.section`
  width: 80vw;
  max-width: 450px;
  height: 80vw;
  max-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  @media (max-width: 768px) {
    justify-self: center;
  }

  @media (min-width: 768px) {
    width: 30vw;
    height: 30vw;
  }

  @media (min-width: 1024px) {
    max-width: 350px;
    max-height: 350px;
    transform: translateX(30%);
  }

  background: #8368ee;

  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #6a5acd;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.95);

    > div {
      background: #483d8b;
      transform: scale(0.95);

      img {
        border-radius: 50%;
        transform: scale(0.95);
      }
    }
  }
`
