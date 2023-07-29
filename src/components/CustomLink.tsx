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
  onClick?:
    | undefined
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
};

export default class CustomLink extends Component<MyProps> {
  render() {
    const r = Math.floor(Math.random() * 4) + 1;
    let elipse = null;
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

    return (
      <div
        onClick={this.props.onClick}
        className={`${this.props.className} relative custom-link cursor-pointer `}
      >
        {elipse}
        <Link to={this.props.to}>{this.props.children}</Link>
      </div>
    );
  }
}
