"use client";

import LordIcon from "./LordIcon";
import { navLinks, socials } from "@/constants";
import useResponsive from "@/hooks/useResponsive";
import { useEffect, useState, useRef } from "react";
import documentIcon from "../public/animated-icons/wired-outline-56-document-hover-swipe.json";

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

  const playerConRef = useRef<HTMLDivElement>(null);

  const isSmall = useResponsive("width >= 640px");

  return (
    <>
      <header className="nav-footer-px absolute flex justify-between pt-5 items-center w-full z-20 abs-x-center">
        <button
          onMouseEnter={() => {
            const mouseEvent = new MouseEvent("mouseover");
            playerConRef.current?.dispatchEvent(mouseEvent);
          }}
          onMouseLeave={() => {
            const mouseEvent = new MouseEvent("mouseout");
            playerConRef.current?.dispatchEvent(mouseEvent);
          }}
          className="border-[1.5px] cursor-pointer text-sm px-2.5 py-1.5 rounded-full duration-500 transition-colors font-audiowide flex gap-2 items-center hover:text-green-300 hover:border-green-300 group sm:text-base sm:px-3"
          type="submit"
        >
          {/* <LordIcon
            icon={documentIcon}
            size={isSmall ? 20 : 18}
            playerConRef={playerConRef}
          /> */}
          Resume
        </button>
        <div className="flex gap-3 items-center sm:gap-5">
          {socials.map(({ title, link, icon }) => {
            let size = 37;
            if (title == "X/twitter") {
              size = 33;
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
        className={`gap-5 items-center flex bottom-[5vh] abs-x-center fixed py-2.5 px-5 sm:px-7 rounded-full backdrop-blur-xs bg-black/50 duration-300 sm:gap-11 border border-gray-800 transition-transform z-20 ${
          isVisible ? "" : "translate-y-[100px]"
        }`}
      >
        {navLinks.map((link) => (
          <a
            className="capitalize text-[13px] sm:text-base font-audiowide hover:text-green-300"
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
