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
      <div className={`relative flex flex-col ${index % 2 === 0 ? '2xl:flex-row-reverse' : '2xl:flex-row'} py-16 2xl:px-28 lg:px-44 px-8 2xl:hover:scale-105 transition-all duration-300 ease-in-out`}>
        <div className="2xl:w-1/2 w-full h-[250px] 2xl:h-auto">
          <img className="w-full h-full object-cover" src={imgUrl} alt={titulo} />
        </div>
        <div className="relative flex flex-col justify-between  p-6 2xl:p-8 w-full 2xl:w-1/2">
          <h4 className="  2xl:text-[3.5rem] xl:text-[2.5rem] self-center font-didot font-semibold text-[1.7rem] mb-4">{titulo}</h4>
          <div className={`${index % 2 === 0 ? '2xl:pl-12 lg:pl-36 xl:self-center self-center xl:pr-40' : '2xl:pr-12 self-center  lg:pr-36 self-end xl:self-center xl:pl-40'}`}>
            <button onClick={openModal} className="bg-[#bbad81] text-white py-2 px-4 rounded-lg font-commissioner text-sm 2xl:text-base hover:bg-[#a59870] transition-all duration-200 ease-in-out">
              Ver más
            </button>
          </div>
        </div>

        <div className={`2xl:absolute ${index % 2 === 0 ? 'right-[35%] 2xl:right-[41.5%]' : 'left-[35%] 2xl:left-[41.5%]'} top-1/3 2xl:w-2/5 bg-[#fffeff]`}>
          <p className="font-commissioner text-base 2xl:text-xl py-8 px-8 text-black pb-6">{description}</p>
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




