import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import Paragraph from "../shared/Paragraph";
import Section from "../shared/Section";

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
          Moira is a task tracking application that can be used to help keep on
          top of pretty much any type of project.
        </Paragraph>
      </Section>
    </div>
  );
}
