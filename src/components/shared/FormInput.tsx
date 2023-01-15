export interface FormInputProps {
  type: string;
  name: string;
  backgroundColor: string;
  color: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string;
}

export default function FormInput(props: FormInputProps) {
  return (
    <input
      style={{
        padding: "5px",
        height: "30px",
        width: "100%",
        border: "none",
        borderRadius: "3px",
        outline: "none",
        backgroundColor: props.backgroundColor,
        lineHeight: "30px",
        fontSize: "1em",
        color: props.color,
      }}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder || ""}
      value={props.value || ""}
      onChange={props.onChange}
    />
  );
}
