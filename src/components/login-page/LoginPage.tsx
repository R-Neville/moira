import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import { FieldState } from "../../shared-interfaces/FieldState";
import FormActions, { FormAction } from "../shared/FormActions";
import FieldSet from "../shared/FieldSet";
import FormInput from "../shared/FormInput";
import Section from "../shared/Section";
import Paragraph from "../shared/Paragraph";

type InputName = "username" | "password";

export interface LoginFormState {
  username: FieldState;
  password: FieldState;
}

export default function LoginPage() {
  const { colors } = useThemeContext();
  const [formState, setFormState] = useState<LoginFormState>({
    username: {
      value: "",
      valid: true,
    },
    password: {
      value: "",
      valid: true,
    },
  });

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

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.value.length === 0) {
      setFormState({
        ...formState,
        [inputElement.name]: { ...[inputElement.name], valid: false },
      });
      return;
    }

    setFormState({
      ...formState,
      [inputElement.name]: { value: inputElement.value, valid: true },
    });
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const actions = [
    {
      text: "Clear",
      type: "reset",
      onClick: () => {
        setFormState({
          username: { value: "", valid: true },
          password: { value: "", valid: true },
        });
      },
    },
    {
      text: "Submit",
      type: "submit",
    },
  ] as FormAction[];

  return (
    <div style={styles()}>
      <Section heading="Login">
        <form onSubmit={onSubmit}>
          <FieldSet
            labelText="Username"
            color={colors.fgAccent}
            backgroundColor={colors.bgAccent}
          >
            <FormInput
              key="username"
              type="text"
              name="username"
              backgroundColor={
                formState.username.valid ? colors.fgAccent : colors.bgError
              }
              color={
                formState.username.valid ? colors.bgAccent : colors.fgError
              }
              onChange={onChange}
              value={formState.username.value}
            />
          </FieldSet>
          <FieldSet
            labelText="Password"
            color={colors.fgAccent}
            backgroundColor={colors.bgAccent}
          >
            <FormInput
              key="password"
              type="password"
              name="password"
              backgroundColor={
                formState.password.valid ? colors.fgAccent : colors.bgError
              }
              color={
                formState.password.valid ? colors.bgAccent : colors.fgError
              }
              onChange={onChange}
              value={formState.password.value}
            />
          </FieldSet>
          <FormActions
            actions={actions}
            backgroundColor={colors.bgAccent}
            color={colors.fgAccent}
          />
          <Paragraph color={colors.fgPrimary}>Don't have an account?</Paragraph>
          <Link to="/register" style={{ color: colors.fgAccent }}>
            Register here
          </Link>
        </form>
      </Section>
    </div>
  );
}
