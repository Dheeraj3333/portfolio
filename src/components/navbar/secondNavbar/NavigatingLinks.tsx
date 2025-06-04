import TextFlipper from "@/components/common/TextFlipper";
import { links } from "@/utils/data";

const NavigatingLinks = ({
  toggleFunction,
}: {
  toggleFunction: () => void;
}) => {
  return (
    <>
      <div className="w-5/3 max-lg:hidden"></div>
      <div className="navcontent w-5/2 max-md:w-full h-full p-8 max-md:pt-25">
        <ul className="navlist flex flex-col ">
          {links.map((link, idx) => {
            return (
              <li key={idx}
               className=""
               onClick={toggleFunction}
               >

                <TextFlipper className="max-md:w-full w-fit pb-[1px]">
                  <a
                    href={`#${link.link}`}
                    className="text-6xl w-full block max-md:text-4xl font-bold  uppercase"
                  >
                    {link.target}
                  </a>
                </TextFlipper>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col pt-10 gap-8">
          <div className="text-3xl">
            <b>Email Address : </b> <br />
            <span className="max-sm:text-2xl">
                <a href="mailto:dpthakur0304@gmail.com">dpthakur0304@gmail.com</a>
            </span>
        </div>
        <div className="text-3xl">
            <b>Github : </b> <br />
            <span className="max-sm:text-2xl">
                <a href="https://github.com/Dheeraj3333">github.com/Dheeraj3333</a>
            </span>
        </div>
        </div>
      </div>
    </>
  );
};

export default NavigatingLinks;
