import AboutMe from "./_components/AboutMe/AboutMe";
import HeroBanner from "./_components/HeroBanner/HeroBanner";
import Projects from "./_components/Projects/Projects";

const HomePage = async () => {
  return (
    <div>
      <HeroBanner />
      <AboutMe />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default HomePage;
