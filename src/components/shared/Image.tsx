export interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height?: string;
}

export default function Image(props: ImageProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height || props.width}
    ></img>
  );
}
