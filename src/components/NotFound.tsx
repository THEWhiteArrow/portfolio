import { Component } from "react";
import { Helmet } from "react-helmet";
import Title from "./Title";
import CustomLink from "./CustomLink";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Not Found | 404</title>
        </Helmet>
        <section className="NotFound bg-black text-white">
          <div className="container py-8 min-h-screen w-full h-full relative flex flex-col justify-center items-center">
            <Title
              content="Page Not Found - 404"
              colorType="white"
              animation={false}
            />
            <div className="mt-5 flex flex-col justify-center items-center text-xl">
              <p className="text-center">
                The page you are looking for does not exist.
              </p>

              <p className="mt-5 text-center">Maybe try out the main page...</p>
              <p className="text-center">...or contact the administrator</p>
            </div>
            <CustomLink
              to="/"
              className="p-8 my-10 flex items-center"
              variant="white"
            >
              Back to exploring :)
            </CustomLink>
          </div>
        </section>
      </>
    );
  }
}
