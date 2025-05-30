import TextFlipper from "@/components/common/TextFlipper";
import { links } from "@/utils/data";

const NavigatingLinks = ({
  toggleFunction,
}: {
  toggleFunction: () => void;
}) => {
  return (
    <>
      <div className="w-1/2 max-lg:hidden"></div>
      <div className="navcontent w-1/2 max-md:w-full h-full p-8">
        <ul className="navlist flex flex-col gap-4 ">
          {links.map((link, idx) => {
            return (
              <li key={idx}
               className=""
               onClick={toggleFunction}
               >

                <TextFlipper className="w-fit pb-[1px]">
                  <a
                    href={`#${link.link}`}
                    className="text-6xl max-md:text-4xl font-bold  uppercase"
                  >
                    {link.target}
                  </a>
                </TextFlipper>
              </li>
            );
          })}
        </ul>

        <div className="pt-10 text-3xl">
            <b>Email Address : </b> <br />
            <span className="max-sm:text-2xl">
                <a href="mailto:dpthakur0304@gmail.com">dpthakur0304@gmail.com</a>
            </span>
        </div>
      </div>
    </>
  );
};

export default NavigatingLinks;
