import AboutMe from "@/components/HomePage/AboutMe/AboutMe";
import Contact from "@/components/HomePage/Contact/Contact";
import Projects from "@/components/HomePage/Projects/Projects";
import Skills from "@/components/HomePage/Skills/Skills";
import HeroBanner from "./_components/HeroBanner/HeroBanner";

const HomePage = async () => {
  return (
    <div>
      <HeroBanner />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default HomePage;
