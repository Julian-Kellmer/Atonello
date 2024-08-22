import React from 'react';

const Modal = ({ isOpen, closeModal, modalTitle, modalDescription, colors, materials }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-3xl mx-auto">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                X
              </button>
              <h2 className="text-2xl font-semibold mb-4">{modalTitle}</h2>
              <p className="text-base md:text-xl mb-4">{modalDescription}</p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Colores:</h3>
                <ul className="list-disc pl-5">
                  {colors.map((color, index) => (
                    <li key={index} className="text-base">
                      {color}
                    </li>
                  ))}
                </ul>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold">Materiales:</h3>
                <ul className="list-disc pl-5">
                  {materials.map((material, index) => (
                    <li key={index} className="text-base">
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default Modal;
