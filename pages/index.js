// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className=" h-full ">
      {/* taxt */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 overflow-y-auto md:mt-2">
        <div className="text-center flex flex-col justify-center  xl:pt-2 xl:text-left h-full container mx-auto ">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl lg:text-6xl font-bold pt-28 lg:pt-20 xl:pt-0 pb-4 lg:pb-2"
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
            <span className="text-accent font-bold"> SOLOMON SALA </span>, a
            highly skilled full-stack developer from
            <br />
            <span className="text-accent">Addis Abeba, Ethiopia</span>. With
            expertise across the software development lifecycle, I craft robust,
            scalable, and visually appealing web applications that drive
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
      </div>
      {/* image */}
      <div className="w-[1400px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>

        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
