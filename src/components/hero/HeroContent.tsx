import { ArrowDown } from "lucide-react";
import Button from "../common/Button";

const HeroContent = () => {
  return (
    <div className="">
      <span className="leading-40">
        <p className="font-heads text-shadow-[0_0_10px_black] leading-20 text-[4vw]">Hi I'm a</p>
        <p className="font-heads text-[12vw] text-black max-sm:leading-0 max-lg:leading-[8vw]">
          Web Developer
        </p>
        <p className="font-heads text-[10vw] text-shadow-[0_0_10px_black] max-lg:leading-[12vw]  ">
          On Road to <span className="text-[10vw]">SDE</span>
        </p>
      </span>
      <Button text="My Resume" icon={ArrowDown} />

      <img className="hidden max-md:block relative mt-12" src="/images/hero-image.png" alt="coding guy image" />
      

    </div>
  );
};

export default HeroContent;
