import Container from "@/components/Ui/Container";
import MYImage from "@/components/Ui/MYImage";
import { skillsData } from "@/data/tool";
import { TSkill } from "@/types/skill";
import Stats from "./Stats";
import ToolBadge from "./ToolBadge";

const AboutMe = () => {
  return (
    <div className="my-12">
      <Container>
        <div className="max-w-[1080px] mx-auto border border-border rounded-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center ">
            {/* Image */}
            <div className="flex justify-center items-center">
              <MYImage
                src={"/images/rahat/rahat2.png"}
                alt="rahat"
                width={500}
                height={400}
                className="rounded-2xl "
              />
            </div>

            {/* desc */}
            <div className="p-3 md:p-6 rounded-2xl space-y-4">
              <div className="border-b border-border py-4">
                <p className="italic font-medium text-[24px] text-gray-600 dark:text-gray-500 mb-1">
                  Hello, I&apos;m
                </p>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  Abdur <span className="italic font-normal">Rahman</span>
                </h3>
              </div>

              <div className="text-gray-700 dark:text-gray-300 md:text-lg leading-[25px] space-y-2 text-justify">
                <p>
                  I’m a dedicated Web Developer specializing in the MERN Stack
                  and modern Next.js applications. I build fast, scalable, and
                  user-focused digital products that help businesses operate
                  efficiently and stand out online. My work emphasizes clean
                  architecture, smooth performance, and a strong focus on
                  real-world usability.
                </p>

                <p>
                  Over the years, I’ve successfully built and delivered 10+
                  complete projects — from planning and UI development to
                  backend logic, API integration, and final deployment. Whether
                  it’s an e-commerce platform, a business website, or a custom
                  web solution, I ensure every product is stable, responsive,
                  and optimized for growth.
                </p>

                <p>
                  I’m committed to clear communication, timely delivery, and a
                  maintainable codebase that scales with your business. If
                  you're looking for a reliable developer who can transform
                  ideas into polished, production-ready applications, my
                  portfolio demonstrates the quality and consistency I bring to
                  every project.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-b border-border mx-6 my-4" />

          <div className="p-3 md:p-6 space-y-8 md:space-y-12">
            {/* Tools */}
            <div className="">
              <h3 className="text-xl md:text-[28px] font-medium mb-6">
                Technologies I Work With
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
                {skillsData.map((skill: TSkill, index: number) => (
                  <ToolBadge key={index} skill={skill} />
                ))}
              </div>
            </div>

            {/* Stats */}
            <Stats />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
