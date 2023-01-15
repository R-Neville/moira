import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import { FieldState } from "../../shared-interfaces/FieldState";
import FormActions, { FormAction } from "../shared/FormActions";
import FieldSet from "../shared/FieldSet";
import FormInput from "../shared/FormInput";
import Section from "../shared/Section";
import Paragraph from "../shared/Paragraph";

type InputName = "username" | "password" | "password_confirmation";

export interface RegisterFormState {
  username: FieldState;
  password: FieldState;
  password_confirmation: FieldState;
}

export default function RegisterPage() {
  const { colors } = useThemeContext();
  const [formState, setFormState] = useState<RegisterFormState>({
    username: {
      value: "",
      valid: true,
    },
    password: {
      value: "",
      valid: true,
    },
    password_confirmation: {
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
          password_confirmation: { value: "", valid: true },
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
      <Section heading="Register">
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
          <FieldSet
            labelText="Password Confirmation"
            color={colors.fgAccent}
            backgroundColor={colors.bgAccent}
          >
            <FormInput
              key="password_confirmation"
              type="password"
              name="password_confirmation"
              backgroundColor={
                formState.password_confirmation.valid ? colors.fgAccent : colors.bgError
              }
              color={
                formState.password_confirmation.valid ? colors.bgAccent : colors.fgError
              }
              onChange={onChange}
              value={formState.password_confirmation.value}
            />
          </FieldSet>
          <FormActions
            actions={actions}
            backgroundColor={colors.bgAccent}
            color={colors.fgAccent}
          />
          <Paragraph color={colors.fgPrimary}>
            Already have an account?
          </Paragraph>
          <Link to="/login" style={{ color: colors.fgAccent }}>
            Login here
          </Link>
        </form>
      </Section>
    </div>
  );
}
