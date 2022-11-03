import React, { useContext } from "react";
import * as S from "./styles";
import { LayoutContext } from "../../../contexts/layout";

const MenuButtonMobile: React.FC = ({ }) => {
  const { menuIsOpen, toggleMenu } = useContext(LayoutContext);

  const handleClick = () => {
    toggleMenu();
  };

  return (
    <S.Container
      aria-label="Open navigation menu"
      data-active={menuIsOpen}
      onClick={() => handleClick()}
    >
      <span />
      <span />
      <span />
    </S.Container>
  );
};

export default MenuButtonMobile;
