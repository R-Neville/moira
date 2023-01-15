import { useCallback } from "react";
import { useThemeContext } from "../../context-providers/ThemeProvider";

export interface FormErrorProps {
  message: string;
}

export default function FormError(props: FormErrorProps) {
  const { colors } = useThemeContext();

  const styles = useCallback(() => {
    return {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1em",
      width: "100%",
      border: `1px solid ${colors.fgError}`,
      borderRadius: "3px",
      marginBottom: "1em",
      backgroundColor: colors.bgError,
      textAlign: "center",
      color: colors.fgError,
    } as React.CSSProperties;
  }, [colors])
  
  return (
    <div
      style={styles()}
    >
      {props.message}
    </div>
  );
}
