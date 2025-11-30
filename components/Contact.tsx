import { Mail, RocketIcon } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { containerVariants } from "@/motion-variants";
import { motion, stagger } from "motion/react";
import Loader from "./loader";
import PlayIconOnce from "./PlayIconOnce";
import heart from "../public/animated-icons/wired-outline-20-love-heart-in-reveal.json";
import { toast } from "sonner";
import { useEffect } from "react";

const childVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  hide: {
    opacity: 0,
    y: 20,
  },
};

const thankyouVariants = {
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.4),
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 1,
  },
};

const Contact = () => {
  const [formState, handleSubmit] = useForm("xdkwjknd");

  useEffect(() => {
    if (formState.errors) {
      toast.error("Unable to submit form");
    }
  }, [formState.errors]);

  return (
    <section
      id="contact"
      className="section-px mt-26 mb-30 max-w-[1028px] mx-auto"
    >
      <motion.h2
        viewport={{
          once: true,
        }}
        variants={childVariants}
        initial="hide"
        whileInView="show"
        className="mb-8 sm:mb-10 lg:mb-15"
      >
        Contact
      </motion.h2>
      <motion.div
        variants={childVariants}
        viewport={{
          once: true,
        }}
        initial="hide"
        whileInView="show"
        className="font-semibold text-white text-center justify-center text-sm sm:flex sm:items-center sm:gap-5 sm:font-bold lg:text-base"
      >
        <h4 className="uppercase ">Don't be shy. Get in touch! </h4>
        <div className="border-l h-4 border-white hidden sm:block"></div>
        <h4 className="uppercase mt-1 sm:mt-0">
          <a className="text-green-300 underline" href="mailto:raymondogb@gmail.com">
            Send an email
          </a>{" "}
          or fill out the form.
        </h4>
      </motion.div>
      <motion.section
        variants={containerVariants}
        initial="hide"
        whileInView="show"
        viewport={{
          once: true,
        }}
        className="relative mt-6 text-white"
      >
        {formState.succeeded ? (
          <motion.div
            variants={thankyouVariants}
            initial="hide"
            animate="show"
            className="space-y-5 h-[606px] justify-center gap- flex flex-col items-center border border-[#fff] px-3 py-5 rounded-[22px] w-[97%] bg-background sm:rounded-[28px] sm:p-5 sm:h-[504px] lg:w-[98%]"
          >
            <motion.h4
              variants={childVariants}
              className="text-4xl font-audiowide"
            >
              Thank you!
            </motion.h4>
            <motion.p variants={childVariants} className="font-medium">
              Your response has been received. I'll get back to you ASAP.
            </motion.p>
            <div className="animate-beat">
              <PlayIconOnce icon={heart} size={80} />
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 border border-[#fff] px-3 py-5 rounded-[22px] sm:rounded-[28px] sm:p-5 w-[97%] lg:w-[98%] bg-background"
          >
            <div className="space-y-5 sm:space-y-0 sm:grid sm:grid-cols-[48%_48%] sm:justify-between">
              <motion.div variants={childVariants} className="form-field">
                <label htmlFor="first-name">
                  First Name <span className="text-green-300">*</span>
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="first-name"
                  placeholder="Abel"
                  required
                />
                <ValidationError
                  prefix="First Name"
                  field="firstName"
                  errors={formState.errors}
                />
              </motion.div>
              <motion.div variants={childVariants} className="form-field">
                <label htmlFor="last-name">
                  Last Name <span className="text-green-300">*</span>
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="last-name"
                  placeholder="Tesfaye"
                />
                <ValidationError
                  prefix="Last Name"
                  field="lastName"
                  errors={formState.errors}
                />
              </motion.div>
            </div>
            <motion.div variants={childVariants} className="form-field">
              <label htmlFor="email">
                Email Address <span className="text-green-300">*</span>
              </label>
              <input
                name="email"
                type="email"
                id="email"
                placeholder="abeltesfaye@example.com"
                required
              />
              <ValidationError
                className="mt-2 text-red-500"
                prefix="Text"
                field="email"
                errors={formState.errors}
              />
            </motion.div>
            <motion.div variants={childVariants} className="form-field">
              <label htmlFor="message" id="message">
                Message <span className="text-green-300">*</span>
              </label>
              <textarea
                name="message"
                required
                id="message"
                rows={5}
                placeholder="Your message here..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={formState.errors}
              />
            </motion.div>
            <motion.button
              variants={childVariants}
              whileTap={{
                scale: 0.9,
              }}
              className="bg-[#262626] w-[134px] h-12 px-5 py-3 font-bold rounded-full duration-300 transition-colors font-audiowide cursor-pointer flex gap-3 items-center hover:text-green-300 hover:outline outline-green-300 mt-8 group"
              type="submit"
            >
              {formState.submitting ? (
                <div className="mx-auto">
                  <Loader />
                </div>
              ) : (
                <>
                  Submit
                  <RocketIcon className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </>
              )}
            </motion.button>
          </form>
        )}

        <div className="absolute border-white border size-full top-[2.5%] -z-10 rounded-[22px] w-[94%] sm:rounded-[28px] sm:w-[96%] right-0 sm:top-[4%]"></div>
      </motion.section>
    </section>
  );
};
export default Contact;
