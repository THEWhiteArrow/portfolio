import { Component } from "react";
import { data } from "../scripts/projectData";
import ProjectTile from "./ProjectTile";
import Title from "./Title";
import CustomLink from "./CustomLink";
import "../styles/Projects.css";

import { GlobalState } from "../App";

type MyState = {
  projectsInLine: number;
};

export default class Projects extends Component<GlobalState, MyState> {
  constructor(props: GlobalState) {
    super(props);
    this.state = {
      projectsInLine: 3,
    };
  }

  handleClickMore = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // this.setState({
    //   projectsDisplayed:
    //     this.state.projectsDisplayed + this.state.projectsInLine,
    // });
    this.props.setProjectsDisplayed(
      this.props.projectsDisplayed + this.state.projectsInLine
    );
  };
  handleClickLess = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.setProjectsDisplayed(
      this.props.projectsDisplayed - this.state.projectsInLine
    );
    // this.setState({
    //   projectsDisplayed:
    //     this.state.projectsDisplayed - this.state.projectsInLine,
    // });
  };

  render() {
    let width = this.props.windowWidth;
    const { projectsInLine } = this.state;

    if (width < 1024 && projectsInLine !== 1) {
      this.setState({ projectsInLine: 1 });
      this.props.setProjectsDisplayed(1);
    } else if (width < 1280 && projectsInLine !== 2) {
      this.setState({ projectsInLine: 2 });
      this.props.setProjectsDisplayed(2);
    } else if (projectsInLine !== 3) {
      // 1536
      this.setState({ projectsInLine: 3 });
      this.props.setProjectsDisplayed(3);
    }

    const { projectsDisplayed } = this.props;
    let readMore = null;

    if (projectsDisplayed < data.length || true) {
      readMore = (
        <div className="relative">
          <div className="Projects-projects mb-10 flex flex-row flex-wrap justify-evenly">
            {data
              .slice(projectsDisplayed, projectsDisplayed + projectsInLine)
              .map((project, i) => (
                <ProjectTile key={i} {...project} shorten={true} />
              ))}
          </div>

          <div className="absolute w-full h-full top-0 left-0 fadeLikeMedium flex justify-center text-xl">
            {projectsDisplayed !== projectsInLine && (
              <CustomLink
                to=""
                className="mt-auto mb-3 mx-2 animate-none w-fit p-4 stroke-white self-center"
                onClick={this.handleClickLess}
              >
                See less
              </CustomLink>
            )}
            {projectsDisplayed < data.length && (
              <CustomLink
                to=""
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
        className="Projects min-h-screen h-full flex flex-col bg-black text-white pb-10"
      >
        <div className="container flex flex-col py-8 relative">
          <Title content="Projects" colorType="white" />

          <div className="Projects-projects flex flex-row flex-wrap justify-evenly">
            {data.slice(0, projectsDisplayed).map((project, i) => (
              <ProjectTile key={i} {...project} shorten={false} />
            ))}
          </div>
          {readMore}
        </div>
      </section>
    );
  }
}
