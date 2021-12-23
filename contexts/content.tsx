import { createContext, FC, useState } from "react";

interface IContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
}

type ContentContextType = {
  content: {
    en: IContent;
    pt: IContent;
  };
};

export const ContentContext = createContext<ContentContextType>({
  content: {
    en: {
      meta: {
        title: "",
        description: "",
        keywords: [],
      },
    },
    pt: {
      meta: {
        title: "",
        description: "",
        keywords: [],
      },
    },
  },
});

export const ContentProvider: FC = ({ children }) => {
  const [content] = useState({
    en: {
      meta: {
        title: "",
        description: "",
        keywords: [],
      },
    },
    pt: {
      meta: {
        title: "",
        description: "",
        keywords: [],
      },
    },
  });

  return (
    <ContentContext.Provider
      value={{
        content,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};
