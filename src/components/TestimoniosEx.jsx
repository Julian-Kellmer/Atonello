import robert1 from '../assets/imagenes/testimonios/Robertopalazuelos/robert1.jpg';
import robert2 from '../assets/imagenes/testimonios/Robertopalazuelos/robert2.jpg';
import robert3 from '../assets/imagenes/testimonios/Robertopalazuelos/robert3.jpg';
const TestimoniosEx = () => {
  return (
    <div className='flex flex-col py-28 gap-32 '>
      <div className=" md:mt-[-20rem] ">
        <div className="flex gap-8 px-16 py-8 justify-around">
          <img className="md:w-[30%] h-auto object-contain" src={robert1} alt="" />
          <img className="w-[30%] h-auto object-contain hidden md:block " src={robert2} alt="" />
          <img className="w-[30%] h-auto object-contain hidden md:block  " src={robert3} alt="" />
        </div>
        <div className="py-4 md:flex-row flex flex-col">
          <div className="fles flex-col text-center flex-1 px-16">
            <h3 className="text-8xl font-serif">
              Roberto <br />
              Palazuelos
            </h3>
            <p className="text-xl px-32 pt-8 font-medium leading-relaxed">
              "En Antonello, encontré la perfección en cada detalle. La calidad de sus trajes y el
              servicio personalizado superan cualquier expectativa. "
            </p>
          </div>
          <div className="flex-1  bg-[#f2efea]">
            <p className="md:text-2xl text-lg pr-32 py-8 pl-8 pt-8 font-medium leading-relaxed text-black">
              Roberto Palazuelos ha confiado en Antonello para confeccionar sus trajes a la medida,
              camisas elegantes y una variedad de accesorios exclusivos. Cada prenda refleja su
              estilo sofisticado y su exigencia por la excelencia, haciendo de Antonello su
              sastrería de referencia para todas sus necesidades de vestimenta.
            </p>
          </div>
        </div>
      </div>


      <div className=" ">
        <div className="flex gap-8 px-16 py-8 justify-around">
          <img className="md:w-[30%] h-auto object-contain" src={robert1} alt="" />
          <img className="w-[30%] h-auto object-contain hidden md:block " src={robert2} alt="" />
          <img className="w-[30%] h-auto object-contain hidden md:block  " src={robert3} alt="" />
        </div>

        <div className="py-4 md:flex-row  md:items-center md:justify-center flex flex-col ">
          <div className="flex-1  bg-[#f2efea]">
            <p className="md:text-2xl text-lg text-end pr-8    py-8 pl-8 pt-8 font-medium leading-relaxed text-black">
              Roberto Palazuelos ha confiado en Antonello para confeccionar sus trajes a la medida,
              camisas elegantes y una variedad de accesorios exclusivos. Cada prenda refleja su
              estilo sofisticado y su exigencia por la excelencia, haciendo de Antonello su
              sastrería de referencia para todas sus necesidades de vestimenta.
            </p>
          </div>
          <div className='h-32 w-1  bg-[#9d9117]'></div>
          <div className="fles flex-col text-center flex-1 px-16">
            <h3 className=" md:text-8xl  text-2xl font-serif">
              Roberto <br />
              Palazuelos
            </h3>
            <p className="text-xl px-32 pt-8 font-medium leading-relaxed">
              "En Antonello, encontré la perfección en cada detalle. La calidad de sus trajes y el
              servicio personalizado superan cualquier expectativa. "
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
export default TestimoniosEx;
