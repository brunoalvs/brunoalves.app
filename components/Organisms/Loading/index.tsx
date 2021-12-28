import { NextPage } from "next"
import { useContext } from "react"
import { Container } from "./styled"

import { LayoutContext } from "../../../contexts/layout"
import Logo from "../../Atoms/Logo"

const Loading: NextPage = () => {
  const { darkMode } = useContext(LayoutContext)

  return (
    <>
      <Container data-theme={darkMode ? "dark" : "light"}>
        <Logo />
      </Container>
    </>
  )
}

export default Loading
