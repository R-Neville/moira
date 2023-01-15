import { MouseEventHandler } from "react";

export interface FormAction {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FormActionsProps {
  actions: FormAction[];
  backgroundColor: string;
  color: string;
}

export default function FormActions(props: FormActionsProps) {
  const actionButtons = props.actions.map((action, i) => {
    return (
      <button
        key={i}
        style={{
          padding: "0.5em 1em",
          border: "none",
          borderRadius: "3px",
          margin: "0.5em",
          backgroundColor: props.backgroundColor,
          fontSize: "1em",
          color: props.color,
          cursor: "pointer",
        }}
        type={action.type}
        onClick={action.onClick}
      >
        {action.text}
      </button>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
      }}
    >
      {actionButtons}
    </div>
  );
}
