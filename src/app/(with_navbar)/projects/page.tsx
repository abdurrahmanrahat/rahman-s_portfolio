import Container from "@/components/Ui/Container";
import ProjectLists from "./_components/ProjectLists";

const ProjectsPage = async () => {
  return (
    <div className="my-14 md:my-20">
      <Container>
        <ProjectLists />
      </Container>
    </div>
  );
};

export default ProjectsPage;
