import React, { useContext } from "react"

import HeaderNavItem from "../../Atoms/HeaderNavItem"
import Logo from "../../Atoms/Logo"
import MenuButtonMobile from "../../Atoms/MenuButtonMobile"
import { LayoutContext } from "../../../contexts/layout"
import { INavigationObject } from "../../../types/layout"

import * as S from "./styles"

type Props = {
  navigation: INavigationObject[]
}

const HeaderNavigation: React.FC<Props> = ({ navigation }) => {
  const { menuIsOpen, toggleMenu } = useContext(LayoutContext)

  return (
    <S.Container>
      <Logo />
      <MenuButtonMobile />
      <S.Navigation data-active={menuIsOpen}>
        {navigation.map((item, index) => (
          <HeaderNavItem onClick={toggleMenu} key={index} href={item.url}>
            {item.name}
          </HeaderNavItem>
        ))}
      </S.Navigation>
    </S.Container>
  )
}

export default HeaderNavigation
