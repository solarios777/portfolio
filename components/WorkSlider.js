import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiFirebase,
  SiVercel,
  SiTailwindcss,
  SiMysql,
  SiRedux,
} from "react-icons/si";

// next image
import Image from "next/image";

// next link
import Link from "next/link";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Evangadi-Forum",
          path: "/evantu.jpeg",
          liveUrl: "https://evangadi-discussion-forum-g11.netlify.app/",
          githubUrl: "https://github.com/solarios777/Evangadiforumbackend",
          technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "#339933" },
            { name: "Express", color: "#83CD29" },
            { name: "Mysql", color: "#00758F" },
            { name: "Tailwindcss", color: "#38B2AC" },
            { name: "Netlify", color: "#00C7B7" },
          ],
        },
        {
          title: "Amazon",
          path: "/amazon.png",
          liveUrl: "https://ariosfagos-solarios.netlify.app/",
          githubUrl: "https://github.com/solarios777/amazon",
          technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "CSS", color: "#1572B6" },
            { name: "Node.js", color: "#83CD29" },
            { name: "Express", color: "#83CD29" },
            { name: "Netlify", color: "#00C7B7" },
          ],
        },
        {
          title: "Netflix",
          path: "/netflix.png",
          liveUrl: "https://solarios777.github.io/Netflix-clone/",
          githubUrl: "https://github.com/solarios777/Netflix-clone",
          technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "CSS", color: "#1572B6" },
            { name: "GitHub Pages", color: "#00758F" },
            { name: "Redux", color: "#764ABC" },
          ],
        },
        {
          title: "Apple",
          path: "/apple.png",
          liveUrl:
            "https://applepageclone-git-main-solarios777s-projects.vercel.app/",
          githubUrl: "https://github.com/solarios777/applepageclone1",
          technologies: [
            { name: "HTML", color: "#E34F26" },
            { name: "CSS", color: "#1572B6" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "Vercel", color: "#000000" },
          ],
        },
      ],
    },
    {
      images: [
        {
          title: "Netflix",
          path: "/netflix.png",
          liveUrl: "https://solarios777.github.io/Netflix-clone/",
          githubUrl: "https://github.com/solarios777/Netflix-clone",
          technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "CSS", color: "#1572B6" },
            { name: "GitHub Pages", color: "#00758F" },
            { name: "Redux", color: "#764ABC" },
          ],
        },
        {
          title: "Amazon",
          path: "/amazon.png",
          liveUrl: "https://ariosfagos-solarios.netlify.app/",
          githubUrl: "https://github.com/solarios777/amazon",
          technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "CSS", color: "#1572B6" },
            { name: "Node.js", color: "#83CD29" },
            { name: "Express", color: "#83CD29" },
            { name: "Netlify", color: "#00C7B7" },
          ],
        },
        {
          title: "Evangadi-Forum",
          path: "/evangadi.png",
          liveUrl: "https://evangadi-discussion-forum-g11.netlify.app/",
          githubUrl: "https://github.com/solarios777/Evangadiforumbackend",
          technologies: [
            { name: "React", color: "#61DAFB" },
            { name: "Node.js", color: "##83CD29" },
            { name: "Express", color: "#83CD29" },
            { name: "Mysql", color: "#00758F" },
            { name: "Tailwindcss", color: "#38B2AC" },
            { name: "Netlify", color: "#00C7B7" },
          ],
        },
        {
          title: "Apple",
          path: "/apple.png",
          liveUrl:
            "https://applepageclone-git-main-solarios777s-projects.vercel.app/",
          githubUrl: "https://github.com/solarios777/applepageclone1",
          technologies: [
            { name: "HTML", color: "#E34F26" },
            { name: "CSS", color: "#1572B6" },
            { name: "JavaScript", color: "#F7DF1E" },
            { name: "Vercel", color: "#000000" },
          ],
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-full"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={3000}
                        alt=""
                        className="object-cover w-full h-full"
                      />

                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#421c3b] to-[#5e35d8] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      {/* title */}
                      <div className="absolute top-4 left-4 text-white px-4 py-2 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {image.title}
                      </div>

                      {/* Technology icons */}
                      <div className="absolute top-4 right-0 flex gap-x-0 ">
                        {image.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="bg-[#1a1919] text-[#image.technologies[index].color] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            {tech.name === "React" && (
                              <FaReact size={16} color={tech.color} />
                            )}
                            {tech.name === "CSS" && (
                              <SiCss3 size={16} color={tech.color} />
                            )}
                            {tech.name === "Node.js" && (
                              <SiNodedotjs size={16} color={tech.color} />
                            )}
                            {tech.name === "Express" && (
                              <SiExpress size={16} color={tech.color} />
                            )}
                            {tech.name === "HTML" && (
                              <SiHtml5 size={16} color={tech.color} />
                            )}
                            {tech.name === "JavaScript" && (
                              <SiJavascript size={16} color={tech.color} />
                            )}
                            {tech.name === "Netlify" && (
                              <SiNetlify size={16} color={tech.color} />
                            )}
                            {tech.name === "GitHub Pages" && (
                              <SiFirebase size={16} color={tech.color} />
                            )}
                            {tech.name === "Vercel" && (
                              <SiVercel size={16} color={tech.color} />
                            )}
                            {tech.name === "Tailwindcss" && (
                              <SiTailwindcss size={16} color={tech.color} />
                            )}
                            {tech.name === "Mysql" && (
                              <SiMysql size={16} color={tech.color} />
                            )}
                            {tech.name === "Redux" && (
                              <SiRedux size={16} color={tech.color} />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* GitHub icon */}
                      <div className="absolute bottom-2 right-2 bg-[#1a1919] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <a
                          href={image.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub size={16} />
                        </a>
                      </div>

                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <Link
                          href={image.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                        >
                          {/* title part one */}
                          <div className="delay-100">LIVE</div>
                          {/* title part two */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icons */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
