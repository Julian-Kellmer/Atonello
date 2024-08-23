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
          <div className="bg-white p-8 rounded-lg shadow-lg relative md:max-w-7xl mx-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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
                  className="p-4 border rounded-lg bg-gray-100 shadow-md h-96 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                    <div className="col-span-1 md:col-span-1 bg-gray-200 p-4">
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

                    <div className={`${fadeState} col-span-1 md:col-span-4 bg-gray-300 p-4`}>
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
                    <div className={`${fadeState} col-span-1 md:col-span-5 bg-gray-400 p-4`}>
                      <h2 className="text-lg font-semibold">
                        {slide.modalTitle}
                      </h2>
                      <p>{slide.modalDescription}</p>
                      <ul className="list-disc pl-5">
                      <li className="text-base">
                          {slide.colors[selectedIndex]}
                        </li>
                      </ul>
                      <ul className="list-disc pl-5">
                        <li className="text-base">
                          {slide.materials[selectedIndex]}
                        </li>
                      </ul>
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
