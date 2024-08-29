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

const certificateSlides = {
  slides: [
    {
      images: [
        {
          title: "Evangadi Tech",
          path: "/SolomonSala.jpg",
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
      {certificateSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 grid-rows-1 gap-4 cursor-pointer">
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
