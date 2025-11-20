import { RocketIcon } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

const Contact = () => {
  const [formState, handleSubmit] = useForm("xdkwjknd");

  return (
    <section className="section-px mt-26 mb-30 max-w-[1028px] mx-auto">
      
      <h2 id="contact" className="mb-8 sm:mb-10 lg:mb-15">
        Contact
      </h2>
      <div className="font-semibold text-white text-center justify-center text-sm sm:flex sm:items-center sm:gap-5 sm:font-bold">
        <h4 className="uppercase ">Don't be shy. Get in touch! </h4>
        <div className="border-l h-4 border-white hidden sm:block"></div>
        <h4 className="uppercase mt-1 sm:mt-0">
          <a className="text-green-300 underline" href="mailto:">
            Send an email
          </a>{" "}
          or fill out the form.
        </h4>
      </div>
      <section className="relative mt-6 text-white">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 border border-[#fff] px-3 py-5 rounded-[22px] sm:rounded-[28px] sm:p-5 w-[97%] lg:w-[98%] bg-background"
          action=""
        >
          <div className="space-y-5 sm:space-y-0 sm:grid sm:grid-cols-[48%_48%] sm:justify-between">
            <div className="form-field">
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
            </div>
            <div className="form-field">
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
            </div>
          </div>
          <div className="form-field">
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
          </div>
          <div className="form-field">
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
          </div>
          <button
            className="bg-[#262626] px-5 py-3 font-bold rounded-full duration-300 transition-colors font-audiowide cursor-pointer flex gap-3 items-center hover:text-green-300 hover:outline outline-green-300 mt-8 group"
            type="submit"
          >
            Submit
            <RocketIcon className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
          </button>
        </form>
        <div className="absolute border-white border size-full top-[2.5%] sm:top-[4%] -z-10 rounded-[22px] w-[94%] sm:rounded-[28px] sm:w-[96%] right-0 "></div>
      </section>
    </section>
  );
};
export default Contact;
