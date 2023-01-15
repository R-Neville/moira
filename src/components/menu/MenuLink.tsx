import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context-providers/ThemeProvider";

export interface MenuProps {
  to: string;
  children: React.ReactNode;
}

export default function MenuLink(props: MenuProps) {
  const { colors } = useThemeContext();
  
  const styles = useCallback(() => {
    return {
      padding: "0.5em 1em",
      fontSize: "1em",
      textDecoration: "none",
      color: colors.fgAccent,
    } as React.CSSProperties;
  }, [colors])

  return (
    <Link to={props.to} style={styles()}>
      {props.children}
    </Link>
  );
}
