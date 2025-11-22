import AboutMe from "../_components/AboutMe/AboutMe";

const AboutPage = () => {
  return (
    <div className="my-14 md:my-24">
      {/* title section */}
      {/* <div className="relative w-full h-auto py-[20px] flex items-center gap-5">
        <h3 className="inline-flex items-center text-[20px] font-medium">
          About{" "}
          <span className="text-[14px] font-light ml-[10px] opacity-80">
            Myself
          </span>
        </h3>
        <i className="relative w-full h-px bg-text-gray"></i>
      </div> */}

      <AboutMe />
    </div>
  );
};

export default AboutPage;
