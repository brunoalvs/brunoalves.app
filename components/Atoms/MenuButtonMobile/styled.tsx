import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 0;
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  > span {
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: var(--primary-color);

    &:nth-child(2) {
      transform: scaleX(0.8);
      transform-origin: right;
      transition: transform 0.2s ease-out;
    }
  }

  &:hover {
    > span:nth-child(2) {
      transform: scaleX(1);
      transition: transform 0.2s ease-in;
    }
  }

  &[data-active="true"] {
    position: relative;

    > span {
      width: calc(100% - 1.25rem);
      position: absolute;
      left: 0.625rem;
      top: calc(50% - 4px);
      transition: transform 0.2s ease-in;

      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
      }
    }

    > span:nth-child(2) {
      transform: scale(0);
      transition: transform 0.05s ease-out;
    }
  }

  @media (min-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;
