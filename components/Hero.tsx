import Image from "next/image";

const Hero = () => {
  return (
    <section className="text-white bg">
      <section className="con-px relative h-screen pt-37 lg:min-h-[650px]">
        <div className="flex justify-between">
          <p className=" text-sm w-40 mb-5 italic font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi architecto ex velit.
          </p>
          <Image
            className="w-50 rounded-3xl object-cover object-bottom"
            src={"/personal-images/raymond-1.jpeg"}
            alt="raymond"
            width={3024}
            height={4032}
          ></Image>
        </div>

        <div className="lg:absolute lg:w-[84%] lg:bottom-0 lg:flex lg:pb-10 lg:items-end lg:justify-between">
          <div>
            <h1 className="lg:text-[100px] lg:leading-25 lg:font-[100] tracking-tight">
              Raymond
            </h1>
            <h1 className="lg:text-[160px] lg:leading-40 font-extralight tracking-tight text-white">
              Ogbuehi
            </h1>
          </div>
          <p className="text-right text-sm w-40 mb-5 italic font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo?
          </p>
        </div>
      </section>
    </section>
  );
};
export default Hero;
