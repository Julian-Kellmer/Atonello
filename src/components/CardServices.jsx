
import { useState } from 'react'
import Modal from "./gralComponents/Modal";

const CardServices = ({ description, title, imageUrl, index, slides }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div key={index} className="transition-all duration-300 ease-in-out md:hover:scale-110 group">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover bg-no-repeat" />
        <div className="p-6 bg-[#BCAD7E] md:group-hover:bg-[#fbf8f3] transition-colors duration-300 flex flex-col  gap-8">
          <h3 className="text-3xl font-bold mb-2 text-white md:group-hover:text-[#002b55] transition-colors duration-300 font-didot  ">
            {title}
          </h3>
          <p className="text-xl mb-4 text-white md:group-hover:text-black transition-colors duration-300 font-commissioner font-light">
            {description}
          </p>
          
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

export default CardServices;
