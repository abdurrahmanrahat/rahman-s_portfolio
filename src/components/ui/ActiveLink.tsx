"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type TActiveLinkProps = {
  href: string;
  exact?: boolean;
  children: ReactNode;
};

const ActiveLink = ({ href, exact = false, children }: TActiveLinkProps) => {
  const path = usePathname();
  const active = exact ? path == href : path.startsWith(href);

  return (
    <Link
      href={href}
      className={`${
        active ? "text-dark bg-primary " : ""
      } text-lg px-5 py-2 hover:bg-primary hover:text-dark rounded-full transition-all duration-300 font-medium`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
