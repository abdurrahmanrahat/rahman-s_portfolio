"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import ActiveLink from "../ui/ActiveLink";
import Container from "../ui/Container";
import MyButton from "../ui/MyButton";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNavToggle = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Projects", url: "/projects" },
    { id: 3, text: "Blogs", url: "/blogs" },
    { id: 4, text: "About", url: "/about" },
  ];

  // Function to handle clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (isOpenMenu && !document.getElementById("navbar")?.contains(target)) {
        setIsOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenMenu]);

  return (
    <div className="bg-dark text-white border-b border-border">
      <Container className="py-5 lg:py-4">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <Link href="/">
            <div className="">
              {/* <img src={Logo} className="w-48 rounded" alt="" /> */}
              <h2 className="text-xl font-medium">Rahman&apos;S Portfolio</h2>
            </div>
          </Link>

          {/* Nav items section */}
          <ul className="hidden lg:flex space-x-3">
            {navItems.map((item) => (
              <li key={item.id} className="">
                <ActiveLink href={`${item.url}`}>{item.text}</ActiveLink>
              </li>
            ))}
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
          <div
            id="navbar"
            className={`fixed lg:hidden top-0 left-0 w-[70%] h-screen bg-dark text-white ease-in-out duration-700 z-[999] p-[20px] ${
              isOpenMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* logo and close toggle icon */}
            <div className="my-5 flex justify-center items-center">
              <div className="">
                {/* <img src={Logo} className="w-40 rounded" alt="" /> */}
                <h2>Rahman&apos;S</h2>
              </div>
            </div>

            {/* mobile nav items */}
            <nav className="mx-10 mt-16">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <li key={item.id} onClick={handleNavToggle}>
                    <ActiveLink href={`${item.url}`}>{item.text}</ActiveLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Mobile Navlinks end */}

          <div className="hidden lg:block">
            <Link href={`/contact`}>
              <MyButton
                mobileText="Resume"
                desktopText="View Resume"
                isOutline={false}
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
