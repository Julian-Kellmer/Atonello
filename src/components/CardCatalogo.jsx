const CardCatalogo = ({ imgUrl, titulo, description, index }) => {
  return (
    <div className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}  py-16 md:px-44 px-8 md:hover:scale-110 transition-all duration-300 ease-in-out`}>
      <div className="  md:w-1/2 h-[350px] md:h-auto">
        <img className=" h-full object-cover" src={imgUrl} alt={titulo} />
      </div>
      <div className="relative md:justify-between flex flex-col justify-center   p-6 md:p-8 md:w-1/2 ">
        <h4 className="text-3xl md:text-6xl self-center font-serif mb-4 ">{titulo}</h4>
        <div className={` ${index % 2 === 0 ? 'md:pl-36' : 'md:pr-36 self-end'} `}>
          <button className="bg-[#bbad81] text-white py-2 px-4 rounded-lg text-sm md:text-base hover:bg-[#a59870] transition-all duration-200 ease-in-out">
            Ver más
          </button>
        </div>
      </div>

      <div className={`md:absolute ${index % 2 === 0 ? 'right-[41.5%]' : 'left-[41.5%]'} top-1/3 md:w-2/5 bg-[#fffeff] `}>
        <p className="text-base md:text-xl pt-4 px-8 text-black pb-6">{description}</p>
        <div className="w-full h-4 bg-[#bbad81] "></div>
      </div>
    </div>
  );
};

export default CardCatalogo;




