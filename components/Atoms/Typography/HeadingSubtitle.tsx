import React from "react";
import styled from "styled-components";

const Container = styled.h2`
  color: var(--secondary-color);
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 160%;
`;

const Subtitle: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Subtitle;
