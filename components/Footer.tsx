import { socials } from "@/constants";
import LordIcon from "./LordIcon";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-6 border-off-white border-t-2 gap-3 con-px font-semibold text-center flex justify-between items-center">
      <p className="text-sm text-left sm:text-base">
        © {year}{" "}
        <span className="text-green-300 underline">Raymond Ogbuehi</span>. All
        rights reserved
      </p>
      <div className="flex gap-3 items-center sm:gap-5">
        {socials.map(({ title, link, icon }) => {
          let size = 35;
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
    </footer>
  );
};
export default Footer;
