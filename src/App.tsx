import AboutMain from "./components/about/AboutMain";
import ExperinceMain from "./components/experince/ExperinceMain";
import MainHero from "./components/hero/MainHero";
import Navbar from "./components/navbar/secondNavbar/Navbar";
import SkillsMain from "./components/skills/SkillsMain";

function App() {
  return (
    <>
      <MainHero />
      <main className="main relative z-20 bg-section1 rounded-t-[30px] overflow-hidden">
        <Navbar />
        <AboutMain />
        <SkillsMain />
        <ExperinceMain />
      </main>
    </>
  );
}

export default App;
