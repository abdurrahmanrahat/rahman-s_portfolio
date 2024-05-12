import ActiveLink from "@/components/ui/ActiveLink";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5 custom_shadow border-r border-text-gray">
      <nav className="flex flex-col gap-2">
        <Link href="/" className="mb-2">
          <h1 className="text-3xl font-bold uppercase">Rahman</h1>
        </Link>

        <p className="font-semibold text-[14px] md:text-[17px] 2xl:text-[18px] hover:text-secondary-text transition-all duration-500">
          <ActiveLink href="/admin">
            <div className="flex items-center gap-2">
              <LuLayoutDashboard className="text-[18px]" />
              <span className="truncate">Dashboard</span>
            </div>
          </ActiveLink>
        </p>
      </nav>
    </aside>
  );
};

export default Sidebar;
