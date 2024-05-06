import AboutMe from "@/components/HomePage/AboutMe/AboutMe";
import Banner from "@/components/HomePage/Banner/Banner";
import Contact from "@/components/HomePage/Contact/Contact";
import Projects from "@/components/HomePage/Projects/Projects";
import Skills from "@/components/HomePage/Skills/Skills";

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default HomePage;
