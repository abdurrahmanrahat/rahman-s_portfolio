"use client";

import { TProject } from "@/types";
import CustomModal from "./CustomModal";

const ProjectDetailsButton = ({ project }: { project: TProject }) => {
  return (
    <div>
      <button
        className="shadow-my-shadow font-semibold px-[16px] py-[10px] uppercase text-[14px] rounded-lg cursor-pointer border-b-2 border-primary"
        onClick={() =>
          (
            document.getElementById(project._id) as HTMLDialogElement
          ).showModal()
        }
      >
        Details
      </button>

      <dialog id={project._id} className="modal">
        <CustomModal project={project} />
      </dialog>
    </div>
  );
};

export default ProjectDetailsButton;
