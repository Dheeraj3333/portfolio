import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Props {
  children: React.ReactNode;
  classNotation: string;
  duration?: number;
  start1?: string;
  start2?: string;
  end1?: string;
  end2?: string;
  markers?: boolean;
}

const LineAnimator = ({
  classNotation,
  children,
  duration = 1,
  start1 = "top",
  start2 = "80%",
  end1 = "bottom",
  end2 = "60%",
  markers = false,
}: Props) => {
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
              scroller:document.body,
              start: `${start1} ${start2}`, // when top of element hits 80% of viewport
              end: `${end1} ${end2}`,
              scrub: false,
              toggleActions: "play none none reverse",
              markers: markers, // <--- remove this in production
            },
            duration: duration,
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
