import Wrapper from "../../utils/Wrapper";
import NavbarMain from "../navbar/NavbarMain";
import HeroContent from "./HeroContent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MainHero = () => {
  const hero = useRef(null);
  const nav = useRef(null);

  useGSAP(() => {
    gsap.to(hero.current, {
      scale: "0.9",
      translateY: "100",
      opacity: "0",
      scrollTrigger: {
        trigger: hero.current,
        start: "top top",
        end: "200% -100%",
        scrub: true
        // markers:true
      },
    });
  }, []);

  useGSAP(() => {
    gsap.to(nav.current, {
      scale: "0.9",
      translateY: "-100",
      opacity: "0",
      scrollTrigger: {
        trigger: nav.current,
        start: "top top",
        end: "200% -100%",
        scrub: true
        // markers:true
      },
    });
  }, []);

  return (
    <header
      className="sticky top-0 z-10 min-h-[650px] max-sm:min-h-screen
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.8)) , url('/images/herobg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <Wrapper>
        <div ref={nav} className="relative z-30">
          <NavbarMain />
        </div>
        <div ref={hero} className="relative z-20" >
          <HeroContent />
        </div>
      </Wrapper>
    </header>
  );
};

export default MainHero;
