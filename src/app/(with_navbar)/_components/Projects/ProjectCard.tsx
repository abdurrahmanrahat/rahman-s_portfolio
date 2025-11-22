"use client";

import MYImage from "@/components/Ui/MYImage";
import { TProject } from "@/types/project";
import { stripHtml, truncateText } from "@/utils/html-string";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project }: { project: TProject }) => {
  const router = useRouter();

  return (
    <div className="shadow-[0px_1px_14px_rgba(0,0,0,0.10)] dark:shadow-cardDarkShadow rounded-md p-3 flex flex-col justify-between group overflow-hidden h-[400px]">
      <Link href={`/projects/${project?.slug}`}>
        <div className="overflow-hidden rounded-md h-60">
          <MYImage
            src={project.image}
            alt={project.name}
            width={400}
            height={300}
            className="object-cover rounded-md transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="space-y-4 px-4 my-4">
        <div className="flex items-center justify-between">
          <Link href={`/projects/${project?.slug}`}>
            <h4 className="text-base md:text-xl 2xl:text-2xl font-medium">
              {project.name}
            </h4>
          </Link>

          <Link href={project.viewUrl} target="_blank">
            <Eye className="text-primary w-6 h-6 2xl:w-8 2xl:h-8 font-medium" />
          </Link>
        </div>

        <p className="text-sm 2xl:text-base text-gray-600 dark:text-gray-300 wrap-break-word whitespace-normal leading-[1.4]">
          {truncateText(stripHtml(project.description), 130)}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
