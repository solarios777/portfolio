import ServiceSlider from "../components/ServiceSlider";
// framer motion
import { motion } from "framer-motion";

import React from "react";

// variants
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <div className="h-full ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-base md:text-lg xl:text-lg"
            >
              When meeting the client, we collaborated to define the website&apos;s
              objectives, target audience, and critical capabilities, then I
              dove into coding, updating progress from initial concepts to
              polished implementation, before transforming approved designs into
              a cohesive website solution.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      {/* video */}
      <div className="flex container mt-8">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="w-full max-w-[1024px] mx-auto"
        >
          <source src="/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="h2 text-4xl m-4 hidden lg:block">
          Crafting Digital <br />
          <span className="text-accent"> Gateways </span> to the Interconnected
          Realm
        </h2>
      </div>
    </div>
  );
};

export default Services;
