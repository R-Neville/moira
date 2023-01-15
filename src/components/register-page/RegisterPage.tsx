import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context-providers/ThemeProvider";
import { FieldState } from "../../shared-interfaces/FieldState";
import FormActions, { FormAction } from "../shared/FormActions";
import FieldSet from "../shared/FieldSet";
import FormError from "../shared/FormError";
import FormInput from "../shared/FormInput";
import Section from "../shared/Section";
import Paragraph from "../shared/Paragraph";

type InputName = "username" | "password" | "password_confirmation";

export interface RegisterFormState {
  error: string;
  username: FieldState;
  password: FieldState;
  password_confirmation: FieldState;
}

export default function RegisterPage() {
  const { colors } = useThemeContext();
  const [formState, setFormState] = useState<RegisterFormState>({
    error: "",
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
    }

    setFormState({
      ...formState,
      error: "",
      [inputElement.name]: { value: inputElement.value, valid: true },
    });
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const inputs = Array.from(form.querySelectorAll("input"));

    for (let input of inputs) {
      if (input.value.length === 0) {
        setFormState({
          ...formState,
          error: "One or more required fields are empty.",
          [input.name]: { ...[input.name], valid: false },
        });
        return;
      }
    }

    const passwordInputs = inputs.filter((input) => {
      return input.name.includes("password");
    });

    const passwordSet = new Set(...passwordInputs.map((input) => input.value));

    if (passwordSet.size > 1) {
      setFormState({...formState, error: "Passwords don't match."});
      return;
    }
  };

  const actions = [
    {
      text: "Clear",
      type: "reset",
      onClick: () => {
        setFormState({
          error: "",
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
          {formState.error && <FormError message={formState.error} />}
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
              placeholder={formState.username.valid ? "" : "Required"}
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
              placeholder={formState.password.valid ? "" : "Required"}
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
                formState.password_confirmation.valid
                  ? colors.fgAccent
                  : colors.bgError
              }
              color={
                formState.password_confirmation.valid
                  ? colors.bgAccent
                  : colors.fgError
              }
              onChange={onChange}
              value={formState.password_confirmation.value}
              placeholder={
                formState.password_confirmation.valid ? "" : "Required"
              }
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
