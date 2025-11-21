import { TProject } from "@/types";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";

const CustomModal = ({ project }: { project: TProject }) => {
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle absolute right-2 top-2">
          <CiCircleRemove className="text-[24px] font-bold" />
        </button>
      </form>

      <div className="md:flex gap-[20px]">
        <div className="md:w-1/2 h-[440px] overflow-hidden mb-10 md:mb-0">
          <Image
            src={project.projectImage}
            width={500}
            height={500}
            className="w-full h-full cursor-pointer object-cover object-top hover:object-bottom transition-all duration-4000"
            alt="image"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center gap-[16px]">
          <h2 className="heading_text">{project.projectName}</h2>
          <h5 className="text-lg font-semibold">Features:</h5>
          <div className="mx-4">
            <li>{project.features.one}</li>
            <li>{project.features.two}</li>
            <li>{project.features.three}</li>
          </div>
          <p className="">
            <span className="text-lg font-semibold">Technologies used:</span>{" "}
            {project.technology}
          </p>
          <div className="text-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
