"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ActiveLink from "../ui/ActiveLink";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="shadow-xl w-full fixed">
      <div className="mx-[5.1%] flex justify-between items-center h-16 md:h-20 px-4 md:px-0 text-white">
        {/* Logo */}
        <div>
          <h2 className="text-text text-[24px] md:text-[32px] lg:text-[36px] font-medium">
            Rahman&apos;<span className="text-primary">S</span> Portfolio
          </h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center gap-[20px] lg:gap-[24px] text-text text-[19px] lg:text-[20px]">
          <li>
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/projects">Projects</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/blogs">Blogs</ActiveLink>
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden text-black">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-text-gray bg-white ease-in-out duration-700 p-[20px]"
              : "ease-in-out duration-700 w-[70%] fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="mb-[8px]">
            <h2 className="text-text text-[24px] md:text-[32px] lg:text-[36px] font-medium">
              Rahman&apos;<span className="text-primary">S</span> Portfolio
            </h2>
          </div>

          <ul className="space-y-[4px]">
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about">About</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/projects">Projects</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blogs">Blogs</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
