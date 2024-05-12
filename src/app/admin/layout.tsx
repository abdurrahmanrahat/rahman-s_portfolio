"use client";

import MobileMenu from "@/components/Dashboard/shared/MobileMenu";
import Sidebar from "@/components/Dashboard/shared/Sidebar";
import { ReactNode } from "react";

// export const metadata: Metadata = {
//   title: "Dashboard || Portfolio of Rahman",
// };

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  // const router = useRouter();
  // // get user info
  // const userInfo = getUserInfo();

  // if (!userInfo) {
  //   return router.push("/");
  // }

  return (
    <div className="md:grid grid-cols-12">
      <div className="hidden md:block col-span-2">
        <Sidebar></Sidebar>
      </div>

      {/* for mobile */}
      <MobileMenu />

      <div className="col-span-10 h-full">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
