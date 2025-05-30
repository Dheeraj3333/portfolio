import { ArrowRight } from "lucide-react";
import Wrapper from "../../utils/Wrapper";
import AboutContent from "./AboutContent";
import FeaturesSlider from "./FeaturesSlider";
import Button from "../common/Button";

const AboutMain = () => {
  return (
    <section id="about" className="about bg-section1 relative text-white pt-7">
      
      <Wrapper>
        <AboutContent />
        <FeaturesSlider />
        <Button text="My Profile" icon={ArrowRight} />
      </Wrapper>
    </section>
  );
};

export default AboutMain;
