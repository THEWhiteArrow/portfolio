import Title from "./Title";
import "../styles/Vision.css";
import VisionHighlight from "./VisionHighlight";

export default function Vision() {
  return (
    <section id="vision" className="Vision min-h-screen flex flex-col  ">
      <div className="container py-8 relative flex flex-col grow  ">
        <Title content="My Vision" colorType="black" className="title" />

        <div className="Vision-content flex flex-col justify-between text-xl">
          <p className="mt-20">
            In the ever-evolving landscape of&nbsp;
            <VisionHighlight>technology</VisionHighlight>, my vision is to
            become a catalyst for positive change, leveraging my passion for
            programming, my love for machine learning, and my adventurous
            spirit. As a 20-year-old Software Technology Engineering&nbsp;
            <VisionHighlight>Student</VisionHighlight>, I have already ventured
            into creating impactful projects that merge creativity and
            innovation seamlessly. I find joy in crafting beautiful websites
            like Ortodentica, where local businesses can flourish, and in
            developing imaginative tools like the Pixel Art Creator, sparking
            delight in the hearts of users.
          </p>
          <p className="mt-20">
            However, my <VisionHighlight>journey</VisionHighlight> has only just{" "}
            <VisionHighlight>begun</VisionHighlight>. Learning machine learning
            has ignited a fire within me to unravel the mysteries of{" "}
            <VisionHighlight>artificial</VisionHighlight>{" "}
            <VisionHighlight>intelligence</VisionHighlight>. I envision myself
            diving deeper into this fascinating domain, unlocking new potential
            and creating solutions that can transform industries and enrich
            lives. I yearn to be part of a team or an expedition that harnesses
            the power of AI technologies to address real-world challenges and{" "}
            <VisionHighlight>drive</VisionHighlight>{" "}
            <VisionHighlight>progress</VisionHighlight> on a global scale.
          </p>
          <p className="mt-20">
            Looking ahead, I am eagerly{" "}
            <VisionHighlight>anticipating</VisionHighlight> the{" "}
            <VisionHighlight>opportunity</VisionHighlight> to work on fresh
            projects that push boundaries and leave people astonished once
            again. The thrill of surprising everyone with innovative ideas,
            groundbreaking solutions, and ingenious applications of AI motivates
            me to relentlessly pursue excellence. By combining my technical
            expertise, artistic flair, and the excitement of discovery, I hope
            to carve a path where the possibilities are limitless and where my
            passion for programming and AI can make a tangible difference in the
            world. Let's <VisionHighlight>embark</VisionHighlight> on this
            extraordinary <VisionHighlight>journey</VisionHighlight>{" "}
            <VisionHighlight>together</VisionHighlight>, where{" "}
            <VisionHighlight>dreams</VisionHighlight> meet{" "}
            <VisionHighlight>reality</VisionHighlight>, and where the future is
            shaped by a blend of boundless creativity and cutting-edge
            technology.
          </p>
        </div>
      </div>
    </section>
  );
}
