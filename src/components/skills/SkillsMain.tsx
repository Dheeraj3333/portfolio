import Wrapper from "../../utils/Wrapper";
import Heading from "../common/Heading";
import ProgrammingLanguages from "./ProgrammingLanguages";
import TechStack from "./DevTechStack";

const SkillsMain = () => {
  return (
    <section id="skills" className=" bg-section2 pt-7">
      <Wrapper>
        <Heading secondLevelHeading="My Skills" />

        <p className="text-4xl mb-6 font-heads">
          These are the technologies i have worked with :
        </p>

        <div className="teachstack flex flex-col gap-20">
          <ProgrammingLanguages />
          <TechStack />
        </div>
      </Wrapper>
    </section>
  );
};

export default SkillsMain;
