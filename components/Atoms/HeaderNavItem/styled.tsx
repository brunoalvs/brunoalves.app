import styled from "styled-components";

export const StyledLink = styled.a`
  font-size: 2rem;
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
    opacity: 0;
  }

  &[data-active="true"] > span {
    background-color: var(--primary-color);
    transform: scaleX(1);
    transition-timing-function: ease-out;
    opacity: 1;
  }

  &:hover > span {
    background-color: var(--primary-color);
    opacity: 1;
    transform: scaleX(1);
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
