import React, { useState } from "react";
import { Container } from "./styled";

const MenuButtonMobile: React.FC = ({}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container data-active={isActive} onClick={() => handleClick()}>
      <span />
      <span />
      <span />
    </Container>
  );
};

export default MenuButtonMobile;
