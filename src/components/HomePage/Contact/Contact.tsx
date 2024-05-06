import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const Contact = () => {
  return (
    <div className="mx-[5.1%] py-[80px] md:py-[120px] md:flex">
      <div className="md:w-1/2 mb-[40px] md:mb-0">
        <div className="text-start">
          <span className="text-[24px] font-semibold uppercase border-b-2 border-primary">
            Say Hello!
          </span>
        </div>
        <form
          action="https://formspree.io/f/moqoandr"
          method="POST"
          className="md:w-2/3 mx-auto mt-8"
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name*"
              className="w-full px-3 py-2 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
              className="w-full px-3 py-2 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              name="massage"
              id="massage"
              placeholder="Message*"
              cols={30}
              rows={3}
              className="w-full px-3 py-2 focus:outline-none text-md border border-gray-200 bg-[#F2F2F2]"
              required
            ></textarea>
          </div>

          <button type="submit" className="custom_button">
            Send <IoArrowForward className="inline-flex" />
          </button>
        </form>
      </div>

      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="space-y-[12px]">
          <h2 className="heading_text">Connect with me</h2>
          <div className="mdesc_text">
            <p className="">
              <span>
                <AiOutlineMail className="inline text-xl text-text" />{" "}
                abdurrahmanrahat47@gmail.com
              </span>
            </p>
            <p className="text-lg">
              <span>
                <FaPhoneAlt className="inline text-xl text-text" />{" "}
                +8801820897892
              </span>
            </p>
            <p className="text-lg">
              <span>
                <SlLocationPin className="inline text-xl text-text" />{" "}
                Lakshmipur, Bangladesh
              </span>
            </p>
          </div>

          <h2 className="text-2xl font-semibold">Social contact</h2>
          <div className="flex gap-6 text-2xl">
            <Link
              href="https://www.linkedin.com/in/abdurrahmanrahat47/"
              className="hover:text-primary duration-500"
            >
              <FaLinkedinIn />
            </Link>
            <Link href={"/"} className="hover:text-primary duration-500">
              <FaWhatsapp />
            </Link>
            <Link
              href="https://github.com/abdurrahmanrahat"
              className="hover:text-primary duration-500"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.instagram.com/abdurrahmanrahat47/"
              className="hover:text-primary duration-500"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
