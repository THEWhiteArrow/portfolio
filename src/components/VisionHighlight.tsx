import React, { Component, PropsWithChildren } from "react";
import Animation from "./Animation";

export default class VisionHighlight extends Component<PropsWithChildren> {
  render() {
    const animations = ["flip-up", "flip-down", "flip-left", "flip-right"];
    const rAnimation =
      animations[Math.floor(Math.random() * animations.length)];

    return (
      <Animation name={rAnimation} className="highlight inline-block  w-min">
        {this.props.children}
      </Animation>
    );
  }
}
