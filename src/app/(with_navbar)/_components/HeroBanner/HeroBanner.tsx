"use client";

import Container from "@/components/Ui/Container";
import MyButton from "@/components/Ui/MyButton";
import MYImage from "@/components/Ui/MYImage";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
  const whatsAppNumber = "8801820897892";
  const baseUrl = "https://api.whatsapp.com/send/";
  const encodedMessage = "Hi there, is there anyone to assist me?";
  const whatsAppLink = `${baseUrl}?phone=${whatsAppNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

  return (
    <div className="relative">
      <Container>
        <div className="lg:flex flex-row-reverse items-center justify-center lg:gap-4 overflow-hidden lg:min-h-screen lg:px-10 py-8 lg:py-0">
          {/* Image Section */}
          <div className="lg:w-1/2 overflow-hidden flex justify-center items-center mb-16 lg:mb-0">
            <MYImage
              src={`/images/rahat/rahat.png`}
              className=""
              alt="person image"
              width={440}
              height={400}
              // data-aos="fade-left"
              // data-aos-duration="2000"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 flex flex-col gap-y-4 justify-center items-center md:items-start my-12 lg:my-0">
            <div>
              <span className="px-6 py-2 bg-primary rounded-tr-full rounded-tl-full rounded-bl-full text-dark font-medium">
                Hello There!
              </span>
              <div className="mt-3">
                <h2 className="text-[32px] md:text-[40px] lg:text-[50px] font-semibold">
                  I'M ABDUR RAHMAN
                </h2>
                <span className="text-primary text-[20px] md:text-[26px] italic">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      1500,
                      "AI Workflow Engineer",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: "inline-block" }}
                    repeat={Infinity}
                    cursor={false}
                  />
                </span>
              </div>
            </div>
            <p
              className="text-center md:text-start md:text-[17px]"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              I am a professional Web Developer specialized in MERN Stack
              building modern, scalable, and high-performance web applications.
              I have experience with 10+ project completions from scratch to
              deployment.
            </p>

            {/* social icons + hire button */}
            <div className="flex gap-1.5 md:gap-2 justify-between md:justify-start">
              <Link
                href={whatsAppLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <MyButton
                  mobileText="Chat Real-Time"
                  //   mobileText="WhatsApp"
                  desktopText="Chat Real-Time"
                  isOutline={false}
                  icon={<FaWhatsapp className="w-5 h-5 md:w-7 md:h-7" />}
                />
              </Link>
              {/* <Link href={`/contact`}>
                <MyButton
                  mobileText="Meeting"
                  desktopText="Schedule Meeting"
                  isOutline={true}
                  icon={<SiGooglemeet className="w-5 h-5 md:w-7 md:h-7" />}
                />
              </Link> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;

// 👋
