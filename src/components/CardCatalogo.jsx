/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Modal from "./gralComponents/Modal";

const CardCatalogo = ({ imgUrl, titulo, description, index, slides }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
   <div className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} py-16 md:px-28 lg:px-44 px-8 md:hover:scale-105 transition-all duration-300 ease-in-out`}>
  <div className="md:w-1/2 w-full h-[250px] md:h-auto">
    <img className="w-full h-full object-cover" src={imgUrl} alt={titulo} />
  </div>
  <div className="relative flex flex-col justify-between  p-6 md:p-8 w-full md:w-1/2">
    <h4 className="text-3xl md:text-4xl lg:text-5xl self-center font-didot font-semibold mb-4">{titulo}</h4>
    <div className={`${index % 2 === 0 ? 'md:pl-12 lg:pl-36' : 'md:pr-12 lg:pr-36 self-end'}`}>
      <button onClick={openModal} className="bg-[#bbad81] text-white py-2 px-4 rounded-lg font-commissioner text-sm md:text-base hover:bg-[#a59870] transition-all duration-200 ease-in-out">
        Ver más
      </button>
    </div>
  </div>

  <div className={`md:absolute ${index % 2 === 0 ? 'right-[35%] md:right-[41.5%]' : 'left-[35%] md:left-[41.5%]'} top-1/3 md:w-2/5 bg-[#fffeff]`}>
    <p className="font-commissioner text-base md:text-xl py-8 px-8 text-black pb-6">{description}</p>
    <div className="w-full h-4 bg-[#bbad81]"></div>
  </div>
</div>
    
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        slides={slides}
      />
    </>
  );
};

export default CardCatalogo;




