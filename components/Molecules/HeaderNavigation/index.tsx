import axios from "axios"
import useSWR from "swr"
import React, { useContext, useEffect, useState } from "react"

import HeaderNavItem from "../../Atoms/HeaderNavItem"
import Logo from "../../Atoms/Logo"
import MenuButtonMobile from "../../Atoms/MenuButtonMobile"

import { Container, Navigation } from "./styled"
import { LayoutContext } from "../../../contexts/layout"
import { InavigationList } from "../../../languages/navigationObject"

const HeaderNavigation: React.FC = () => {
  const { menuIsOpen, language } = useContext(LayoutContext)

  const fetcher = async (url: string) =>
    await axios.get(url).then((res) => res.data)
  const { data, error } = useSWR("/api/navigation", fetcher)

  if (error) return <div>ERROR: Failed to load</div>

  if (!data) return <div>Loading...</div>

  return (
    <Container>
      <Logo />
      <MenuButtonMobile />
      <Navigation data-active={menuIsOpen}>
        {data[language].list.map((item: InavigationList, index: string) => (
          <HeaderNavItem key={index} href={item.url}>
            {item.name}
          </HeaderNavItem>
        ))}
      </Navigation>
    </Container>
  )
}

export default HeaderNavigation
