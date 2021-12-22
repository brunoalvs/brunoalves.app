import { createContext, FC, useState } from "react";

type LayoutContextType = {
  menuIsOpen: boolean;
  toggleMenu: () => void;
};

export const LayoutContext = createContext<LayoutContextType>({
  menuIsOpen: false,
  toggleMenu: () => {},
});

export const LayoutProvider: FC = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <LayoutContext.Provider value={{ menuIsOpen, toggleMenu }}>
      {children}
    </LayoutContext.Provider>
  );
};
