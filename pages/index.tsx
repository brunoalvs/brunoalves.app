import type { NextPage } from "next";

import Layout from "../components/Organisms/Layout";
import Subtitle from "../components/Atoms/Typography/HeadingSubtitle";
import HeadingTitle from "../components/Atoms/Typography/HeadingTitle";
import Text from "../components/Atoms/Typography/Text";

import { LayoutContext } from "../contexts/layout";
import { useContext } from "react";

const Home: NextPage = () => {
  const { language } = useContext(LayoutContext);

  return (
    <>
      <Layout title="Home | Bruno Alves - Desenvolvedor Front End">
        <HeadingTitle>Main Page {language}</HeadingTitle>
        <Subtitle>This is the main page</Subtitle>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,{" "}
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Google
          </a>{" "}
          voluptate aut consectetur, facilis, ad adipisci ea non veritatis
          fugiat accusantium natus laudantium! In omnis, quidem repellat eveniet
          iusto fugit incidunt.
        </Text>
      </Layout>
    </>
  );
};

export default Home;
