"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

const page = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="container px-5 py-24   mx-auto flex flex-col md:w-1/2 mt-20">
          <div className="w-full ">
            <h1 className="uppercase text-lg md:text-7xl text-center font-sans mb-8 text-white font-bold">
              Contact Us
            </h1>
            <p className="leading-relaxed mb-5 text-gray-400 text-center sm:text-pretty">
              We are here to help with any questions about our courses, programs
              or events. Reach out and let us know how we can assist you in your
              musical journey.
            </p>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="w-full bg-gray-900 rounded border border-gray-800 focus:border-gray-600  text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message.."
                className="w-full bg-gray-900 rounded border border-gray-800 focus:border-gray-600  h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-black  bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Caution: This is just a fun ui project and it has no functionality.
            </p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default page;
