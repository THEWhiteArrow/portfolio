import { Component } from "react";
import { ReactComponent as FaceSvg } from "../assets/svg/face.svg";
import "../styles/Hero.css";
import CustomLink from "./CustomLink";
import Animation from "./Animation";

export default class Hero extends Component {
  render() {
    return (
      <section
        id="hero"
        className="Hero min-h-screen h-full flex items-center "
      >
        <div className="h-full  container grow flex flex-col md:flex-row py-8 relative">
          <div className="h-full text-2xl lg:w-7/12 flex flex-col justify-center content-center">
            <Animation name="slide-down" delay={75}>
              <h1 className="text-8xl">
                <span className="animate">Hello</span>
                <span className="animate">, </span>
                <br />
                <span className="animate">my </span>
                <span className="animate">name </span>
                <span className="animate">is </span>
                <span className="animate">Damian</span>
              </h1>
            </Animation>

            <Animation name="slide-right" delay={50}>
              <p className="text-justify lg:pr-20 mt-20">
                Welcome to my digital realm!
                <br />
                I'm a 20-year-old Software Technology Engineering Student,
                fueled by an insatiable curiosity and passion for the world of
                programming. As a tech enthusiast, I find solace in crafting
                elegant and efficient code, transforming ideas into reality, and
                constantly pushing the boundaries of what's possible.
              </p>
            </Animation>

            <div className="mt-10 mb-5 flex flex-col sm:flex-row justify-between lg:pr-20 text-center">
              <Animation name="fade-up" delay={100}>
                <CustomLink
                  className="p-4 mt-4 lg:mt-0 animation-delay-1"
                  to="/#about"
                >
                  About
                </CustomLink>
              </Animation>
              <Animation name="fade-up" delay={200}>
                <CustomLink
                  className="p-4 mt-4 lg:mt-0 animation-delay-2"
                  to="/#projects"
                >
                  Projects
                </CustomLink>
              </Animation>
              <Animation name="fade-up" delay={300}>
                <CustomLink
                  className="p-4 mt-4 lg:mt-0 animation-delay-3"
                  to="/#skills"
                >
                  Skills
                </CustomLink>
              </Animation>
              <Animation name="fade-up" delay={400}>
                <CustomLink
                  className="p-4 mt-4 lg:mt-0 animation-delay-4"
                  to="/#vision"
                >
                  Vision
                </CustomLink>
              </Animation>
              <Animation name="fade-up" delay={500}>
                <CustomLink
                  className="p-4 mt-4 lg:mt-0 animation-delay-5"
                  to="/#contact"
                >
                  Contact
                </CustomLink>
              </Animation>
            </div>
          </div>

          <div className="w-full h-full hidden lg:block lg:w-5/12 self-center justify-self-center">
            <Animation name="fade" delay={50}>
              <FaceSvg width="100%" className="animateFace" />
            </Animation>
          </div>
        </div>
      </section>
    );
  }
}
