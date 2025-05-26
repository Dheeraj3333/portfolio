import TechSkill from "./TechSkill";


interface SkillsArray{
    allSkills:{
        image:string,
        skill:string
    }[],
}

const  SkillsMapper = ({allSkills}:SkillsArray) => {
  return (
    <ul className="remove-scrollbar flex gap-8 mt-4 max-w-full transition-all duration-300  overflow-auto rounded-2xl shadow-[inset_4px_1px_15px_5px_#22242e] p-4">
        {allSkills.map((skill,index)=>{
            return <li key={index} className="cursor-pointer">
                <TechSkill image={skill.image} skill={skill.skill} />
            </li>
        })}
    </ul>
  )
}

export default SkillsMapper