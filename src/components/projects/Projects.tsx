import { useRef } from "react";
import Counter from "./Counter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projectsData } from "@/utils/data";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const projectContentRef = useRef<HTMLDivElement>(null);
  const projectCount = projectsData.length;

  useGSAP(() => {
    // Pin the counter section
    const pinTrigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 100px",
      end: () => `+=${projectContentRef.current?.offsetHeight}`,
      scrub: true,
      pin: true,
      // markers: true,
    });


    // Cleanup function
    return () => {
      pinTrigger?.kill();
      // numberAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { dependencies: [projectCount] });

  return (
    <div className="project flex">
      <div className="numbers max-w-[40%] w-full border-2 py-10 relative">
        <div ref={counterRef}>
          <Counter />
        </div>
      </div>
      <div
        className="project-content max-w-[60%] w-full border-2 border-red-400 py-10"
        ref={projectContentRef}
      >
        <ul>
          {projectsData.map((project, index) => (
            <li
              key={index}
              className={`project${index + 1} min-h-screen border-2 border-black`}
            >
              {project.name + (index + 1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;