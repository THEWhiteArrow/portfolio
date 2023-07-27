import "../styles/Title.css";
import Animation from "./Animation";

type Props = {
  content: string;
  colorType: "black" | "white";
  className?: string;
};
export default function Title(props: Props) {
  const { content, colorType, className } = props;
  return (
    <Animation name="flip-right">
      <h2 className={`Title Title-${colorType} ${className}`}>
        {content.split("").map((letter, i) => (
          <span key={i} className={`Title-letter Title-letter-${colorType}`}>
            {letter}
          </span>
        ))}
      </h2>
    </Animation>
  );
}
