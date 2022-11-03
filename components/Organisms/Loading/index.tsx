import { NextPage } from "next"
import { useContext } from "react"
import * as S from "./styles"
import Logo from "../../Atoms/Logo"
import { LayoutContext } from "../../../contexts/layout"

const Loading: NextPage = () => {
  const { darkMode } = useContext(LayoutContext)

  return (
    <>
      <S.Container data-theme={darkMode ? "dark" : "light"}>
        <Logo />
      </S.Container>
    </>
  )
}

export default Loading
