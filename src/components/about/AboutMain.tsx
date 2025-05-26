import { ArrowRight } from "lucide-react";
import Wrapper from "../../utils/Wrapper";
import AboutContent from "./AboutContent";
import FeaturesSlider from "./FeaturesSlider";
import Button from "../common/Button";

const AboutMain = () => {
  return (
    <section id="about" className=" bg-section1 relative text-white pt-7">

      <div className="fadediv absolute w-full p-10 -top-19 bg-gradient-to-b from-section1/1 to-section1">

      </div>
      
      <Wrapper>
        <AboutContent />
        <FeaturesSlider />
        <Button text="My Profile" icon={ArrowRight} />
      </Wrapper>
    </section>
  );
};

export default AboutMain;
