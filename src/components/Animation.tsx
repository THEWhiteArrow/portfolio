/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

type MyProps = {
  name: string;
  anchor?: string;
  delay?: number;
  children: React.ReactNode;
  className?: string;
};
export default class Animation extends Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
  }

  componentDidUpdate(): void {
    Aos.refresh();
  }
  render() {
    console.log(this.props.name == "slide-left");
    const { name, delay, anchor, className } = this.props;
    return (
      <span
        data-aos={name}
        data-aos-delay={delay}
        data-aos-anchor-placement={anchor}
        className={`w-full h-full ${className}`}
      >
        {this.props.children}
      </span>
    );
  }
}
