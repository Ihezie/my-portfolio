"use client";

import Image from "next/image";
const AnimatedBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative overflow-hidden">
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <Image
            key={index}
            src="/blob.gif"
            className={`absolute -z-20 size-100 ${
              index === 2 ? "bottom-0 right-0 !size-100" : ""
            } ${index === 3 ? "bottom-1/2 left-1/2 !size-60" : ""} ${
              index === 4 ? "bottom-0 left-0 !size-60" : ""
            }`}
            width={440}
            height={440}
            alt="blob"
          />
        );
      })}
      {children}
    </section>
  );
};
export default AnimatedBackground;
