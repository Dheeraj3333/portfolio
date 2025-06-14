import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projectsData } from "@/utils/data";
import ProjectCard from "./ProjectCard";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const projectContentRef = useRef<HTMLDivElement>(null);

  const [projectSectionTotalHeight, setProjectSectionTotalHeight] = useState(0);
  const [heightReady, setHeightReady] = useState(false);

  useEffect(() => {
    const allProjects = document.querySelectorAll(".project-items");
    let height = 0;
    allProjects.forEach((project) => {
      height += (project as HTMLElement).offsetHeight;
    });
    setProjectSectionTotalHeight(height);
    setHeightReady(true);
  }, []);

  useGSAP(() => {
    if (!heightReady) return;

    // Pin Counter
    ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 150px",
      end: () => `+=${projectSectionTotalHeight} bottom`,
      scrub: true,
      pin: true,
      markers: false,
    });

    // Save initial styles to prevent Flash of Unstyled Content (FOUC)
    ScrollTrigger.saveStyles(".numbers-list");

    gsap.to(".numbers-list", {
      y: -200,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".project2",
        scroller: document.body,
        start: "top center",
        end: "top center",
        markers: false,
        toggleActions: "play none none reverse",
      },
      immediateRender: false,
    });

    gsap.to(".numbers-list", {
      y: -400,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".project3",
        scroller: document.body,
        start: "top center",
        end: "top center",
        markers: false,
        toggleActions: "play none none reverse",
      },
      immediateRender: false,
    });
    gsap.to(".numbers-list", {
      y: -600,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".project4",
        scroller: document.body,
        start: "top center",
        end: "top center",
        markers: false,
        toggleActions: "play none none reverse",
      },
      immediateRender: false,
    });
    gsap.to(".numbers-list", {
      y: -800,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".project5",
        scroller: document.body,
        start: "top center",
        end: "top center",
        markers: false,
        toggleActions: "play none none reverse",
      },
      immediateRender: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [heightReady]);

  return (
    <div ref={projectRef} className="project flex">
      <div className="numbers max-w-[30%] w-full relative max-md:hidden">
        <div ref={counterRef} className="">
          <Counter />
        </div>
      </div>
      <div
        className="project-content max-w-[70%] w-full max-md:max-w-full"
        ref={projectContentRef}
      >
        <ul>
          {projectsData.map((project, index) => (
            <li
              key={index}
              className={`project-items project${
                index + 1
              }`}
            >
              <ProjectCard project={project}  />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
