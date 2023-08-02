import { Component } from "react";
import { data } from "../scripts/projectData";
import ProjectTile from "./ProjectTile";
import Title from "./Title";
import CustomLink from "./CustomLink";
import "../styles/Projects.css";

import { GlobalState } from "../App";

type MyState = {
  projectsInLine: number;
  projectsDisplayed: number;
};

export default class Projects extends Component<GlobalState, MyState> {
  handleClickMore = (e: any) => {
    e.preventDefault();
    this.props.manageProjects(1);
  };
  handleClickLess = (e: any) => {
    e.preventDefault();
    this.props.manageProjects(-1);
  };

  render() {
    const { inLine, displayed } = this.props.projects;
    let readMore = null;

    if (displayed < data.length || true) {
      readMore = (
        <div className="relative">
          <div className="Projects-projects mb-10 flex flex-row flex-wrap justify-evenly">
            {data.slice(displayed, displayed + inLine).map((project, i) => (
              <ProjectTile key={i} {...project} shorten={true} />
            ))}
          </div>

          <div className="absolute w-full h-full top-0 left-0 fadeLikeMedium flex justify-center text-xl">
            {displayed !== inLine && (
              <CustomLink
                to=""
                type="button"
                className="mt-auto mb-3 mx-2 animate-none w-fit p-4 stroke-white self-center"
                onClick={this.handleClickLess}
              >
                See less
              </CustomLink>
            )}
            {displayed < data.length && (
              <CustomLink
                to=""
                type="button"
                className="mt-auto mb-3 mx-2 animate-none w-fit p-4 stroke-white self-center"
                onClick={this.handleClickMore}
              >
                See MORE!
              </CustomLink>
            )}
          </div>
        </div>
      );
    }

    return (
      <section
        id="projects"
        className="Projects min-h-screen h-full flex flex-col bg-black text-white"
      >
        <div className="container flex flex-col py-8 relative">
          <Title content="Projects" colorType="white" />

          <div className="Projects-projects mb-10 flex flex-row flex-wrap justify-evenly">
            {data.slice(0, displayed).map((project, i) => (
              <ProjectTile key={i} {...project} shorten={false} />
            ))}
          </div>
          {readMore}
        </div>
      </section>
    );
  }
}
