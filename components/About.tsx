import { skills } from "@/constants";
import Image from "next/image";
const About = () => {
  return (
    <section className="mt-26 section-px">
      <h2 id="about" className="mb-5 lg:mb-15">
        About
      </h2>
      <div className="lg:grid lg:grid-cols-[55%_40%] xl:grid-cols-[62%_33%] lg:gap-[5%] lg:items-start">
        <div className="relative rounded-3xl mb-14 md:order-2">
          <Image
            className="rounded-3xl max-h-[450px] object-cover w-[96%] sm:w-[98%] lg:w-[96%] lg:max-h-none"
            src="/personal-images/raymond-3.jpeg"
            width={3024}
            height={4032}
            alt="raymond"
          />
          <div className="absolute border-white border-[1.5px] size-full top-[4%] -z-10 rounded-3xl w-[96%] right-0 "></div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              deserunt aspernatur eligendi provident adipisci laborum.
              Voluptates vitae fugit hic architecto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iusto, dignissimos.
            </p>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              deserunt aspernatur eligendi provident adipisci laborum.
              Voluptates vitae fugit hic architecto. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iusto, dignissimos.
            </p>
            <p className="font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              deserunt aspernatur eligendi provident adipisci laborum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              dignissimos.
            </p>
          </div>
          <h3 className="mt-6">Skills</h3>
          <div className="flex flex-wrap gap-3 mt-6 overflow-hidden items-center mb-20">
            {skills.map(({ tech, logo }) => {
              const darkTheme = ["Motion", "React", "GSAP"];
              return (
                <div
                  key={tech}
                  className={`font-bold text-black px-[6px] py-[2px] rounded flex items-center ${
                    darkTheme.includes(tech)
                      ? "bg-gray-800 text-white"
                      : "bg-white"
                  }`}
                >
                  <Image
                    src={logo}
                    alt={tech}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    // Add a favourite stuff section
  );
};
export default About;
