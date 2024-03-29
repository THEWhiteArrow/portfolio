import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../styles/CustomLink.css";
import { ReactComponent as ElipseSvg } from "../assets/svg/elipse.svg";
import { ReactComponent as Elipse2Svg } from "../assets/svg/elipse2.svg";
import { ReactComponent as Elipse3Svg } from "../assets/svg/elipse3.svg";
import { ReactComponent as Elipse4Svg } from "../assets/svg/elipse4.svg";

type MyProps = {
  to: string;
  className?: string;
  children?: any;
  variant?: "white" | "black";
  onClick?:
    | undefined
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
  type?: "link" | "button";
  elClassName?: string;
};

export default class CustomLink extends Component<MyProps> {
  render() {
    const r = Math.floor(Math.random() * 4) + 1;
    let elipse = null;
    let content = null;

    switch (r) {
      case 1:
        elipse = (
          <ElipseSvg className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        );
        break;
      case 2:
        elipse = (
          <Elipse2Svg className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        );
        break;
      case 3:
        elipse = (
          <Elipse3Svg className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        );
        break;
      case 4:
        elipse = (
          <Elipse4Svg className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        );
        break;
    }
    if (this.props.type === "button") {
      content = (
        <button className={`h-full ${this.props.elClassName}`}>
          {this.props.children}
        </button>
      );
    } else
      content = (
        <Link to={this.props.to} className={`h-full ${this.props.elClassName}`}>
          {this.props.children}
        </Link>
      );
    return (
      <div
        onClick={this.props.onClick}
        className={`${this.props.className} ${this.props.variant} relative custom-link cursor-pointer `}
      >
        {elipse}

        {content}
      </div>
    );
  }
}
