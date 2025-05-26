import { ArrowDownRight } from "lucide-react";

const NavbarBtn = () => {
  return (
    <button className="relative flex py-2 px-4 rounded-full bg-primary text-white font-bold hover:shadow-glow transition-all duration-200 cursor-pointer">
      Hire Me <ArrowDownRight />
      <span className="absolute flex size-3 right-0 top-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-900 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-blue-900"></span>
      </span>
    </button>
  );
};

export default NavbarBtn;
