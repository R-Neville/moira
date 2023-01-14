import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";

export interface SectionProps {
  heading?: string;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  const { colors } = useThemeContext();

  const styles = useCallback(() => {
    return {
      padding: "1em",
      width: "100%",
      maxWidth: "600px",
      borderRadius: "3px",
      margin: "0 auto",
      backgroundColor: colors.bgSecondary,
    } as React.CSSProperties;
  }, [colors]);

  return (
    <section style={styles()}>
      {props.heading && (
        <h2
          style={{
            color: colors.fgPrimary,
          }}
        >
          {props.heading}
        </h2>
      )}
      {props.children}
    </section>
  );
}
