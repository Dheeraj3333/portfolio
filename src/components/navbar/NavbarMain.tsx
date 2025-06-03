import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { Menu, X } from "lucide-react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="flex gap-4 items-center mx-auto ">
      <div className=" w-full border-2 border-white bg-black items-center mx-auto rounded-full flex justify-between px-4 md:pl-6 py-2 max-md:py-4 my-4">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "max-md:hidden"}`}>
          <NavbarLinks setMenuOpen={toggleMenu} />
        </div>
      <NavbarBtn />
      </div>
      <div
        className="max-md:flex hidden cursor-pointer min-w-17 min-h-17 max-h-17 bg-black border-2 rounded-full items-center justify-center"
        onClick={toggleMenu}
      >
        {menuOpen?<X className="font-bold" />:<Menu/>}
        
      </div>
    </nav>
  );
};

export default NavbarMain;
