import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Vision from "./Vision";
import { GlobalState } from "../App";

import Aos from "aos";
import { Helmet } from "react-helmet";

type MyProps = GlobalState & {
  setNavigateBack: React.Dispatch<React.SetStateAction<boolean>>;
};

class MainPage extends Component<MyProps> {
  componentDidMount(): void {
    Aos.init();
    this.props.setNavigateBack(true);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Damian Trafiałek | Portfolio</title>
          <meta
            name="description"
            content="Step into Damian Trafiałek's World - a 20-year-old Technology Engineering Student hailing from Denmark. Unveil a realm of innovation, creativity, and tech expertise through captivating projects and skill showcases. Join me on this exciting journey of problem-solving and discovery. Let's connect and shape the future together!"
          />
          <meta
            name="keywords"
            content="portfolio damian trafialek trafiałek projects experience skills high professional"
          />
        </Helmet>
        <Hero />
        <Projects
          windowWidth={this.props.windowWidth}
          projectsDisplayed={this.props.projectsDisplayed}
          setProjectsDisplayed={this.props.setProjectsDisplayed}
        />
        <About />
        <Skills />
        <Vision />
        <Contact />
      </>
    );
  }
}

export default MainPage;
