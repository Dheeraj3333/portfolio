import SkillsMapper from "./SkillsMapper";
import { programmingLanguages } from "../../utils/data";


const ProgrammingLanguages = () => {
  return (
    <div className="">
      <h3 className="text-5xl font-bold text-primary max-sm:text-[40px]">Programming Languages</h3>

      <SkillsMapper allSkills={programmingLanguages} />
    </div>
  );
};

export default ProgrammingLanguages;
