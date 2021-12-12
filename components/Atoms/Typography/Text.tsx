import React from "react";
import styled from "styled-components";

const Container = styled.p`
  color: var(--text-color);
  font-size: 1.5rem;
  line-height: 150%;
`;

const Text: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Text;
