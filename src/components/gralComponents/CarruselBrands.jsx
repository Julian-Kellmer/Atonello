import React, { useState, useEffect } from 'react';

const CarruselBrands = ({ imageCount }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Load the JSON file dynamically
    fetch('/brands.json')
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error('Error loading brand data:', error));
  }, []);

  return (
    <div id="carruselMarcas" className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center items-center p-16">
        {brands.slice(0, imageCount).map((brand, index) => (
          <img
            key={index}
            className="w-48 h-auto object-contain"
            src={brand.src}
            alt={brand.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default CarruselBrands;
