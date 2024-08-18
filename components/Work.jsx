import WorkSlider from "../components/WorkSlider";
// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Work = () => {
  return (
    <div className="h-full flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-o">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-base md:text-lg xl:text-lg"
            >
              My works showcase a diverse range of digital experiences,
              leveraging HTML5, CSS3, Tailwind, Bootstrap, JavaScript, React,
              Redux,Next.js Node.js, Express, and databases like Firebase and
              MySQL to create captivating, user-centric solutions across various
              industries.
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
