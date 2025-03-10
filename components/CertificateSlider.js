import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import CertificateModal from "./Model";

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
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
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
                      onClick={() => openModal(image)}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
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

      {selectedImage && (
        <CertificateModal image={selectedImage} onClose={closeModal} />
      )}
    </>
  );
};

export default WorkSlider;