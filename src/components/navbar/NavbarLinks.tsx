import {links} from '../../utils/data'

export const NavbarLinks = ({ setMenuOpen }: { setMenuOpen: () => void }) => {
  return (
    <ul className="flex items-center p-4 gap-4 relative max-md:absolute max-md:bg-black rounded-2xl w-full max-md:top-[108px] max-md:flex-col left-[50%] translate-x-[-50%]">
      {links.map((link, index) => {
        return (
          <li
            onClick={setMenuOpen}
            key={index}
            className="max-md:bg-primary max-md:w-full text-center flex justify-center rounded-xl "
          >
            <a className="max-md:w-full max-md:py-2" href={`#${link.link}`}>
              {link.target}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
