import Container from "@/components/Ui/Container";
import MYButtonIconFirst from "@/components/Ui/MYButtonIconFirst";
import { projectsData } from "@/data/project";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RelatedProjects from "./_components/RelatedProjects";

const PageDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        Project not found.
      </div>
    );
  }

  return (
    <section className="py-10">
      <Container className="">
        <div className="">
          {/* Breadcrumb */}
          <div className="mb-6 2xl:mb-8">
            <Link
              href="/projects"
              className="flex items-center text-sm 2xl:text-base text-primary transition"
            >
              <ArrowLeft size={16} className="mr-1" /> Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-dark dark:text-white">
                {project.name}
              </h1>

              <p className="text-primary text-lg font-medium">
                {project.category}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full border border-primary text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Main Image */}
            <div className="w-full mt-6">
              <Image
                src={project.image}
                alt={project.name}
                width={1280}
                height={600}
                className="rounded-md shadow-[0px_1px_14px_rgba(0,0,0,0.10)] dark:shadow-cardDarkShadow object-cover"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-2 md:gap-4 mt-6">
              {project.viewUrl && (
                <Link
                  href={project.viewUrl}
                  target="_blank"
                  className="font-semibold "
                >
                  <MYButtonIconFirst
                    mobileText="View"
                    desktopText="Live Preview"
                    isOutline={false}
                    icon={
                      <ExternalLink className="w-[18px] h-[18px] md:w-5 md:h-5 2xl:w-6 2xl:h-6" />
                    }
                  />
                </Link>
              )}

              {project.githubFrontendUrl && (
                <Link href={project.githubFrontendUrl} target="_blank">
                  <MYButtonIconFirst
                    mobileText="Frontend"
                    desktopText="Frontend Code"
                    isOutline={true}
                    icon={
                      <Github className="w-[18px] h-[18px] md:w-5 md:h-5 2xl:w-6 2xl:h-6" />
                    }
                  />
                </Link>
              )}

              {project.githubBackendUrl && (
                <Link href={project.githubBackendUrl} target="_blank">
                  <MYButtonIconFirst
                    mobileText="Backend"
                    desktopText="Backend Code"
                    isOutline={true}
                    icon={
                      <Github className="w-[18px] h-[18px] md:w-5 md:h-5 2xl:w-6 2xl:h-6" />
                    }
                  />
                </Link>
              )}
            </div>
          </div>

          {/* Project Description */}
          <div className="mt-12 prose prose-invert max-w-none dark:prose-invert prose-headings:text-primary prose-p:text-gray-300">
            <div
              dangerouslySetInnerHTML={{
                __html: project.description,
              }}
              className="html-content"
            />
          </div>

          {/* Related project */}
          <RelatedProjects />
        </div>
      </Container>
    </section>
  );
};

export default PageDetailsPage;
