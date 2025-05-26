import Wrapper from "../../utils/Wrapper";
import NavbarMain from "../navbar/NavbarMain";
import HeroContent from "./HeroContent";

const MainHero = () => {
  return (
    <header
      className="relative
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.3),rgba(0,0,0,.8)) , url('/images/herobg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <Wrapper>
        <NavbarMain />
        <HeroContent />
      </Wrapper>

      {/* <div className="absolute bg-gradient-to-b from-[#959697f6] to-purple-700 h-[100px] w-full -bottom-[30px]"></div> */}
    </header>
  );
};

export default MainHero;
