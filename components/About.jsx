import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaCopy,
} from "react-icons/fa";

import Image from "next/image";

import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiRedux,
  SiMysql,
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 color="#E34F26" key="html" />,
          <FaCss3 color="#1572B6" key="css" />,
          <FaJs color="#F7DF1E" key="js" />,
          <FaReact color="#61DAFB" key="react" />,
          <SiNextdotjs color="#fffff" key="next" />,
          <SiTailwindcss color="#38B2AC" key="tailwind" />,
          <SiBootstrap color="#7952B3" key="bootstrap" />,
        ],
      },
      {
        title: "Backend Development",
        icons: [
          <FaNodeJs color="#339933" key="node" />,
          <SiExpress color="#fffff" key="express" />,
          <SiMysql color="#4479A1" key="mysql" />,
        ],
      },
      {
        title: "Other Skills",
        icons: [
          <SiTypescript color="#3178C6" key="typescript" />,
          <SiRedux color="#764ABC" key="redux" />,
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Fullstack Web Developer - Personal Projects",
        stage: "January 2023 - Present",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Fullstack Web Development - Evangadi Tech",
        stage: "January 2024 - June 2024",
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Personal Website",
        stage: "January 2024 - Present",
      },
    ],
  },
];

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  const [index, setIndex] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("tsegasolomon635@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 10000);
  };

  return (
    <div className="h-full  md:mt-0 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center order-1 xl:order-1">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Your Partner in
            <span className="text-accent"> Realizing Digital Visions</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 hidden lg:block text-base md:text-lg xl:text-lg"
          >
            As a driven junior full-stack developer, I combine cutting-edge
            technical expertise with a collaborative, solutions-oriented
            approach to deliver impactful, user-centric web solutions. Driven by
            a deep fascination with the ever-evolving web landscape, I am a
            fast-learning, detail-oriented team player, poised to spearhead
            innovation and drive organizational growth.
          </motion.p>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[400px] mx-auto mb-6 lg:hidden text-base md:text-lg xl:text-lg"
          >
            A driven junior full-stack dev, dedicated to impactful web
            solutions. Fueled by a passion for the evolving web, I'm a
            fast-learning, solutions-oriented team player, ready to drive
            innovation.
          </motion.p>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] order-2 xl:order-1"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`
            ${
              index === itemIndex &&
              "text-accent after:bg-accent after:transition-all after:duration-300"
            } 
          cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="px-6 py-4 mt-8 rounded-md shadow-md animate-shine border-2 border-[#311f80] border-opacity-90 text-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(150, 68, 68, 0.15) 0%, rgba(85, 36, 177, 0.15) 50%, rgba(179, 31, 31, 0.15) 100%)",
              backgroundSize: "200% 200%",
              animation: "shine 8s ease infinite",
            }}
          >
            <h2 className="my-8 font-bold text-white text-2xl lg:text-4xl">
              Let's
              <span className="text-accent"> build </span>
              your website together!
            </h2>
            <button
              className={`px-6 py-3 flex text-sm md:text-md mb-6 rounded-md font-medium transition-colors mt-6 border-2 border-[#311f80] border-opacity-50 ${
                isCopied
                  ? "text-white hover:bg-gray-700"
                  : "text-white hover:bg-gray-600"
              }`}
              onClick={handleEmailCopy}
            >
              <span className="mr-3">
                <FaCopy />
              </span>
              {isCopied ? "Email Copied!" : "Copy My Email Address"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
