import React from "react"
import { Container } from "./styled"

type Props = {
  handleClick?: () => void
}

export function ChevronsDown({
  handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  },
}: Props) {
  return (
    <Container
      onClick={handleClick}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.667 23.834 21.8 33l9.135-9.166M12.667 11l9.134 9.167L30.936 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Container>
  )
}
