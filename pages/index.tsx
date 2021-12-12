import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../components/Organisms/Layout";

const Home: NextPage = () => {
  const { locale } = useRouter();

  const [language, setLanguage] = useState<"en" | "pt">("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const getLanguage = () => {
    console.log("getLanguage", locale);
    if (locale === "pt-BR") {
      setLanguage("pt");
    } else if (locale === "en-US") {
      setLanguage("en");
    } else if (locale === "en") {
      setLanguage("en");
    } else if (locale === "pt") {
      setLanguage("pt");
    } else {
      setLanguage("en");
    }
  };

  const prefersColorScheme = async () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

    prefersDarkMode.addEventListener("change", (e) => {
      if (e.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    });

    if (prefersDarkMode.matches) {
      return setTheme("dark");
    } else {
      return setTheme("light");
    }
  };

  useEffect(() => {
    prefersColorScheme();
    getLanguage();
  }, [language]);

  return (
    <>
      <Head>
        <title>brunoalves.app {locale}</title>
      </Head>

      <Layout>
        <h1>Main Content {locale}</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,{" "}
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Google
          </a>{" "}
          voluptate aut consectetur, facilis, ad adipisci ea non veritatis
          fugiat accusantium natus laudantium! In omnis, quidem repellat eveniet
          iusto fugit incidunt.
        </p>
      </Layout>
    </>
  );
};

export default Home;
