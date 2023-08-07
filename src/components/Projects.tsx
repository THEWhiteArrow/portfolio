import { Component } from "react";
import { data } from "../scripts/projectData";
import ProjectTile from "./ProjectTile";
import Title from "./Title";
import CustomLink from "./CustomLink";
import "../styles/Projects.css";
import { GlobalState } from "../App";

export default class Projects extends Component<GlobalState, any> {
  handleClickMore = () => {
    this.props.setProjectsDisplayed(this.props.projectsDisplayed + 6);
  };
  handleClickLess = () => {
    this.props.setProjectsDisplayed(this.props.projectsDisplayed - 6);
  };

  render() {
    const { projectsDisplayed } = this.props;

    let readMore = null;

    if (projectsDisplayed < data.length || true) {
      readMore = (
        <div className="relative">
          <div className="Projects-projects mb-10 flex flex-row flex-wrap justify-evenly">
            {data
              .slice(projectsDisplayed, projectsDisplayed + 2)
              .map((project, i) => (
                <ProjectTile key={i} {...project} shorten={true} />
              ))}
          </div>

          <div className="absolute w-full h-full top-0 left-0 fadeLikeMedium flex justify-center text-xl">
            {projectsDisplayed !== 3 && (
              <CustomLink
                to=""
                className="mt-auto mb-3 mx-2 animate-none w-fit p-4 stroke-white self-center"
                onClick={this.handleClickLess}
                type="button"
              >
                See less
              </CustomLink>
            )}
            {projectsDisplayed < data.length && (
              <CustomLink
                to=""
                className="mt-auto mb-3 mx-2 animate-none w-fit p-4 stroke-white self-center"
                onClick={this.handleClickMore}
                type="button"
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
