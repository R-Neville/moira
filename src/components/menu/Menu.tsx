import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import MenuLink from "./MenuLink";

export default function Menu() {
  const { colors } = useThemeContext();
  const location = useLocation();

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
        {location.pathname !== "/" && <MenuLink to="/">Home</MenuLink>}
        {location.pathname !== "/about" && <MenuLink to="/about">About</MenuLink>}
        {location.pathname !== "/faqs" && <MenuLink to="/faqs">FAQs</MenuLink>}
      </nav>
    </div>
  );
}
