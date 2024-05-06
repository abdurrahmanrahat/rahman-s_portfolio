// import MyPhoto from "@/assets/rahat.jpg";
import MyPhoto from "@/assets/rahman'sPic.jpg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="about" className="mx-[5.1%] pt-[80px] md:pt-[120px]">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[40px]">
        <div className="md:w-1/3">
          <div>
            <Image src={MyPhoto} className="rounded" alt="rahat" />
          </div>
        </div>
        <div className="md:w-2/3 space-y-[20px]">
          <div className="text-center">
            <span className="text-[24px] font-semibold uppercase border-b-2 border-primary">
              About Me
            </span>
          </div>
          <p className="desc_text">
            I am a MERN based Fronted developer experienced with Next.js, and I
            am currently studying English Language & Literature. My goal is to
            gain extensive experience in the above-mentioned field and make
            myself one of the best to become a master developer. Currently, I am
            also expanding my skills by learning deep backed technologies. By
            mastering these, I am enhancing my ability to build dynamic and
            high-performance websites that provide a seamless user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
