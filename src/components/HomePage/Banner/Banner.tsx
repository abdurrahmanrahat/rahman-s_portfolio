import LottieShow from "@/components/ui/LottieShow";
import TypeContent from "@/components/ui/TypeContent";
import { LiaDownloadSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <div className="mx-[5.1%] min-h-screen flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="md:w-1/2 flex flex-col justify-center gap-4 mt-[24px]">
        <div>
          <h3 className="heading_text">Hi! ME Abdur Rahman Rahat</h3>
          <div className="text-[24px] md:text-[28px] font-medium">
            I&apos;m <TypeContent />
          </div>
        </div>

        <p className="desc_text max-w-[60ch]">
          I am a Front-End Developer currently focusing on mastering React JS
          and Next JS for expanding my skills to create dynamic and interactive
          web applications.
        </p>

        <span className="mt-[12px]">
          <a
            href="/resume.pdf"
            className="custom_button"
            download="resume_of_abdur_rahman"
          >
            Resume <LiaDownloadSolid className="inline-flex font-bold" />
          </a>
        </span>
      </div>
      <div className="md:w-1/2 flex justify-center items-center mt-[80px] md:mt-[24px] z-[-99]">
        <LottieShow />
      </div>
    </div>
  );
};

export default Banner;
