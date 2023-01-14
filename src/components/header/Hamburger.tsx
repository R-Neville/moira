import { useCallback, useState } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import { dispatchToggleMenuActive } from "../../events/header";

export default function Hamburger() {
  const { colors } = useThemeContext();
  const [active, setActive] = useState(false);

  const styles = useCallback(() => {
    return {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "5px",
      width: "40px",
      height: "40px",
      borderRadius: "3px",
      backgroundColor: active ? colors.fgAccent : colors.bgAccent,
      cursor: "pointer",
    } as React.CSSProperties;
  }, [colors, active]);

  const lineStyles = useCallback(() => {
    return {
      width: "100%",
      height: "6px",
      backgroundColor: active ? colors.bgAccent : colors.fgAccent,
    } as React.CSSProperties;
  }, [colors, active]);

  const onClick = () => {
    dispatchToggleMenuActive(!active);
    setActive(!active);
  };

  return (
    <div style={styles()} onClick={onClick}>
      <div style={lineStyles()}></div>
      <div style={lineStyles()}></div>
      <div style={lineStyles()}></div>
    </div>
  );
}
