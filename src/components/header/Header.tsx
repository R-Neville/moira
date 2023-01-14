import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import Image from "../shared/Image";
import LogoLightSrc from "../../assets/images/logo-light.svg";
import Hamburger from "./Hamburger";

export default function Header() {
  const { colors } = useThemeContext();

  const styles = useCallback(() => {
    return {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1em",
      width: "100%",
      margin: "0",
      backgroundColor: colors.bgAccent,
    } as React.CSSProperties;
  }, [colors]);

  return (
    <header style={styles()}>
      <Image src={LogoLightSrc} alt="Moira Logo" width="100px" />
      <Hamburger />
    </header>
  );
}
