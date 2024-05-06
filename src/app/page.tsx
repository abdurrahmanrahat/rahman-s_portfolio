import Banner from "@/components/HomePage/Banner/Banner";
import Projects from "@/components/HomePage/Projects/Projects";
import Skills from "@/components/HomePage/Skills/Skills";

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
};

export default HomePage;