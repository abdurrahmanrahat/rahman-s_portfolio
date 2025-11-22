import Container from "@/components/Ui/Container";
import SectionTitle from "@/components/Ui/SectionTitle";
import ProjectLists from "./ProjectLists";

const Projects = () => {
  return (
    <div className="my-14 md:my-20">
      <Container>
        <SectionTitle title="Projects" />

        <ProjectLists />
      </Container>
    </div>
  );
};

export default Projects;
