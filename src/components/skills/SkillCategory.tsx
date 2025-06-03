import SkillsMapper from "./SkillsMapper";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Category {
  categorie: string;
  techStacks: { image: string; skill: string }[];
  initialState?: boolean;
}

export default function SkillCategory({
  categorie,
  techStacks,
  initialState = false,
}: Category) {

  const [isOpen, setIsOpen] = useState(initialState);

  function toogleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="bg-black p-2 rounded-xl">
      <div
        className="category flex justify-between w-full p-4"
        onClick={toogleOpen}
      >
        <h3 className="text-6xl font-extrabold max-md:text-3xl uppercase">
          {categorie}
        </h3>
        <span
          className={`cursor-pointer w-[120px] max-md:w-[60px] flex justify-center items-center ${
            isOpen ? "rotate-180" : ""
          } transition-all duration-200`}
        >
          <ChevronDown className="scale-300 max-md:scale-200" />
        </span>
      </div>
      <div
        className={`content w-full transition-all duration-300 ease-out ${
          isOpen ? "h-[240px]" : "h-0"
        } overflow-hidden`}
      >
        <div className="border-t-[1px] px-1">
          <SkillsMapper skillset={techStacks} />
        </div>
      </div>
    </div>
  );
}
