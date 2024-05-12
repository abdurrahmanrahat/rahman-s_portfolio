import ActiveLink from "@/components/ui/ActiveLink";
import Link from "next/link";
import { BiImageAdd } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiArticleNyTimes } from "react-icons/pi";

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 custom_shadow border-r border-text-gray">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="mb-2">
          <h1 className="text-3xl font-bold uppercase">Rahman</h1>
        </Link>

        <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin" exact>
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
              <LuLayoutDashboard className="text-[18px]" />
              <span className="truncate">Dashboard</span>
            </div>
          </ActiveLink>
        </p>
        <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin/add-skill">
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
              <IoMdAddCircleOutline className="text-[18px]" />
              <span className="truncate">Add Skill</span>
            </div>
          </ActiveLink>
        </p>
        <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin/add-project">
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
              <BiImageAdd className="text-[18px]" />
              <span className="truncate">Add Project</span>
            </div>
          </ActiveLink>
        </p>
        <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px]">
          <ActiveLink href="/admin/add-article">
            <div className="flex items-center gap-2 hover:text-primary transition-all duration-500">
              <PiArticleNyTimes className="text-[18px]" />
              <span className="truncate">Add Article</span>
            </div>
          </ActiveLink>
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;
