import { Component } from "react";
import "../styles/Title.css";
import Animation from "./Animation";

type MyProps = {
  content: string;
  colorType: "black" | "white";
  className?: string;
  animation?: boolean;
};

export default class Title extends Component<MyProps> {
  static defaultProps: MyProps = {
    content: "demo",
    colorType: "black",
    animation: true,
  };

  render() {
    const { content, colorType, className, animation } = this.props;
    console.log(animation);
    const h2 = (
      <h2
        className={`Title Title-${colorType} ${className} text-5xl sm:text-6xl md:text-85`}
      >
        {content.split("").map((letter, i) => (
          <span key={i} className={`Title-letter Title-letter-${colorType}`}>
            {letter}
          </span>
        ))}
      </h2>
    );
    const title = animation ? (
      <Animation name="flip-right">{h2}</Animation>
    ) : (
      h2
    );
    return <>{title}</>;
  }
}
