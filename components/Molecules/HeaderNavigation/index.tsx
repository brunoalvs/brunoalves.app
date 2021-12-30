import React, { useContext } from "react"

import HeaderNavItem from "../../Atoms/HeaderNavItem"
import Logo from "../../Atoms/Logo"
import MenuButtonMobile from "../../Atoms/MenuButtonMobile"

import { Container, Navigation } from "./styled"
import { LayoutContext } from "../../../contexts/layout"
import { INavigationObject } from "../../../types/layout"

type Props = {
  navigation: INavigationObject[]
}

const HeaderNavigation: React.FC<Props> = ({ navigation }) => {
  const { menuIsOpen, toggleMenu } = useContext(LayoutContext)

  return (
    <Container>
      <Logo />
      <MenuButtonMobile />
      <Navigation data-active={menuIsOpen}>
        {navigation.map((item, index) => (
          <HeaderNavItem onClick={toggleMenu} key={index} href={item.url}>
            {item.name}
          </HeaderNavItem>
        ))}
      </Navigation>
    </Container>
  )
}

export default HeaderNavigation
