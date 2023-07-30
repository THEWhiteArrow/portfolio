import { Component } from "react";
import { Helmet } from "react-helmet";
import Title from "./Title";
import CustomLink from "./CustomLink";
import { ReactComponent as FileSvg } from "../assets/svg/file.svg";
import "../styles/ThankYouPage.css";

export default class ThankYouPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Thank You | Submission</title>
        </Helmet>
        <section className="ThankYouPage">
          <div className="container py-8 min-h-screen w-full h-full relative flex flex-col justify-center items-center">
            <Title content="Thank You" colorType="black" animation={false} />
            <div className="mt-5 flex flex-col justify-center items-center text-xl">
              <p className="text-center">
                Your form has been successfully submitted!
              </p>

              <div className="loader-container scale-50">
                <span></span>
                <div className="center">
                  <div className="wrap">
                    <div className="box-1 box">
                      <FileSvg className="scale-50" />
                      <FileSvg className="scale-50" />
                    </div>
                    <div className="box-2 box">
                      <FileSvg className="scale-50" />
                      <FileSvg className="scale-50" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center">
                I am on my way to check it out...
              </p>
              <p className="text-center">...and get back to you as soon as</p>
            </div>
            <CustomLink to="/" className="p-8 my-10 flex items-center">
              Back to exploring :)
            </CustomLink>
          </div>
        </section>
      </>
    );
  }
}
