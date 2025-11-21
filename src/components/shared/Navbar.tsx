"use client";

import { getUserInfo } from "@/services/auth.services";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import ActiveLink from "../ui/ActiveLink";
import Container from "../ui/Container";
import MyButton from "../ui/MyButton";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  // get user info
  const userInfo = getUserInfo();

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Projects", url: "/projects" },
    { id: 3, text: "Blogs", url: "/blogs" },
    { id: 4, text: "About", url: "/about" },
    { id: 5, text: "Contact", url: "/contact" },
  ];

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Function to handle clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <div
      className="relative bg-dark text-white border-b border-border"
      ref={navRef}
    >
      <Container className="py-5 lg:py-4">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link href="/">
            <span className="font-bold text-xl xl:text-2xl 2xl:text-3xl bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent ">
              ARahman
            </span>
          </Link>

          {/* Nav items section */}
          <ul className="hidden lg:flex space-x-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <ActiveLink href={`${item.url}`} exact={item.id === 1}>
                  {item.text}
                </ActiveLink>
              </li>
            ))}
            {userInfo?.role === "ADMIN" && (
              <li>
                <ActiveLink href="/admin">Dashboard</ActiveLink>
              </li>
            )}
          </ul>

          {/* Mobile Navigation Icon */}
          <div onClick={handleNavToggle} className="block lg:hidden ">
            {isOpenMenu ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" />
            )}
          </div>

          {/* Mobile menu */}
          {/* Mobile menu with animation */}
          <AnimatePresence>
            {isOpenMenu && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden absolute top-[70px] left-0 w-full z-999 bg-dark border-b border-border"
              >
                <div className="w-[92%] mx-auto py-5">
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <li key={item.id} className="list-none">
                        <ActiveLink href={item.url} exact={item.id === 1}>
                          {item.text}
                        </ActiveLink>
                      </li>
                    ))}
                    {userInfo?.role === "ADMIN" && (
                      <li className="list-none">
                        <ActiveLink href="/admin">Dashboard</ActiveLink>
                      </li>
                    )}
                    <Link href={`/`}>
                      <MyButton
                        mobileText="Resume"
                        desktopText="View Resume"
                        isOutline={true}
                        icon={<IoMdArrowForward />}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Navlinks end */}

          <div className="hidden lg:block">
            <Link href={`/`}>
              <MyButton
                mobileText="Resume"
                desktopText="View Resume"
                isOutline={true}
                icon={<IoMdArrowForward />}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
