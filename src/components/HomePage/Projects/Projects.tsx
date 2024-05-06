"use client";

import CustomModal from "@/components/ui/CustomModal";
import { TProject } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaRegEye } from "react-icons/fa";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="mx-[5.1%] mt-[80px] md:mt-[120px]">
      <div className="text-center">
        <span className="text-[24px] font-semibold uppercase border-b-2 border-primary">
          Projects
        </span>
      </div>

      {/* show projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[40px]">
        {projects?.slice(0, 3).map((project: TProject) => (
          <div
            key={project._id}
            className="custom-shadow p-[12px] rounded-lg space-y-[8px]"
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
              <div>
                <button
                  className="custom-shadow font-semibold px-[16px] py-[10px] uppercase text-[14px] rounded-lg cursor-pointer border-b-2 border-primary"
                  onClick={() =>
                    (
                      document.getElementById(
                        "custom_modal"
                      ) as HTMLDialogElement
                    ).showModal()
                  }
                >
                  Details
                </button>

                <dialog id="custom_modal" className="modal">
                  <CustomModal project={project} />
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
