import Image from "next/image";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="bg">
      <section className="con-px noise relative z-10 h-[90vh] min-h-[667px] flex flex-col justify-center sm:min-h-[800px] lg:h-screen">
        <div className="flex flex-col items-center gap-5 sm:gap-2 lg:flex-row lg:justify-center lg:gap-5">
          <Image
            src="/personal-images/raymond-1.jpeg"
            width={3024}
            height={4032}
            alt="raymond"
            className="size-[200px] object-cover object-bottom rounded-4xl sm:size-[250px]"
          />
          <div className="text-center text-6xl sm:text-[75px] min-[50rem]:text-[90px] lg:text-left">
            <h1>Raymond</h1>
            <h1>Ogbuehi</h1>
          </div>
        </div>
        <div className="con-px text-[15px] absolute bottom-8 w-full left-0 sm:bottom-20 sm:text-base md:bottom-25 min-[50rem]:bottom-12 lg:flex lg:justify-between">
          <p className="text-center italic font-semibold max-w-[430px] mx-auto lg:mx-0 lg:max-w-[370px]">
            Building clean, efficient, and user-focused web solutions — one line
            of code at a time.
          </p>
          <p className="text-center italic font-semibold hidden max-w-[430px] lg:block lg:max-w-[370px]">
            Dedicated to crafting seamless user experiences with thoughtful
            design
          </p>
        </div>
      </section>
    </section>
  );
};
export default Hero;
