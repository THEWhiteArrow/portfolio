import Animation from "./Animation";

type Props = {
  name: string;
  proficiency: string;
};
export default function SkillItem(props: Props) {
  const url = `https://skillicons.dev/icons?i=${props.name}`;
  const animations = [
    "fade",
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
  ];
  const rAnimation = animations[Math.floor(Math.random() * animations.length)];
  return (
    <div className="SkillItem mt-20 h-20 w-20  lg:mt-32 lg:h-32 lg:w-32 flex flex-col justify-center items-center hover:animation-pause">
      <div className="SkillItem-img-container relative h-full flex justify-center">
        <Animation name={rAnimation}>
          <img
            className="h-full relative mx-auto"
            src={url}
            alt={"skill " + props.name}
          />
        </Animation>
      </div>
      <div className="SkillItem-info text-center">
        {props.name} <br /> {props.proficiency}
      </div>
      {/* <Animation name={rAnimation} className="SkillItem-info text-center">
        {props.name} <br /> {props.proficiency}
      </Animation> */}
    </div>
  );
}
