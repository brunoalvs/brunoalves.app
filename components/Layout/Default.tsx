import React from "react";
import styles from "./Default.module.css";

interface ILayoutDefaultProps {
  theme: "light" | "dark";
}

const LayoutDefault: React.FC<ILayoutDefaultProps> = ({ children, theme }) => {
  return (
    <main className={styles.container} data-theme={theme}>
      <header>
        <h1>Logo</h1>
        <h2>NAV</h2>
      </header>
      <section>{children}</section>
    </main>
  );
};

export default LayoutDefault;
