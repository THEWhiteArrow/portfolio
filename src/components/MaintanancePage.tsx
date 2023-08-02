import Title from "./Title";
import CustomLink from "./CustomLink";
import { Helmet } from "react-helmet";
import "../styles/MaintenancePage.css";
import { ReactComponent as GearSvg } from "../assets/svg/gear.svg";
import { useNavigate } from "react-router-dom";

type MyProps = { navigateBack: boolean };

export default function ProjectPage(props: MyProps) {
  const nav = useNavigate();
  return (
    <>
      <Helmet>
        <title>Maintanance | Damian Trafiałek</title>
        <meta
          name="description"
          content="Exciting Updates Underway! Our team is hard at work crafting a remarkable new feature for you. Stay tuned as we put the finishing touches on this addition to ensure a seamless experience. We can't wait to unveil it soon and enhance your journey with us. Thank you for your patience and support!"
        />
        <meta
          name="keywords"
          content="maintenance damian trafialek new feature coming up soon release"
        />
      </Helmet>
      <section className="ProjectPage">
        <div className="container py-8 min-h-screen w-full h-full relative flex flex-col justify-center items-center">
          <Title content="WoW" colorType="black" animation={false} />
          <div className="mt-5 flex flex-col justify-center items-center text-xl">
            <p className="text-center">
              Your intrest in my story is amazing...
            </p>

            <GearSvg />

            <p className="mt-5 text-center">
              ...However, I am still working on creating this section
            </p>
            <p className="text-center"> Stay tuned for the great launch!</p>
          </div>
          <CustomLink
            to="/"
            className="my-10 flex items-center"
            onClick={() => {
              if (props.navigateBack) nav(-1);
              else nav("/");
            }}
            type="button"
            elClassName="p-8 px-10"
          >
            Back to exploring :)
          </CustomLink>
        </div>
      </section>
    </>
  );
}
