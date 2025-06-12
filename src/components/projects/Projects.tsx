import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projectsData } from "@/utils/data";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const projectContentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin the counter section
    const pinTrigger = ScrollTrigger.create({
      trigger: projectSectionRef.current,
      start: "top top",
      end: () => `+=${document.getElementById("projects")?.offsetHeight}`,
      scrub: true,
      pin: true,
      markers: true,
    });


    // Cleanup function
    return () => {
      pinTrigger?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  });

  return (
    <div ref={projectSectionRef} className="project flex h-screen bg-primary">
      HEllo
    </div>
  );
};

export default Projects;