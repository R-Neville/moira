export interface FieldSetProps {
  children: React.ReactNode;
  labelText: string;
  color: string;
  backgroundColor: string;
}

export default function FieldSet(props: FieldSetProps) {
  return (
    <fieldset
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1em",
        border: "none",
        borderRadius: "3px",
        margin: "0",
        marginBottom: "1em",
        backgroundColor: props.backgroundColor,
      }}
    >
      <label
        style={{ marginBottom: "0.5em", fontSize: "1em", color: props.color }}
      >
        {props.labelText}
      </label>
      {props.children}
    </fieldset>
  );
}
