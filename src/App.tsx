import { useEffect } from "react";
import AboutMain from "./components/about/AboutMain";
import ProjectMain from "./components/projects/ProjectMain";
import MainHero from "./components/hero/MainHero";
import Navbar from "./components/navbar/secondNavbar/Navbar";
import SkillsMain from "./components/skills/SkillsMain";
import gsap from "gsap";
import { ReactLenis, useLenis } from "lenis/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenis = useLenis();

  useEffect(() => {
  if (!lenis) return;

  // Register ScrollTrigger proxy
  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      return value !== undefined
        ? lenis.scrollTo(value, { immediate: true })
        : window.scrollY;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // Optional: disable pinType if issues on mobile
    pinType: document.body.style.transform ? "transform" : "fixed",
  });

  // Update ScrollTrigger on scroll
  lenis.on("scroll", ScrollTrigger.update);

  // Cleanup
  return () => {
    lenis.off("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(document.body, null as any); // clean proxy
  };
}, [lenis]);


  return (
    <>
      <ReactLenis root options={{ autoRaf: true }} />
      <MainHero />
      <main className="main relative z-20 bg-section1 rounded-t-[30px] overflow-hidden">
        <Navbar />
        <AboutMain />
        <SkillsMain />
        <ProjectMain />
        <div className="min-h-screen"></div>
      </main>
    </>
  );
}

export default App;
