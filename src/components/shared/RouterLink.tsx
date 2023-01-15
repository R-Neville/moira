import { Link } from "react-router-dom";

export interface RouterLinkProps {
  to: string;
  children?: React.ReactNode;
  color: string;
  backgroundColor: string;
}

export default function RouterLink(props: RouterLinkProps) {
  return (
    <Link
      style={{
        padding: "0.5em 1em",
        margin: "0.5em",
        borderRadius: "3px",
        backgroundColor: props.backgroundColor,
        color: props.color,
        textDecoration: "none",
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}
