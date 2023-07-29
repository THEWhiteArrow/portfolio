import { Component } from "react";
import Title from "./Title";
import AboutPair from "./AboutPair";
import "../styles/About.css";

import { ReactComponent as AdventureSvg } from "../assets/svg/adventure.svg";
import { ReactComponent as GymSvg } from "../assets/svg/gym.svg";
import { ReactComponent as CodingSvg } from "../assets/svg/coding.svg";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="About  min-h-screen h-full flex">
        <div className="container flex flex-col py-8 relative">
          <Title content="About" colorType="black" className="About-title" />

          <div className="flex flex-col text-2xl">
            <AboutPair
              order="normal"
              svg={<GymSvg className="w-full h-full" />}
            >
              Beyond the lines of code, you'll often find me embracing life with
              a vigor that knows no bounds. My journey is a blend of
              intellectual pursuits and a zest for living. When I'm not in front
              of a screen, I'm pumping iron at the gym, traveling to uncharted
              destinations, and savoring the delights of wholesome nutrition.
            </AboutPair>
            <AboutPair
              order="reverse"
              svg={<CodingSvg className="w-full h-full" />}
            >
              With every project and challenge, I strive not only to master the
              craft of technology but to approach it mindfully. I believe in the
              power of technology to shape a brighter future, and I'm determined
              to wield this power responsibly and ethically.
            </AboutPair>
            <AboutPair
              order="normal"
              svg={<AdventureSvg className="w-full h-full" />}
            >
              So join me on this exciting adventure as I bring dreams to life
              through lines of code and embrace the world with open arms.
              Together, let's create a future where innovation, health, and
              exploration intertwine, leaving a lasting impact on the digital
              landscape and beyond. The possibilities are limitless, and I can't
              wait to share this exhilarating journey with you!
            </AboutPair>
          </div>
        </div>
      </section>
    );
  }
}
