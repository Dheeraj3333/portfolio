import { Hand } from "lucide-react";

const NavbarLogo = () => {
  return (
    <h1 className="flex font-heads text-2xl items-center gap-1" title="Dheeraj Patel's Portfolio">
      <span className="min-md:hidden">DP</span>
      <span className="max-md:hidden">Dheeraj Patel</span>
      <Hand className="min-md:hidden" />
    </h1>
  );
};

export default NavbarLogo;
