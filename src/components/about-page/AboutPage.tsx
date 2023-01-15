import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import Paragraph from "../shared/Paragraph";
import Section from "../shared/Section";

export default function AboutPage() {
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
  }, []);

  return (
    <div style={styles()}>
      <Section heading="About Moira">
        <Paragraph color={colors.fgPrimary}>
          Info goes here...
        </Paragraph>
      </Section>
    </div>
  );
}
