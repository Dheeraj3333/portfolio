import SkillsMapper from "./SkillsMapper";
import { techStack } from "../../utils/data";


const TechStack = () => {
  return (
    <div>
      <h3 className="text-5xl font-bold text-primary max-sm:text-[40px]">Development Techstack</h3>

      <SkillsMapper allSkills={techStack} />
    </div>
  );
};

export default TechStack;
