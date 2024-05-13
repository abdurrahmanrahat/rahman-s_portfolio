"use client";

import ActiveLink from "@/components/ui/ActiveLink";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { removeUser } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiImageAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiArticleNyTimes } from "react-icons/pi";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    removeUser();
    deleteCookies();
    router.push("/");
  };

  return (
    <aside className="h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 custom_shadow border-r border-text-gray">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="mb-2">
          <h1 className="text-3xl font-bold uppercase">Rahman</h1>
        </Link>

        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin" exact>
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
              <LuLayoutDashboard className="text-[18px]" />
              <span className="truncate">Dashboard</span>
            </div>
          </ActiveLink>
        </div>
        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin/add-skill">
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
              <IoMdAddCircleOutline className="text-[18px]" />
              <span className="truncate">Add Skill</span>
            </div>
          </ActiveLink>
        </div>
        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin/add-project">
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
              <BiImageAdd className="text-[18px]" />
              <span className="truncate">Add Project</span>
            </div>
          </ActiveLink>
        </div>
        <div className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin/add-article">
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
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
      </nav>
    </aside>
  );
};

export default Sidebar;
