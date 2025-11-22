"use client";

import { categoriesData } from "@/data/categories";
import { projectsData } from "@/data/project";
import { TProject } from "@/types/project";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectLists = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selected);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-8">
        {[{ name: "All" }, ...categoriesData].map((category, index) => (
          <button
            key={index}
            className={`px-4 py-1.5 md:px-5 md:py-2 2xl:px-6 2xl:py-2.5 border border-gray-800 hover:bg-primary text-sm 2xl:text-base hover:text-dark rounded-full transition-all duration-300 [word-spacing:2px] md:[word-spacing:4px] cursor-pointer ${
              selected === category.name ? "text-dark bg-primary" : ""
            }`}
            onClick={() => setSelected(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
        {filteredProjects.slice(0, 3).map((project: TProject, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectLists;
