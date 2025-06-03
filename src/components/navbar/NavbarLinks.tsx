import { links } from "../../utils/data";
import TextFlipper from "../common/TextFlipper";

export const NavbarLinks = ({ setMenuOpen }: { setMenuOpen: () => void }) => {
  return (
    <ul className="flex items-center p-4 gap-4 relative max-md:absolute max-md:backdrop-blur-xl rounded-2xl w-full max-md:top-[108px] max-md:flex-col max-md:gap-0 left-[50%] translate-x-[-50%] max-md:border-2 shadow-2xl">
      {links.map((link, index) => {
        return (
          <li
            onClick={setMenuOpen}
            key={index}
            className="max-md:w-full text-left flex justify-center rounded-xl "
          >
            <TextFlipper className="w-full">
              <a
                className="max-md:w-full max-md:py-2 w-[100%] max-md:text-4xl max-md:font-extrabold max-md:uppercase block"
                href={`#${link.link}`}
              >
                {link.target}
              </a>
            </TextFlipper>
          </li>
        );
      })}
    </ul>
  );
};
