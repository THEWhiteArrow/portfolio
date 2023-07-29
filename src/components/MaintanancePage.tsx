import { Component, ReactNode } from "react";
import Title from "./Title";
import CustomLink from "./CustomLink";

export default class ProjectPage extends Component {
  render(): ReactNode {
    return (
      <section className="ProjectPage">
        <div className="container py-8 min-h-screen w-full h-full relative flex flex-col justify-center items-center">
          <Title content="WoW" colorType="black" animation={false} />
          <div className="mt-5 flex flex-col justify-center items-center text-xl">
            <p className="text-center">
              Your intrest in my story is amazing...
            </p>
            <p className="text-center">
              ...However, I am still working on creating this section
            </p>
            <p className="text-center"> Stay tuned for the great launch!</p>
          </div>
          <CustomLink to="/" className="p-8 my-10 flex items-center">
            Back to exploring :)
          </CustomLink>
        </div>
      </section>
    );
  }
}
