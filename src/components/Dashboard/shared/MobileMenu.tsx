"use client";

import ActiveLink from "@/components/ui/ActiveLink";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { removeUser } from "@/services/auth.services";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiArticleNyTimes } from "react-icons/pi";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setToggle(!toggle);
  };

  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    deleteCookies();
    router.push("/");
  };

  return (
    <div className="md:hidden relative">
      <div className="flex justify-between px-10 py-2 shadow-my-shadow">
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
            ? "fixed lg:hidden top-0 left-0 w-[70%] h-full bg-[#ddd] ease-in-out duration-700 z-999 p-[20px]"
            : "ease-in-out duration-700 w-[70%] fixed top-0 bottom-0 -left-full z-999"
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
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-primary transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink exact href="/admin/add-skill">
              <div className="flex items-center gap-2">
                <IoMdAddCircleOutline className="text-[18px]" />
                <span className="truncate">Add Skill</span>
              </div>
            </ActiveLink>
          </div>
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-primary transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink exact href="/admin/add-project">
              <div className="flex items-center gap-2">
                <BiImageAdd className="text-[18px]" />
                <span className="truncate">Add Project</span>
              </div>
            </ActiveLink>
          </div>
          <div
            className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-primary transition-all duration-500"
            onClick={handleNavToggle}
          >
            <ActiveLink exact href="/admin/add-article">
              <div className="flex items-center gap-2">
                <PiArticleNyTimes className="text-[18px]" />
                <span className="truncate">Add Article</span>
              </div>
            </ActiveLink>
          </div>

          {/* logout button */}
          <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500 cursor-pointer">
              <IoArrowUndoCircleOutline className="text-[18px]" />
              <span className="truncate" onClick={handleLogout}>
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
