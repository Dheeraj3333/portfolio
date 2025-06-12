import { BackendTechStack, frontEndTechStack } from "@/utils/data";
import Wrapper from "../../utils/Wrapper";
import Heading from "../common/Heading";
import SkillCategory from "./SkillCategory";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SkillsMain = ({ onToggle }: { onToggle: () => void }) => {
  useGSAP(() => {
    gsap.from(".frontend", {
      y: 100,
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: ".frontend",
        scroller: document.body,
        start: "top 85%",
        end: "top 50%",
        scrub: false,
        toggleActions: "play none none reverse",
        // markers:true,
      },
    });
    gsap.from(".backend", {
      y: 100,
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
        trigger: ".backend",
        scroller: document.body,
        start: "top 100%",
        end: "top 50%",
        scrub: false,
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });
  });

  return (
    <section id="skills" className=" bg-section2 pt-7 select-none">
      <Wrapper>
        <Heading secondLevelHeading="My Skills" />

        <p className="text-4xl max-md:text-2xl font-bold mb-8 ">
          These are the technologies i have worked with :
        </p>

        <div className="flex flex-col gap-2">
          <div className="frontend">
            <SkillCategory
              initialState={true}
              techStacks={frontEndTechStack}
              categorie="Frontend"
              onToggle={onToggle}
            />
          </div>
          <div className="backend">
            <SkillCategory
              initialState={false}
              techStacks={BackendTechStack}
              categorie="Backend"
              onToggle={onToggle}
            />
          </div>
          {/* <SkillCategory techStacks={programmingLanguages} categorie="Programming Languages" /> */}
        </div>
      </Wrapper>
    </section>
  );
};

export default SkillsMain;
