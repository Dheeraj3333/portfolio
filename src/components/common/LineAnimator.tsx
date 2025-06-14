import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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


// this is a line animating component that use scrolltrigger and splitText along with gsap, to use to component pass children paragraph give it a classname and pass the same classname by adding a '.' before it , to LineAnimators classNotation prop

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
  const splitInstance = useRef<SplitText | null>(null);

  useGSAP(() => {
    const setupAnimation = () => {
      // Clean up previous instances
      if (splitInstance.current) {
        splitInstance.current.revert();
        splitInstance.current = null;
      }

      gsap.set(classNotation, { opacity: 1 });

      splitInstance.current = new SplitText(classNotation, {
        type: "lines",
        linesClass: "line",
        mask: "lines",
        reduceWhiteSpace: true,
      });

      gsap.from(splitInstance.current.lines, {
        yPercent: 100,
        opacity: 0,
        duration,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: classNotation,
          start: `${start1} ${start2}`,
          end: `${end1} ${end2}`,
          toggleActions: "play none none reverse",
          markers,
        },
      });
    };

    // Initial setup after fonts load
    document.fonts.ready.then(setupAnimation);

    // Handle resize
    const handleResize = () => {
      setTimeout(() => {
        if (splitInstance.current) {
          splitInstance.current.revert();
          setupAnimation();
          ScrollTrigger.refresh();
        }
      }, 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (splitInstance.current) {
        splitInstance.current.revert();
      }
      ScrollTrigger.killAll();
    };
  }, [classNotation, duration, start1, start2, end1, end2, markers]);

  return <div>{children}</div>;
};

export default LineAnimator;
