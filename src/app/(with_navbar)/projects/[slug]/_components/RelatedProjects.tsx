import ProjectCard from "@/app/(with_navbar)/_components/Projects/ProjectCard";
import { projectsData } from "@/data/project";
import { TProject } from "@/types/project";

const RelatedProjects = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl md:text-3xl xl:text-4xl font-bold mb-5">
        Related Projects
      </h2>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
        {projectsData.slice(0, 3).map((project: TProject, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;
