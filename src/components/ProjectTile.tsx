import { ProjectDataType } from "../scripts/projectData";
import Animation from "./Animation";

type PropsType = {
  shorten: boolean;
};
type Props = PropsType & ProjectDataType;

export default function Project(props: Props) {
  const { title, description, imgName, imgAlt, shadowColor, shorten } = props;
  let image = null;
  try {
    image = require(`../assets/image/${imgName}`);
  } catch (err) {
    console.log(err);
  }

  return (
    <div className={`Project p-5 min-w-10 max-w-25 relative`}>
      <Animation name="zoom-in">
        <div
          className="Project-img-container  w-full my-5"
          style={{ boxShadow: "0px 5px 10px 2px " + shadowColor }}
        >
          <img src={image} alt={imgAlt} className="w-full h-48 object-cover" />
        </div>
      </Animation>
      <Animation name="zoom-out">
        <h3 className="Project-title text-3xl text-center px-2">{title}</h3>
        {!shorten && (
          <p className="mt-10 text-justify text-xl">{description}</p>
        )}
      </Animation>
    </div>
  );
}
