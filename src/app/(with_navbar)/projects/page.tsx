import ProjectDetailsButton from "@/components/ui/ProjectDetailsButton";
import { TProject } from "@/types";
import Image from "next/image";
import { FaGithub, FaRegEye } from "react-icons/fa";

const ProjectsPage = async () => {
  const res = await fetch(
    "https://rahmans-portfolio-server.vercel.app/api/v1/projects"
  );
  const projects = await res.json();

  return (
    <div className="mx-[5.1%] py-[80px] md:py-[120px]">
      {/* title section */}
      <div className="relative w-full h-auto py-[20px] flex items-center gap-5">
        <h3 className="inline-flex items-center text-[20px] font-medium">
          Latest{" "}
          <span className="text-[14px] font-light ml-[10px] opacity-80">
            Projects
          </span>
        </h3>
        <i className="relative w-full h-px bg-text-gray"></i>
      </div>

      {/* show projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[40px]">
        {projects?.data.map((project: TProject) => (
          <div
            key={project._id}
            className="shadow-my-shadow p-[12px] rounded-lg space-y-[8px]"
          >
            <div className="w-full h-[260px] overflow-hidden">
              <Image
                src={project.projectImage}
                width={400}
                height={300}
                alt={project.projectName}
                className="rounded-t-lg"
              />
            </div>
            <div>
              <h2 className="text-text text-[18px] md:text-[26px] font-medium">
                {project.projectName}
              </h2>
              <p className="text-text-gray text-[15px]">
                {project.shortDesc.slice(0, 140)}...
              </p>
            </div>
            <div className="flex justify-between items-center">
              {/* icons */}
              <div className="flex gap-[12px]">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-[20px] hover:text-primary duration-500"
                >
                  <FaRegEye />
                </a>

                <a
                  href={project.githubClient}
                  target="_blank"
                  className="text-[20px] hover:text-primary duration-500"
                >
                  <FaGithub />
                </a>
              </div>

              {/* details btn */}
              <ProjectDetailsButton project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
