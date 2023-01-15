import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import MenuLink from "./MenuLink";

export default function Menu() {
  const { colors } = useThemeContext();

  const styles = useCallback(() => {
    return {
      display: "flex",
      flexDirection: "column",
      padding: "0 1em 1em 1em",
      backgroundColor: colors.bgAccent,
    } as React.CSSProperties;
  }, [colors]);

  return (
    <div style={styles()}>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {window.location.href !== "/" && <MenuLink to="/">Home</MenuLink>}
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/faqs">FAQs</MenuLink>
      </nav>
    </div>
  );
}
