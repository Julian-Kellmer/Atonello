import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Modal = ({ isOpen, closeModal, slides}) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-7xl mx-auto">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={closeModal}>
                X
                </button>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>

            </div>
          </div>
        )}
      </>
    );
  };

export default Modal;
