import { Link } from "react-router-dom";
import { ProjectDataType } from "../scripts/projectData";
import Animation from "./Animation";

type PropsType = {
  shorten: boolean;
};
type Props = PropsType & ProjectDataType;

export default function Project(props: Props) {
  const { title, shortDescription, imgName, imgAlt, shadowColor, shorten, id } =
    props;
  let image = null;
  try {
    image = require(`../assets/image/${imgName}`);
  } catch (err) {
    console.log(err);
  }
  const rRotate = Math.random() > 0.5 ? "hover:rotate-6" : "hover:-rotate-6";
  return (
    <div className={`Project mt-10 p-5 min-w-10 max-w-25 w-full relative`}>
      <Link
        aria-label={`See ${title} project info`}
        to={`/project/${id}`}
        className="Project-img-container  w-full my-5"
      >
        <Animation name="zoom-in">
          <div className={`w-full h-48 ${rRotate} duration-100`}>
            <img
              style={{ boxShadow: "0px 5px 10px 2px " + shadowColor }}
              src={image}
              alt={imgAlt}
              className="w-full h-48 object-cover "
            />
          </div>
        </Animation>
      </Link>
      <Animation name="zoom-out">
        <h3 className="Project-title mt-8 text-3xl text-center px-2">
          {title}
        </h3>
        {!shorten && (
          <p className="mt-5 text-justify text-xl">{shortDescription}</p>
        )}
      </Animation>
    </div>
  );
}
