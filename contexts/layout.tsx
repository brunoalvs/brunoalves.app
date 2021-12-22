import { createContext, FC, useState } from "react";

type LayoutContextType = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

export const LayoutContext = createContext<LayoutContextType>({
  menuOpen: false,
  toggleMenu: () => {},
});

export const LayoutProvider: FC = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <LayoutContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </LayoutContext.Provider>
  );
};
