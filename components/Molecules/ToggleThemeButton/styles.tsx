import styled from "styled-components";
import Image from "next/image";

export const Container = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: grid;
  align-items: center;
  grid-template-columns: 32px 1fr;
`;

export const Icon = styled(Image)`
  /* border: 1px dashed yellow; */
`;

export const Label = styled.span`
  max-width: 4.7rem;
  color: var(--text-color);
  font-size: 0.8rem;
  opacity: 0.5;
  text-align: left;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 1;
  }
`;
