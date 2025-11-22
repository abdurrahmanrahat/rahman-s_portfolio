import Contact from "@/components/HomePage/Contact/Contact";
import Projects from "@/components/HomePage/Projects/Projects";
import Skills from "@/components/HomePage/Skills/Skills";
import AboutMe from "./_components/AboutMe/AboutMe";
import HeroBanner from "./_components/HeroBanner/HeroBanner";

const HomePage = async () => {
  return (
    <div>
      <HeroBanner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
