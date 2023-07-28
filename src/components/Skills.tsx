import { Component } from "react";
import SkillItem from "./SkillItem";
import Title from "./Title";
import "../styles/Skills.css";
export default class Skills extends Component {
  render() {
    enum Options {
      "Beginner",
      "Advanced",
      "Expert",
    }
    type SkillType = { name: string; proficiency: Options };

    const skills: SkillType[] = [
      { name: "javascript", proficiency: Options.Expert },
      { name: "html", proficiency: Options.Expert },
      { name: "css", proficiency: Options.Expert },
      { name: "github", proficiency: Options.Expert },
      { name: "vscode", proficiency: Options.Expert },
      { name: "java", proficiency: Options.Expert },
      { name: "react", proficiency: Options.Advanced },
      { name: "typescript", proficiency: Options.Advanced },
      { name: "gcp", proficiency: Options.Advanced },
      { name: "python", proficiency: Options.Advanced },
      { name: "cpp", proficiency: Options.Advanced },
      { name: "azure", proficiency: Options.Beginner },
      { name: "bootstrap", proficiency: Options.Advanced },
      { name: "docker", proficiency: Options.Beginner },
      { name: "express", proficiency: Options.Advanced },
      { name: "figma", proficiency: Options.Beginner },
      { name: "netlify", proficiency: Options.Advanced },
      { name: "postgres", proficiency: Options.Advanced },
      { name: "stackoverflow", proficiency: Options.Advanced },
      { name: "mongodb", proficiency: Options.Advanced },
    ];
    const compareFn = (a: SkillType, b: SkillType) =>
      a.proficiency > b.proficiency ? -1 : 1;

    return (
      <section id="skills" className="Skills min-h-screen h-full bg-black">
        <div className="container py-8 relative flex flex-col">
          <Title content="Skills" colorType="white" />

          <div className="Skills-items text-xl my-10 flex flex-wrap gap-10 justify-center items-center">
            {skills.sort(compareFn).map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                proficiency={Options[skill.proficiency]}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
