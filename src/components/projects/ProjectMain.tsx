import Wrapper from "@/utils/Wrapper";
import Heading from "../common/Heading";
import Projects from "./Projects";

const ProjectMain = () => {
  return (
    <section id="projects" className=" bg-section2 pt-7">
      <Wrapper>
        <Heading secondLevelHeading="Projects" />
          <Projects />
      </Wrapper>
    </section>
  );
};

export default ProjectMain;
