import LordIcon from "./LordIcon";
import { navLinks, socials } from "@/constants";

const Navbar = () => {
  return (
    <header className="con-px flex justify-between pt-5 items-center fixed w-full z-20 abs-x-center">
      <button
        type="button"
        className="btn bg-black/75 border-black font-bold uppercase text-[15px]"
      >
        action
      </button>
      <nav className="gap-16 items-center hidden md:flex">
        {navLinks.map((link) => (
          <a
            className="uppercase font-semibold text-sm"
            key={link}
            href={`#${link}`}
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="flex gap-3 items-center">
        {socials.map(({ title, link, icon }) => {
          let size = 34;
          if (title == "X/twitter") {
            size = 30;
          }
          return (
            <a className="inline-block" href={link} key={title}>
              <LordIcon icon={icon} size={size} />
            </a>
          );
        })}
      </div>
    </header>
  );
};
export default Navbar;
