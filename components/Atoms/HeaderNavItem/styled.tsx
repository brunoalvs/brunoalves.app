import styled from "styled-components";

export const StyledLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  position: relative;

  > span {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    display: block;
    border-radius: 2px;
    background: var(--primary-color);
    transform: scaleX(0);
    transition: 0.2s ease-in;
    transform-origin: left;
  }

  &[data-active="true"] > span {
    background-color: var(--primary-color);
    transform: scaleX(1);
    transition-timing-function: ease-out;
  }

  &:hover > span {
    transform: scaleX(1);
    background-color: var(--primary-color);
    opacity: 0.5;
  }
`;
