import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./styles.module.css";

interface ILayoutDefaultProps {
  theme: "light" | "dark";
  language: "en" | "pt";
}

const Layout: React.FC<ILayoutDefaultProps> = ({
  children,
  theme,
  language,
}) => {
  const dataContent = [
    {
      language: "en",
      btn_switch_theme_text: ["Turn On Day Mode", "Turn on Night Mode"],
    },
    {
      language: "pt",
      btn_switch_theme_text: ["Ligar Modo Diurno", "Ligar Modo Noturno"],
    },
  ];

  const { locale, pathname } = useRouter();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    console.log("language is: ", language);
    setContent(dataContent.find((item) => item.language === language));
  }, [language]);

  return (
    <main className={styles.container} data-theme={theme}>
      <header className={styles.topheader}>
        <button
          className={styles.switch_theme}
          onClick={() => console.log("switch theme")}
        >
          {theme === "dark"
            ? content?.btn_switch_theme_text[0]
            : content?.btn_switch_theme_text[1]}
        </button>
        <Link href={`${pathname}`} locale={locale === "en" ? "pt" : "en"}>
          <a>{language === "en" ? "English" : "Português"}</a>
        </Link>
      </header>
      <header>
        <h1>Logo</h1>
        <h2>NAV</h2>
      </header>
      <section>{children}</section>
    </main>
  );
};

export default Layout;
