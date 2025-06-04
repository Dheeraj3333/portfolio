import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import NavigatingLinks from "./NavigatingLinks";
import { useLenis } from "lenis/react";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const lenis = useLenis();
  const navbtn = useRef(null);

  useGSAP(() => {
    gsap.to(navbtn.current, {
      scale: "1",
      duration: ".3",
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "40 top",
        scrub: false,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    setIsActive(!isActive);
    if (!isActive) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      lenis?.start();
    }
  }

  return (
    <nav className=" z-10">
      <button
        ref={navbtn}
        className="fixed scale-0 z-[50] top-8 right-8 cursor-pointer class flex items-center justify-center flex-col gap-2 bg-black w-[70px] h-[70px] rounded-full shadow-[0_0_5px_#fff] px-4"
        onClick={toggleActive}
      >
        <span
          className={`h-[3px] w-full bg-white rounded-full transition-all duration-400 ${
            isActive
              ? " -rotate-45 origin-center translate-x-0 translate-y-[7px]"
              : ""
          }`}
        ></span>
        <span
          className={`h-[3px] w-full bg-white rounded-full transition-all duration-400  ${
            isActive
              ? "rotate-45 origin-center translate-x-[0px] -translate-y-[6px]"
              : ""
          }`}
        ></span>
      </button>

      <div
        className={`fixed navItems w-full min-h-full flex bg-transparent backdrop-blur-2xl top-0 z-[49] transition-all duration-600 ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${
          isActive ? "left-0" : "left-full"
        } `}
      >
        <NavigatingLinks toggleFunction={toggleActive} />
        
      </div>
    </nav>
  );
};

export default Navbar;
