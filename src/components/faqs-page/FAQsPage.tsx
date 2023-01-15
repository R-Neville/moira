import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import Paragraph from "../shared/Paragraph";
import Section from "../shared/Section";

export default function FAQsPage() {
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
      <Section heading="FAQs">
        <Paragraph color={colors.fgPrimary}>
          I've included some answers to frequently asked questions below (some
          of them may not have been asked aleady, but I anticipate that they
          will be at some point!):
        </Paragraph>
      </Section>
    </div>
  );
}
