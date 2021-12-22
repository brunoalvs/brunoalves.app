import React, { Dispatch } from "react";

type ThemeContextType = {
  appTheme: null | "light" | "dark";
  updateTheme: Dispatch<React.SetStateAction<null | "light" | "dark">>;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  appTheme: "light",
  updateTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [appTheme, setAppTheme] = React.useState<null | "light" | "dark">(
    "light"
  );

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
