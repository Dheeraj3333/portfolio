import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  classNotation: string;
  children: React.ReactNode;
}

const LineAnimator = ({ classNotation = ".mask-para", children }: Props) => {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      console.log("font is ready");

      // sets initial opacity to zero
      gsap.set(classNotation, { opacity: 1 });

      // split the text contained within the element with specified class
      const split = SplitText.create(classNotation, {
        type: "lines",
        linesClass: "line",
        mask: "lines",
        autoSplit: true,
        onSplit: (self) => {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: classNotation,
              start: "top 80%", // when top of element hits 80% of viewport
              end: "bottom 60%",
              scrub: false,
              toggleActions: "play none none reverse",
              // markers: true, // <--- remove this in production
            },
            duration: 1,
            yPercent: 100,
            opacity: 0,
            stagger: 0.15,
            ease: "expo.out",
          });
        },
      });
    });
  }, []);

  return <div>{children}</div>;
};

export default LineAnimator;
