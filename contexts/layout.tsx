import { useRouter } from "next/router"
import { createContext, FC, useEffect, useState } from "react"

type LayoutContextType = {
  isLoading: boolean
  handleLoading: (isLoading: boolean) => void
  menuIsOpen: boolean
  toggleMenu: () => void
  darkMode: boolean
  toggleDarkMode: () => void
  language: "en" | "pt"
}

export const LayoutContext = createContext<LayoutContextType>({
  isLoading: true,
  handleLoading: () => {},
  menuIsOpen: false,
  toggleMenu: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
  language: "en",
})

export const LayoutProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)
  const [darkMode, setDarkMode] = useState(false)

  const handleLoading = (isLoading: boolean) => setIsLoading(isLoading)

  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem("darkMode", "false")
    } else {
      localStorage.setItem("darkMode", "true")
    }

    setDarkMode(!darkMode)
  }
  const { locale } = useRouter()
  const [language, setLanguage] = useState<"en" | "pt">("en")

  const getLanguage = () => {
    if (locale === "pt") {
      setLanguage("pt")
    } else {
      setLanguage("en")
    }
  }

  useEffect(() => {
    getLanguage()
  }, [language, locale])

  const prefersColorScheme = async () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    const checkDarkMode = localStorage.getItem("darkMode")

    if (
      (prefersDarkMode.matches && checkDarkMode === null) ||
      checkDarkMode === "true"
    ) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }

    prefersDarkMode.addEventListener("change", (e) => {
      if (e.matches) {
        setDarkMode(true)
        localStorage.setItem("darkMode", "true")
      } else {
        setDarkMode(false)
        localStorage.setItem("darkMode", "false")
      }
    })
  }

  useEffect(() => {
    prefersColorScheme()
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        isLoading,
        handleLoading,
        menuIsOpen,
        toggleMenu,
        darkMode,
        toggleDarkMode,
        language,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
