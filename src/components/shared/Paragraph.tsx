export interface ParagraphProps {
  children: React.ReactNode;
  color: string;
}

export default function Paragraph(props: ParagraphProps) {
  return <p style={{ width: "100%", color: props.color }}>{props.children}</p>;
}
