import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";

export default function Menu() {
  const { colors } = useThemeContext();

  const styles = useCallback(() => {
    return {
      display: "flex",
      flexDirection: "column",
      padding: "1em",
      backgroundColor: colors.bgAccent,
    } as React.CSSProperties;
  }, [colors]);

  return <div style={styles()}></div>;
}
