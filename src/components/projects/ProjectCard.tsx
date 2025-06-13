import { ArrowUpRight } from "lucide-react";
import TextFlipper from "../common/TextFlipper";

interface ProjectData {
  project: {
    name: string;
    link: string;
    demo: string;
    image:string,
    backgorundImage: string;
  };
}

const ProjectCard = ({ project }: ProjectData) => {
  const style = {
    backgroundImage: `url(${project.backgorundImage})`,
    backgroundPosition: "center bottom",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <div className="pb-10 flex flex-col gap-8">
      <div
        style={style}
        className="front rounded-2xl overflow-hidden h-[700px] max-md:h-[500px] p-15 max-md:p-4 flex items-center justify-center"
      >
        <div className="content">
          {project.demo && (
            <video className="w-full aspect-square object-cover shadow-[0_0_10px_#000] rounded-2xl"  autoPlay loop muted>
              <source src={project.demo} />
            </video>
          )}
          {!project.demo && <img className="rounded-2xl" src={project.image}/>}
        </div>
      </div>
      <div className="details min-h-[200px] flex flex-col gap-6">
        <h3>
          <TextFlipper>
            <a target="_blank"
              className="text-6xl block max-md:text-4xl font-extrabold text-shadow-[0_0_4px_black] uppercase w-fit"
              href={project.link}
            >
              {project.name}
            </a>
          </TextFlipper>
        </h3>
        <a target="_blank"
          href={project.link}
          className="bg-white relative text-black rounded-full px-6 py-4 text-4xl max-md:text-2xl capitalize flex transition-all duration-300 overflow-hidden w-[246px] hover:w-[210px] hover:translate-x-[20px] group max-md:w-fit max-md:hover:w-fit"
        >
          view live{" "}
          <span className="absolute max-md:hidden right-[25px] top-[18px] transition-all duration-300 group-hover:right-[-30px]    group-hover:top-[-30px]">
            <ArrowUpRight size={40} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
