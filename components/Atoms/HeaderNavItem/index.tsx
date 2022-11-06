import React from "react"
import { useRouter } from "next/router"
import * as S from "./styles"

const HeaderNavItem: React.FC<{
  href: string
  children: React.ReactNode
  onClick?: () => void
}> = ({ href, children, onClick }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <S.Link
      href={href}
      data-active={isActive}
      onClick={onClick}
      locale={router.locale}
    >
      {children}
      <span />
    </S.Link>
  )
}

export default HeaderNavItem
