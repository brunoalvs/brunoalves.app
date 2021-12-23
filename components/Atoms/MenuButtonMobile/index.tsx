import React, { useState, useContext } from "react";
import { Container } from "./styled";

import { LayoutContext } from "../../../contexts/layout";

const MenuButtonMobile: React.FC = ({}) => {
  const { menuIsOpen, toggleMenu } = useContext(LayoutContext);

  const handleClick = () => {
    toggleMenu();
  };

  return (
    <Container
      aria-label="Open navigation menu"
      data-active={menuIsOpen}
      onClick={() => handleClick()}
    >
      <span />
      <span />
      <span />
    </Container>
  );
};

export default MenuButtonMobile;
