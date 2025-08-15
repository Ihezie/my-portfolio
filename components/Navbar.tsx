"use client";

import LordIcon from "./LordIcon";
import { navLinks, socials } from "@/constants";
import useResponsive from "@/hooks/useResponsive";
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

  const isLarge = useResponsive("width >= 1024px");
  return (
    <>
      <header className="con-px absolute flex justify-between pt-5 items-center w-full z-20 abs-x-center">
        <button
          type="button"
          className="btn bg-black/75 border-black uppercase text-sm"
        >
          action
        </button>

        <div className="flex gap-3 items-center sm:gap-5">
          {socials.map(({ title, link, icon }) => {
            let size = isLarge ? 35 : 32;
            if (title == "X/twitter") {
              size = isLarge ? 31 : 27;
            }
            return (
              <a className="inline-block" href={link} key={title}>
                <LordIcon icon={icon} size={size} />
              </a>
            );
          })}
        </div>
      </header>
      <nav
        className={`gap-5 items-center flex bottom-[5vh] abs-x-center fixed py-2.5 px-5 sm:px-7 rounded-full backdrop-blur-xs bg-black/40 duration-300 sm:gap-11 border border-gray-800 transition-transform z-20 ${
          isVisible ? "" : "translate-y-[100px]"
        }`}
      >
        {navLinks.map((link) => (
          <a
            className="capitalize text-[13px] sm:text-base font-audiowide"
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
