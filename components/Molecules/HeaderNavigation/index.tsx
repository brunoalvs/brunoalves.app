import { useContext, useEffect, useState } from "react"
import HeaderNavItem from "../../Atoms/HeaderNavItem"
import Logo from "../../Atoms/Logo"
import MenuButtonMobile from "../../Atoms/MenuButtonMobile"
import { LayoutContext } from "../../../contexts/layout"
import * as S from "./styles"

const HeaderNavigation = () => {
  const { menuIsOpen, navigation, toggleMenu } = useContext(LayoutContext)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(menuIsOpen)
  }, [menuIsOpen])

  return (
    <S.Container>
      <Logo />
      <MenuButtonMobile />
      <S.Navigation data-active={isOpen}>
        {navigation.map((menuItem, index) => (
          <HeaderNavItem onClick={toggleMenu} key={index} href={menuItem.url}>
            {menuItem.name}
          </HeaderNavItem>
        ))}
      </S.Navigation>
    </S.Container>
  )
}

export default HeaderNavigation
