import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HeaderNavItem from "../../Atoms/HeaderNavItem";
import Logo from "../../Atoms/Logo";
import { Container, Navigation } from "./styled";

const HeaderNavigation: React.FC = () => {
  const { locale } = useRouter();
  const [language, setLanguage] = React.useState<"pt" | "en">("en");

  const navItems = {
    en: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Portfolio",
        href: "/portfolio",
      },
      {
        name: "About Me",
        href: "/about",
      },
      {
        name: "Skills",
        href: "/skills",
      },
      {
        name: "Get in Touch",
        href: "/contact",
      },
    ],
    pt: [
      {
        name: "Inicio",
        href: "/",
      },
      {
        name: "Portfólio",
        href: "/portfolio",
      },
      {
        name: "Sobre Mim",
        href: "/about",
      },
      {
        name: "Habilidades",
        href: "/skills",
      },
      {
        name: "Contato",
        href: "/contact",
      },
    ],
  };

  useEffect(() => {
    if (locale === "en") {
      setLanguage("en");
    } else {
      setLanguage("pt");
    }
  }, [locale]);

  return (
    <Container>
      <Logo />

      <Navigation>
        {navItems[language].map((item, index) => (
          <HeaderNavItem key={index} {...item}>
            {item.name}
          </HeaderNavItem>
        ))}
      </Navigation>
    </Container>
  );
};

export default HeaderNavigation;
