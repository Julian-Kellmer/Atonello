/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

{
  /* Esto es momentaneo. Cuando tengamos las imagenes les ponemos de nombre en comun diferenciandolas por color y se cambia la url. Se hace dinamico */
}
const getImageUrlForColor = (color) => {
  return `https://placehold.co/200x200/${color.replace(
    / /g,
    "-"
  )}/FFFFFF?text=${color}`;
};

const Modal = ({ isOpen, closeModal, slides }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-enter");

  useEffect(() => {
    setFadeState("fade-enter-active");
  }, [selectedIndex]);

  const handleImageClick = (index) => {
    if (index === selectedIndex) return;
    setSelectedIndex(index);
    setFadeState("fade-enter");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <div className="bg-[#FBF8F4] p-6 md:rounded-lg md:shadow-lg relative  md:max-w-7xl max-w-full mx-auto">
            <button
              className="z-20 text-4xl absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              X
            </button>

            <Swiper
              navigation={true}
              effect={"fade"}
              pagination={{ clickable: true }}
              spaceBetween={30}
              modules={[Pagination, Navigation, EffectFade]}
              className="mySwiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="p-4 md:border rounded-lg bg-[#FBF8F4] md:shadow-md h-full w-full "
                >
                  <div className="grid grid-cols-1 md:grid-cols-10 gap-4 ">
                    {/* Left: Sidebar images */}
                    <div className="col-span-1 md:col-span-1 bg-[#FBF8F4] p-4 hidden md:block">
                      {slide.colors.map((color, idx) => (
                        <img
                          key={idx}
                          src={getImageUrlForColor(color)}
                          alt={color}
                          className="mt-2 cursor-pointer"
                          onClick={() => handleImageClick(idx)}
                        />
                      ))}
                    </div>

                    {/* Center: Main Swiper */}
                    <div
                      className={`${fadeState}  col-span-1 md:col-span-4 bg-[#BF8F4] p-4`}
                    >
                      <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          {slide.colors[selectedIndex]} - Data 1
                        </SwiperSlide>
                        <SwiperSlide>
                          {slide.colors[selectedIndex]} - Data 2
                        </SwiperSlide>
                      </Swiper>
                    </div>

                    {/* Right: Details */}
                    <div
                      className={`${fadeState} col-span-1 md:col-span-5 bg-[#FBF8F4] h-3/4 p-4 `}
                    >
                      <h2 className="text-3xl md:text-5xl font-serif pb-4">
                        {slide.modalTitle}
                      </h2>
                      <div className="w-full h-1 bg-[#BCAD7E] mb-4"></div>
                      <p className="text-sm md:text-base">{slide.modalDescription}</p>
                      <div className="border w-full md:w-3/6 flex flex-col md:flex-row mt-6">
                        <div className="h-24 w-full border">Image</div>
                        <div className="bg-white flex-1 p-4">
                          <ul className="list-disc pl-5">
                            <p className="text-[#BCAD7E] font-medium text-lg font-serif ">
                              {"Color"}
                            </p>
                            <li className="text-base list-none text-sm font-semibold">
                              {slide.colors[selectedIndex]}
                            </li>
                          </ul>
                          <ul className="list-disc pl-5 mt-2">
                            <p className="text-[#BCAD7E] font-medium font-serif">
                              {"Material"}
                            </p>
                            <li className="text-base list-none text-sm font-semibold">
                              {slide.materials[selectedIndex]}
                            </li>
                          </ul>
                          <div className="w-full h-[5px] bg-[#BCAD7E] mt-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
