import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import Paragraph from "../shared/Paragraph";
import Section from "../shared/Section";
import RouterLink from "../shared/RouterLink";

export default function HomePage() {
  const { colors } = useThemeContext();

  const styles = useCallback(() => {
    return {
      flexGrow: "1",
      display: "flex",
      flexDirection: "column",
      padding: "1em",
      width: "100%",
      backgroundColor: colors.bgPrimary,
    } as React.CSSProperties;
  }, [colors]);

  return (
    <div style={styles()}>
      <Section heading="Keep on top of it all">
        <Paragraph color={colors.fgSecondary}>
          Moira is a task tracking application that can be used to help organise
          pretty much any type of undertaking that is divisible into a set of
          sub-tasks.
        </Paragraph>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <RouterLink
            to="/register"
            backgroundColor={colors.bgAccent}
            color={colors.fgAccent}
          >
            Register
          </RouterLink>
          <RouterLink
            to="/login"
            backgroundColor={colors.bgAccent}
            color={colors.fgAccent}
          >
            Login
          </RouterLink>
        </div>
      </Section>
    </div>
  );
}
