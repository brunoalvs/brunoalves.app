import React, { Dispatch } from "react";

type ThemeContextType = {
  appTheme: "light" | "dark";
  updateTheme: Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  appTheme: "light",
  updateTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [appTheme, setAppTheme] = React.useState<"light" | "dark">("light");

  return (
    <ThemeContext.Provider
      value={{
        appTheme,
        updateTheme: setAppTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeApp = () => React.useContext(ThemeContext);
