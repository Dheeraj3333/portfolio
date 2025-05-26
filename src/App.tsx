import AboutMain from "./components/about/AboutMain";
import ExperinceMain from "./components/experince/ExperinceMain";
import MainHero from "./components/hero/MainHero";
import SkillsMain from "./components/skills/SkillsMain";

function App() {
  return (
    <>
      <MainHero />
      <main className="main">
        <AboutMain />
        <SkillsMain />
        <ExperinceMain />
      </main>
    </>
  );
}

export default App;
