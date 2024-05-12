"use client";

import ActiveLink from "@/components/ui/ActiveLink";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="md:hidden relative">
      <div className="flex justify-between px-10 py-2 custom-shadow">
        <div>
          <Link onClick={() => setToggle((prev) => !prev)} href="/">
            <h1 className="text-3xl font-bold uppercase">Rahman</h1>
          </Link>
        </div>

        {/* Mobile Navigation Icon */}
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="block lg:hidden"
        >
          {toggle ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      <div
        className={
          toggle
            ? "fixed lg:hidden top-0 left-0 w-[70%] h-full bg-[#ddd] ease-in-out duration-700 z-[999] p-[20px]"
            : "ease-in-out duration-700 w-[70%] fixed top-0 bottom-0 left-[-100%] z-[999]"
        }
      >
        <div className="mb-5">
          <Link onClick={() => setToggle((prev) => !prev)} href="/">
            <h1 className="text-3xl font-bold uppercase">Rahman</h1>
          </Link>
        </div>

        <div className="mt-4 space-y-2">
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-primary transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink exact href="/admin">
              <div className="flex items-center gap-2">
                <LuLayoutDashboard className="text-[18px]" />
                <span className="truncate">Dashboard</span>
              </div>
            </ActiveLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
