import { useRouter } from "next/router"
import { createContext, FC, useEffect, useState } from "react"
import { INavigation, INavigationObject } from "../types/layout"

type LayoutContextType = {
  isLoading: boolean
  handleLoading: (isLoading: boolean) => void
  menuIsOpen: boolean
  toggleMenu: () => void
  darkMode: boolean
  toggleDarkMode: () => void
  language: "en" | "pt"
  navigation: INavigationObject[]
}

const defaultNavigation: INavigation = {
  en: {
    list: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Portfolio",
        url: "/portfolio",
      },
      {
        name: "About Me",
        url: "/about",
      },
      {
        name: "Skills",
        url: "/skills",
      },
      {
        name: "Get in Touch",
        url: "/contact",
      },
    ],
  },
  pt: {
    list: [
      {
        name: "Inicio",
        url: "/",
      },
      {
        name: "Portfólio",
        url: "/portfolio",
      },
      {
        name: "Sobre Mim",
        url: "/about",
      },
      {
        name: "Habilidades",
        url: "/skills",
      },
      {
        name: "Contato",
        url: "/contact",
      },
    ],
  },
}

export const LayoutContext = createContext<LayoutContextType>({
  isLoading: true,
  handleLoading: () => {},
  menuIsOpen: false,
  toggleMenu: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
  language: "en",
  navigation: defaultNavigation["en"].list,
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
  const { locale, pathname } = useRouter()
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

  const [navigation, setNavigation] = useState<INavigationObject[]>(
    defaultNavigation[language].list
  )

  useEffect(() => {
    setNavigation(defaultNavigation[language].list)
  }, [language, pathname])

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
        navigation,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
