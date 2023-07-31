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
  once?: boolean;
};
export default class Animation extends Component<MyProps> {
  constructor(props: MyProps) {
    super(props);
  }

  componentDidUpdate(): void {
    Aos.refresh();
  }
  render() {
    const { name, delay, anchor, className,once } = this.props;
    return (
      <span
        data-aos={name}
        data-aos-delay={delay}
        data-aos-anchor={anchor}
        data-aos-once={once}
        className={`w-full h-full ${className}`}
      >
        {this.props.children}
      </span>
    );
  }
}
