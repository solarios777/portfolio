// components
import ParticlesContainer from "../components/ParticlesContainer";
// next image
import Image from "next/image";

import ProjectsBtn from "../components/ProjectsBtn";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Hero = () => {
  return (
    <>
      {/* <ParticlesContainer /> */}
      <div className="flex flex-col lg:flex-row">
        <div className=" text-center flex flex-col xl:pt-2 xl:text-left container mx-auto">
          {/* title */}

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl lg:text-6xl font-bold pt-28 lg:pt-20 xl:pt-0 pb-4 mb-2 mt-40 md:mt-40  xl:mt-60 lg:mb-4 xl:mb-6 lg:pb-2"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-base sm:text-lg xl:text-xl"
          >
            Hello, I'm
            <span className="text-accent font-bold"> SOLOMON SALA </span>,<br /> a
            highly skilled full-stack junior developer from
            <span className="text-accent"> Addis Abeba, Ethiopia</span>. <br />
            With expertise across the software development lifecycle, I craft
            robust, scalable, and visually appealing web applications that drive
            business success through innovative, user-friendly digital
            solutions.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
        <div className=" z-40 mt-8  lg:mt-80 xl:mt-60">
          <Image src={"/tiltedlap.png"} width={1200} height={1200} />
        </div>
      </div>
    </>
  );
};

export default Hero;
