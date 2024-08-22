import brand1 from '../../assets/imagenes/marcas/aristol.png';
import brand2 from '../../assets/imagenes/marcas/carnet.png';
import brand3 from '../../assets/imagenes/marcas/dormeuil.png';
import brand4 from '../../assets/imagenes/marcas/LOGOHOLLAND&SHERRY .png';
import brand5 from '../../assets/imagenes/marcas/loroPiana.png';
const CarruselBrands = () => {
  return (
    <div id="carruselMarcas" className="bg-white">
      <div className=" md:flex  md:gap-32 md:mx-8  md:my-4 py-4 px-8  gap-12 grid grid-cols-2 md:justify-center  ">
        <img className="w-48 h-auto object-contain" src={brand1} alt="" />
        <img className="w-48 h-auto object-contain" src={brand2} alt="" />
        <img className="w-48 h-auto object-contain" src={brand3} alt="" />
        <img className="w-48 h-auto object-contain" src={brand4} alt="" />
        <img className="w-48 h-auto object-contain" src={brand5} alt="" />
      </div>
    </div>
  );
};
export default CarruselBrands;
