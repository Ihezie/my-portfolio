"use client";

import LordIcon from "./LordIcon";
import { navLinks, socials } from "@/constants";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPosition, setPreviousScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentScrollPosition = scrollY;
    if (currentScrollPosition > prevScrollPosition) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setPreviousScrollPosition(currentScrollPosition);
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <>
      <header className="nav-footer-px absolute flex justify-between pt-5 items-center w-full z-20 abs-x-center">
        <button
          className="border-[1.5px] text-white cursor-pointer text-sm px-2.5 py-1.5 rounded-full duration-400 transition-all font-audiowide flex gap-2 items-center relative hover:text-green-300 hover:border-green-300 group sm:text-base sm:px-3 lg:w-24 lg:hover:w-30 "
          type="submit"
        >
          <a href="/Raymond_Ogbuehi_Resume_Frontend_Developer.pdf" download>
            Resume
          </a>
          <Download className="size-5 absolute duration-400 transition-all hidden lg:block right-2.5 opacity-0 group-hover:opacity-100 -z-10" />
        </button>
        <div className="flex gap-3 items-center sm:gap-5">
          {socials.map(({ title, link, icon }) => {
            let size = 37;
            if (title == "X/twitter") {
              size = 33;
            }
            return (
              <a
                aria-label={title}
                target="_blank"
                className="inline-block"
                href={link}
                key={title}
              >
                <LordIcon icon={icon} size={size} />
              </a>
            );
          })}
        </div>
      </header>
      <nav
        className={`gap-5 items-center flex bottom-[5vh] abs-x-center fixed py-2.5 px-5 sm:px-7 rounded-full backdrop-blur-xs bg-black/50 duration-300 sm:gap-11 border border-gray-800 transition-transform z-20 ${
          isVisible ? "" : "translate-y-[100px]"
        }`}
      >
        {navLinks.map((link) => (
          <a
            className="capitalize text-[13px] sm:text-base font-audiowide text-white hover:text-green-300"
            key={link}
            href={`#${link}`}
          >
            {link}
          </a>
        ))}
      </nav>
    </>
  );
};
export default Navbar;
