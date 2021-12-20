import React, { Dispatch } from "react";

type ThemeContextType = {
  appTheme: null | "light" | "dark";
  updateTheme: Dispatch<React.SetStateAction<null | "light" | "dark">>;
};

const ThemeContext = React.createContext<ThemeContextType>({
  appTheme: "light",
  updateTheme: () => {},
});

export default ThemeContext;

export const useThemeApp = () => React.useContext(ThemeContext);
